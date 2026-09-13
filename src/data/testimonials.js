/**
 * Client testimonials shown on /marketing.
 *
 * When this list is empty, the page falls back to "Client references available
 * on request." Adding an entry swaps that line for the real thing
 * automatically; no page edit needed.
 *
 * Only add a testimonial you may publish: either one the client gave explicit
 * written permission for, or a review they posted publicly themselves (quote
 * those verbatim and cite the source). Public Google reviews live in
 * src/data/reviews.js so the homepage and this page quote the same text.
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
import { caleyReview } from '@/data/reviews';

export const restorationTestimonials = [caleyReview];
