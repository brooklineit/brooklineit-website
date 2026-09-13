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
