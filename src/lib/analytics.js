/**
 * Google Analytics 4.
 *
 * Empty by design until Brookline IT has its own GA4 property. The old ID
 * (G-BZT7VEHYYB) was renamed to STOP Restoration's property and must NOT be
 * reused here. With this blank, no tag loads and trackLead() is a no-op.
 *
 * To turn analytics on: create a GA4 property named "Brookline IT" with a web
 * stream for www.brooklineit.com, paste its G- ID below, and deploy. Then mark
 * `generate_lead` as a key event in GA4 (Admin → Events).
 */
export const GA_MEASUREMENT_ID = '';

/**
 * Record a successful form submission as a GA4 `generate_lead` event.
 * @param {string} leadType  e.g. 'it_checkup' or 'market_review'
 */
export function trackLead(leadType) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'generate_lead', { lead_type: leadType });
}
