/**
 * Copy for the general /marketing page.
 *
 * Restoration is the specialty, not the whole offering — this page exists so a
 * dentist or a builder clicking "Marketing" in the nav doesn't land on storm
 * ads and conclude we only serve restoration contractors.
 *
 * ⚠️ Honesty rule: as of Sep 2026 every live marketing client is a restoration
 * company, so the industries below are framed as who this SUITS, never as a
 * client list, and all proof links through to the restoration case studies,
 * clearly labelled as restoration. Do not imply a track record we can't show.
 */
export const marketingGeneral = {
  meta: {
    title: 'Marketing',
    description:
      'Google Ads, local SEO, and websites built to turn visitors into calls — run by the same team that manages your IT. Deep specialty in restoration.',
    path: '/marketing',
  },

  hero: {
    tag: 'Marketing',
    heading: 'Marketing that makes the phone ring — and shows you why.',
    body: 'Google Ads, local SEO, and websites built to turn visitors into calls, for local businesses that need work coming in. Run by the same people who manage your IT, on tools we built ourselves — so the tracking actually works and the reporting is something you can check.',
    primaryCta: { text: 'Talk to us about marketing →', href: '/contact' },
    secondaryCta: { text: 'See the restoration case studies', href: '/marketing/restoration' },
  },

  pillars: [
    {
      num: '01',
      title: 'Google Ads Management',
      sub: 'The engine — built, watched, and reported on',
      items: [
        'Campaigns built around your services and the cities you actually serve',
        'Weekly search-term review, with negative keywords added continuously',
        'Budget and bid management against a hard monthly ceiling you set',
        'Conversion tracking built, then verified with live test calls and forms',
        'The ad account stays yours — full access, always',
      ],
    },
    {
      num: '02',
      title: 'Local SEO & Google Business Profile',
      sub: 'The part that compounds',
      items: [
        'Your Google Business Profile filled in properly: categories, services, photos, posts',
        'Citation and NAP audits across the directories that matter',
        'Pages built for what people in your area actually search',
        'A review-request process your team can keep up with',
        'Reviews are the #1 local ranking factor — we build the habit',
      ],
    },
    {
      num: '03',
      title: 'Websites Built to Convert',
      sub: 'A site that produces calls, not compliments',
      items: [
        'Fast, mobile-first, click-to-call everywhere',
        'A lead form on every page, tagged so you know where each lead came from',
        'Call and form tracking wired into Google Ads and Analytics',
        'Hosting, security, and ongoing edits included',
        'You own the domain and the site — always',
      ],
    },
    {
      num: '04',
      title: 'Reporting You Can Check',
      sub: 'No black box',
      items: [
        'Live dashboard: spend, clicks, cost per click, leads',
        'Plain-English reporting: what changed and why',
        'Every account change is logged and reviewable',
        'Numbers pulled fresh from the API, not screenshots',
        'We tell you what isn’t working, including when a dollar is better spent elsewhere',
      ],
    },
  ],

  whoFor: {
    tag: 'Who this suits',
    heading: 'Local businesses that live on inbound work',
    body: 'If your growth depends on people finding you when they need something fixed, built, or taken care of, this is built for you. These are the kinds of businesses the system fits — restoration is where we have gone deepest, and where our published numbers come from.',
    industries: [
      { name: 'Restoration', sub: 'water, fire, mold — our specialty' },
      { name: 'Construction & trades', sub: 'builders, remodelers, specialty contractors' },
      { name: 'HVAC & plumbing', sub: 'emergency and scheduled work' },
      { name: 'Dental & healthcare', sub: 'practices taking new patients' },
      { name: 'Professional services', sub: 'firms selling expertise locally' },
      { name: 'Churches & nonprofits', sub: 'presence and reach on a tight budget' },
    ],
  },

  proof: {
    tag: 'Proof',
    heading: 'Where our numbers come from',
    body: 'Our deepest proof is in restoration, so that is where the detailed case studies live: one account where cost per click fell from $25.62 to $8.88 while clicks per dollar went up 2.7×, and another that went from 758 ad impressions in seven and a half months to 5,803 in six weeks. Both pages show the figures with the dates they were pulled.',
    linkText: 'See the restoration case studies →',
    linkHref: '/marketing/restoration',
    note: 'Every marketing client we have today is a restoration company. We are not going to dress that up as a portfolio across a dozen industries — the system is the same, and the proof is where it is.',
  },

  cta: {
    heading: 'Want to know what your market looks like?',
    body: 'Tell us what you do and where you work. We will look at your current ads, your Google presence, and what your competitors are doing — and tell you straight whether we can help.',
    ctaText: 'Get in touch →',
    ctaHref: '/contact',
  },
};
