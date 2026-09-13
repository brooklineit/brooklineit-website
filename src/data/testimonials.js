/**
 * Client testimonials shown on /marketing.
 *
 * When this list is empty, the page falls back to "Client references available
 * on request." Adding an entry swaps that line for the real thing
 * automatically; no page edit needed.
 *
 * Only add a testimonial you may publish: either one the client gave explicit
 * written permission for, or a review they posted publicly themselves (quote
 * those verbatim and cite the source, e.g. a Google review).
 *
 * Shape:
 *   {
 *     quote:   'What they said.',
 *     name:    'Jane Doe',
 *     title:   'Owner',
 *     company: 'Example Restoration',
 *     city:    'Charleston, SC',
 *     source:  'Google review, September 2026',   // optional
 *   }
 */
export const restorationTestimonials = [
  {
    // Verbatim excerpt of Caley's public 5-star Google review of Brookline IT,
    // posted Sep 11 2026. Ellipsis marks the trimmed middle; wording unchanged.
    quote:
      'I hired Vince and within a few weeks the phones were non stop ringing. '
      + 'We are probably the busiest we have ever been. I\u2019m going to need to hire '
      + 'new staff soon to keep up with the work flow\u2026 I highly recommend Brookline '
      + 'IT for your digital needs!',
    name: 'Caley Rodriguez',
    company: 'STOP Restoration of the Carolinas',
    city: 'Rock Hill, SC',
    source: '5-star Google review, September 2026',
  },
];
