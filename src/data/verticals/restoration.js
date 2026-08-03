import { restorationCaseStats } from '@/data/case-stats';
import { restorationTestimonials } from '@/data/testimonials';

/**
 * Vertical config for /marketing (restoration).
 *
 * This is the only config today. To add a sibling vertical page (e.g.
 * /marketing/roofing), copy this file, change the copy and proof, and render
 * the same section components — no new markup or styling should be needed.
 *
 * Note: this file contains a small amount of JSX (the emphasised word in the
 * storm body), so it is a component-adjacent module rather than pure data.
 */
export const restorationVertical = {
  meta: {
    title: 'Marketing for Restoration Companies',
    description:
      'Google Ads, local SEO, and websites built to convert for water, fire, and mold restoration companies. Storm-triggered ad automation included. One client per market.',
    socialDescription:
      'Google Ads, local SEO, and websites built to convert for restoration companies. Storm-triggered ad automation included.',
    path: '/marketing',
  },

  hero: {
    tag: 'Marketing',
    heading: 'When the storm hits, your ads should already be live.',
    body: 'We built software that watches National Weather Service alerts for your counties and drafts your budget increase, your ad copy, and your Google post before your competitors are awake. Wrapped around full Google Ads management, local SEO, and a website built to turn visitors into calls — for water, fire, and mold restoration companies.',
    primaryCta: { text: 'Request a Market Review →', href: '/market-review' },
    secondaryCta: { text: 'See What We Build', href: '/what-we-build' },
  },

  intro: {
    heading: 'An IT company that does marketing? Yes — and that\'s the advantage.',
    body: 'Most restoration marketing agencies resell the same dashboard to every client. We build our own tools. The storm automation below, the reporting pipeline, the tracking — that\'s software we wrote, running on infrastructure we manage. When something needs to work differently for your market, we change the code.',
    exclusivity: {
      tag: 'One client per market',
      heading: 'We won\'t run ads for your competitor.',
      body: 'We can\'t bid against ourselves and serve you honestly, so we don\'t. Work with us and you\'re our only client in your trade, in your market — no one else running water, fire, or mold ads against you. First come, first served.',
    },
  },

  storm: {
    tag: 'Built in-house',
    heading: 'The Storm-Ready System',
    body: (
      <>
        In restoration, the storm <em>is</em> the demand spike. Whoever shows up first that night wins the phone call. So we built software that watches for the storm and drafts your response before your competitors are awake.
      </>
    ),
    points: [
      'Monitors National Weather Service alerts for your counties, around the clock',
      'The night a hurricane, tropical storm, flood, or freeze warning hits, it drafts a budget increase, storm-specific ad copy, and a Google post — usually within the hour',
      'Nothing spends until you approve it. One tap.',
    ],
    aside: {
      label: 'Why it matters',
      lead: 'You don\'t have to outspend the national franchises. You beat them on timing.',
      note: 'Approve-to-act by design — the system proposes, a human decides. Nothing changes your budget automatically.',
    },
  },

  pillars: [
    {
      title: 'Google Ads Management',
      sub: 'The engine — built, watched, and reported on',
      items: [
        'Service and city-specific ad groups, each matched to its own landing page',
        'Weekly search-term review with negative keywords added continuously',
        'Local Services Ads (LSA) profile configuration and job-type cleanup',
        'Budget and bid management against a hard monthly ceiling you set',
        'Conversion tracking built, then verified with live test calls and forms',
        'Ads run 24/7 — emergencies don’t keep business hours',
      ],
    },
    {
      title: 'A Website Built to Convert',
      sub: 'Around 20 pages, designed to produce calls',
      items: [
        'Home, service pages, and a landing page for every city you serve',
        'Lead form on every page, tagged by city and service',
        'Call tracking and form tracking wired into Google Ads',
        'Fast, mobile-first, click-to-call everywhere',
        'Hosting, security, and ongoing edits included',
        'You own the domain and the site — always',
      ],
    },
    {
      title: 'Local SEO & Content',
      sub: 'The part that compounds',
      items: [
        'Blog articles written for what homeowners in your market actually search',
        'Weekly Google Business Profile posts',
        'Citation and NAP audits across the directories that matter',
        'City-by-service pages added over time',
        'A same-day review-request process for your crew',
        'Reviews are the #1 local ranking factor — we build the habit',
      ],
    },
    {
      title: 'Reporting You Can Check',
      sub: 'No black box',
      items: [
        'Live dashboard: spend, clicks, cost per click, leads',
        'Monthly plain-English report: what changed and why',
        'Every account change is logged and reviewable',
        'The ad account stays yours — full access, always',
        'We take Manager access only, never ownership',
        'Numbers are pulled fresh from the API, not screenshots',
      ],
    },
  ],

  results: {
    tag: 'Results',
    heading: 'What this looks like in practice',
    intro: 'From a restoration company in the Carolinas we\'ve managed since late 2025. These figures come from their live Google Ads account.',
    stats: restorationCaseStats,
    callout: (
      <>
        In another market, a rebuilt Local Services profile and three new Search campaigns produced <strong>more ad impressions in 12 days than the previous seven and a half months combined</strong> — achieved by fixing configuration, not by spending more.
      </>
    ),
    fallbackNote: 'Client references available on request.',
    disclaimer: 'These are individual results in specific markets — we won\'t promise you identical numbers. What you get is the same system and the same transparency.',
    testimonials: restorationTestimonials,
  },

  whoThisIsFor: {
    heading: 'Who this is for',
    body: 'Water, fire, mold, smoke, and biohazard restoration companies that want their phone to ring more often and know exactly why it did. Owner-operated firms competing against national franchises are where this works best.',
    adjacentNote: 'Built for restoration. If you\'re in roofing or another storm-driven trade and this sounds like your problem, ask — the system transfers.',
    marketsLabel: 'Currently serving',
    markets: ['Charleston, SC', 'Cape Coral & Southwest Florida', 'Rock Hill, SC & Charlotte metro'],
  },

  cta: {
    heading: 'Is your market still open?',
    body: 'We take one restoration company per market. Tell us where you work and we’ll tell you straight — plus what we see in your current ads and local presence.',
    ctaText: 'Request a Market Review →',
    ctaHref: '/market-review',
  },

  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.brooklineit.com/marketing#service',
    name: 'Marketing for Restoration Companies',
    serviceType: 'Digital Marketing for Restoration Contractors',
    description:
      'Google Ads management, local SEO, conversion-focused websites, and storm-triggered ad automation for water, fire, and mold restoration companies.',
    provider: { '@id': 'https://www.brooklineit.com/#business' },
    areaServed: [
      { '@type': 'State', name: 'South Carolina' },
      { '@type': 'State', name: 'North Carolina' },
      { '@type': 'State', name: 'Florida' },
      { '@type': 'State', name: 'Pennsylvania' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Restoration Marketing Services',
      itemListElement: [
        'Google Ads Management',
        'Local Services Ads (LSA) Management',
        'Local SEO & Google Business Profile',
        'Website Design & Development',
        'Conversion Tracking & Analytics',
        'Storm-Triggered Ad Automation',
      ].map((n) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: n } })),
    },
  },
};
