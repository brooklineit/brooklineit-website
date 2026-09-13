/**
 * Public Google reviews of Brookline IT.
 *
 * These are quoted VERBATIM from reviews clients posted publicly on our Google
 * Business Profile, and every card cites the source. That is why they need no
 * separate written release — unlike a privately given testimonial, which does.
 * An ellipsis may mark trimmed text; never reword a review.
 *
 * Used on the homepage, and the restoration one is re-exported to /marketing
 * via src/data/testimonials.js.
 */
export const GOOGLE_REVIEWS_URL = 'https://maps.google.com/?cid=3947530190270250968';

/** Caley Rodriguez, posted Sep 11 2026. Middle trimmed, wording unchanged. */
export const caleyReview = {
  quote:
    'I hired Vince and within a few weeks the phones were non stop ringing. '
    + 'We are probably the busiest we have ever been. I’m going to need to hire '
    + 'new staff soon to keep up with the work flow… I highly recommend Brookline '
    + 'IT for your digital needs!',
  name: 'Caley Rodriguez',
  company: 'STOP Restoration of the Carolinas',
  city: 'Rock Hill, SC',
  source: '5-star Google review, September 2026',
};

/** Lisa Tuffy, posted early 2026 after a support ticket. Quoted in full. */
export const lisaReview = {
  quote: 'Quick response time & solution to my problem.',
  name: 'Lisa Tuffy',
  source: '5-star Google review',
};

export const googleReviews = [caleyReview, lisaReview];
