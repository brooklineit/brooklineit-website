/**
 * Case-study figures quoted on /marketing.
 *
 * ⚠️ SINGLE SOURCE OF TRUTH — these same numbers appear in client proposals.
 * If a proposal figure changes, change it here too, and vice versa. Do not
 * edit these inline in a page component.
 *
 * Source: STOP Restoration of the Carolinas (Rock Hill, SC) — their live
 * Google Ads account (170-982-4298) and GA4 property 500037397. Pulled and
 * verified Sep 12 2026:
 *   Mar 2026   92 clicks   $2,357.44   CPC $25.62   (last full month before us)
 *   Feb 2026  348 clicks   $4,203.64   CPC $12.08
 *   Aug 2026  286 clicks   $3,037.81   CPC $10.62
 *   Sep 1-11  123 clicks   $1,092.28   CPC  $8.88
 *   Clicks per $1,000: Mar 39 → Jun-Sep avg 107 (2.7x)
 *   GA4 last 90 days: 1,398 sessions, 107 key events (794 sessions paid search)
 *   Negatives live in the account: 1,494 campaign-level + 254 in shared sets
 * Re-verify with a GAQL pull before changing any figure here.
 */
export const restorationCaseStats = [
  {
    val: '$25.62 → $8.88',
    label: 'Cost per click in the same account: the last full month before we took over, vs. this month',
  },
  {
    val: '2.7×',
    label: 'Clicks for every dollar of ad spend, compared with that same month',
  },
  {
    val: '$4,200 → $2,900',
    label: 'Monthly ad spend — down, while click volume roughly tripled',
  },
  {
    val: '107',
    label: 'Lead actions from their website in the last 90 days: calls, click-to-call, and form submissions',
  },
  {
    val: '~$19',
    label: 'Incremental ad spend behind a booked flood job the day after a July storm alert',
  },
  {
    val: '1,700+',
    label: 'Negative keywords now filtering junk, DIY, and competitor clicks out of the account',
  },
];

/**
 * Second case study on /marketing — a restoration company in Charleston, SC.
 *
 * ⚠️ Published ANONYMOUSLY at the client's request: name the market, never the
 * company or the franchise brand. Their service agreement (§13) makes
 * performance data confidential; the client approved this use on Sep 12 2026.
 *
 * Receipts, pulled Sep 12 2026:
 *   BEFORE — their own Local Services account, Dec 1 2025 – Jul 18 2026
 *     baseline (archived screenshot): 758 impressions (~3.3/day), 1 charged
 *     phone lead, $128.52 of media. No Search campaigns existed on the account.
 *   AFTER — GAQL, Aug 1 – Sep 11 2026: 5,803 impressions, 313 clicks,
 *     $3,562.67, 15 conversions across C#1 Water (2,203/99/10),
 *     C#2 Mold (2,992/160/4), C#4 Fire (200/11/1), C#3 Brand (8/0/0) and the
 *     rebuilt Local Services campaign (400 impressions, 43 clicks).
 *   SITE — Netlify form 6a5e45850c33f50008e3908f: 17 submissions since
 *     Jul 20 2026. GA4 property 546262048: 819 sessions in 90 days.
 */
export const charlestonCase = {
  label: 'A restoration company in Charleston, SC',
  beforeLabel: 'Before us',
  beforePeriod: 'Dec 2025 – Jul 2026 · 7½ months',
  afterLabel: 'With us',
  afterPeriod: 'Aug 1 – Sep 11, 2026 · 6 weeks',
  rows: [
    { metric: 'Ad impressions', before: '758', after: '5,803' },
    { metric: 'Recorded leads from ads', before: '1', after: '15' },
    { metric: 'Search campaigns running', before: 'None', after: '4, plus a rebuilt Local Services profile' },
    { metric: 'Their own website', before: 'A corporate page they did not control', after: '17 form leads since it launched' },
  ],
  note: 'They are spending more now — about $3,600 in that six-week window, against almost nothing before. That is the point: the budget had been sitting idle in a misconfigured account. Rebuilding it is what turned spend into impressions, clicks, and recorded leads.',
};
