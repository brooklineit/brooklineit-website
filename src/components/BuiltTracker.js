'use client';
import { useEffect } from 'react';

/** How long the page must be open and visible before it counts as an open. */
const OPEN_AFTER_MS = 3000;
/** The heading at the foot of the report; reaching it counts as a read. */
const READ_MARKER_ID = 'why-we-did-this';

function send(code, event) {
  const body = JSON.stringify({ r: code, event });
  // sendBeacon survives the tab closing; fetch with keepalive is the fallback.
  if (navigator.sendBeacon) {
    const ok = navigator.sendBeacon('/api/built-view', new Blob([body], { type: 'application/json' }));
    if (ok) return;
  }
  fetch('/api/built-view', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: true,
  }).catch(() => {});
}

/** Log each event at most once per browser tab session. */
function once(code, event) {
  const key = `built:${code}:${event}`;
  try {
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, '1');
  } catch {
    // Private mode or storage blocked: send anyway rather than lose the view.
  }
  send(code, event);
}

/**
 * Attributes a /built view to the recipient in `?r=`. Renders nothing.
 * Without an `r` parameter it does nothing at all.
 */
export default function BuiltTracker() {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('r');
    if (!code) return;

    // Open: visible for a few seconds, so a background tab or a scanner that
    // briefly renders the page doesn't count.
    let visibleSince = document.visibilityState === 'visible' ? Date.now() : null;
    const tick = setInterval(() => {
      if (document.visibilityState !== 'visible') {
        visibleSince = null;
        return;
      }
      visibleSince ??= Date.now();
      if (Date.now() - visibleSince >= OPEN_AFTER_MS) {
        once(code, 'open');
        clearInterval(tick);
      }
    }, 500);

    // Read: the closing heading scrolled into view.
    let observer;
    const marker = document.getElementById(READ_MARKER_ID);
    if (marker && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          once(code, 'open'); // reading implies opening, even if very fast
          once(code, 'read');
          observer.disconnect();
        }
      });
      observer.observe(marker);
    }

    return () => {
      clearInterval(tick);
      observer?.disconnect();
    };
  }, []);

  return null;
}
