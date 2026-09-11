/**
 * Google Analytics 4 — property "Brookline IT" (created Sep 11 2026), web
 * stream "brooklineit.com". The old ID G-BZT7VEHYYB belongs to STOP
 * Restoration's property and must NOT be used here. Set this to '' to turn
 * the tag off; trackLead() is then a no-op.
 *
 * `generate_lead` is marked as a key event in GA4 (Admin → Key events).
 */
export const GA_MEASUREMENT_ID = 'G-QJ9KK4CN49';

/**
 * Record a successful form submission as a GA4 `generate_lead` event.
 * @param {string} leadType  e.g. 'it_checkup' or 'market_review'
 */
export function trackLead(leadType) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'generate_lead', { lead_type: leadType });
}
