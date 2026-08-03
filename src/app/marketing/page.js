import Link from 'next/link';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Marketing for Restoration Companies',
  description: 'Google Ads, local SEO, and websites built to convert for water, fire, and mold restoration companies. Storm-triggered ad automation included. One client per market.',
  alternates: { canonical: '/marketing' },
  openGraph: {
    title: 'Marketing for Restoration Companies · Brookline IT',
    description: 'Google Ads, local SEO, and websites built to convert for restoration companies. Storm-triggered ad automation included.',
    url: 'https://www.brooklineit.com/marketing',
    type: 'website',
  },
};

const serviceJsonLd = {
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
};

function Pillar({ num, title, sub, items }) {
  return (
    <div style={{ background: 'var(--white)', padding: 40 }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--warm-400)', letterSpacing: '0.08em', marginBottom: 14 }}>{num}</div>
      <h3 style={{ fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 700, color: 'var(--warm-800)', letterSpacing: '-0.02em', marginBottom: 6 }}>{title}</h3>
      <div style={{ fontSize: 14, color: 'var(--green-600)', fontWeight: 500, marginBottom: 18 }}>{sub}</div>
      <div className="feature-list" style={{ margin: 0 }}>
        {items.map((f, i) => (
          <div key={i} className="feature-item" style={i === 0 ? { borderTop: 'none' } : {}}>
            <div className="feature-dot" /><p>{f}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Marketing() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <section className="page-hero">
        <div className="wrap">
          <div className="tag">Marketing</div>
          <h1>Marketing for restoration companies.</h1>
          <p>Google Ads, local SEO, and a website built to turn visitors into calls &mdash; plus storm-triggered ad automation we built ourselves. The same system we run for water, fire, and mold restoration companies in the Carolinas and Florida.</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
            <Link href="/contact" className="btn btn-dark">Request a Market Review &rarr;</Link>
            <Link href="/what-we-build" className="btn btn-ghost">See What We Build</Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="content" style={{ background: 'var(--white)' }}>
        <div className="wrap">
          <div className="two-col" style={{ marginBottom: 48 }}>
            <div>
              <h2>An IT company that does marketing? Yes &mdash; and that&apos;s the advantage.</h2>
              <p>Most restoration marketing agencies resell the same dashboard to every client. We build our own tools. The storm automation below, the reporting pipeline, the tracking &mdash; that&apos;s software we wrote, running on infrastructure we manage. When something needs to work differently for your market, we change the code.</p>
            </div>
            <div>
              <div className="callout">
                <div className="tag">One client per market</div>
                <h3>We won&apos;t run ads for your competitor.</h3>
                <p>We can&apos;t bid against ourselves and serve you honestly, so we don&apos;t. Work with us and you&apos;re our only restoration client in your market. First come, first served.</p>
              </div>
            </div>
          </div>

          {/* The four pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 1, background: 'var(--warm-100)', border: '1px solid var(--warm-100)', borderRadius: 16, overflow: 'hidden' }}>
            <Pillar
              num="01"
              title="Google Ads Management"
              sub="The engine — built, watched, and reported on"
              items={[
                'Service and city-specific ad groups, each matched to its own landing page',
                'Weekly search-term review with negative keywords added continuously',
                'Local Services Ads (LSA) profile configuration and job-type cleanup',
                'Budget and bid management against a hard monthly ceiling you set',
                'Conversion tracking built, then verified with live test calls and forms',
                'Ads run 24/7 — emergencies don’t keep business hours',
              ]}
            />
            <Pillar
              num="02"
              title="A Website Built to Convert"
              sub="Around 20 pages, designed to produce calls"
              items={[
                'Home, service pages, and a landing page for every city you serve',
                'Lead form on every page, tagged by city and service',
                'Call tracking and form tracking wired into Google Ads',
                'Fast, mobile-first, click-to-call everywhere',
                'Hosting, security, and ongoing edits included',
                'You own the domain and the site — always',
              ]}
            />
            <Pillar
              num="03"
              title="Local SEO & Content"
              sub="The part that compounds"
              items={[
                'Blog articles written for what homeowners in your market actually search',
                'Weekly Google Business Profile posts',
                'Citation and NAP audits across the directories that matter',
                'City-by-service pages added over time',
                'A same-day review-request process for your crew',
                'Reviews are the #1 local ranking factor — we build the habit',
              ]}
            />
            <Pillar
              num="04"
              title="Reporting You Can Check"
              sub="No black box"
              items={[
                'Live dashboard: spend, clicks, cost per click, leads',
                'Monthly plain-English report: what changed and why',
                'Every account change is logged and reviewable',
                'The ad account stays yours — full access, always',
                'We take Manager access only, never ownership',
                'Numbers are pulled fresh from the API, not screenshots',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Storm-Ready — the differentiator */}
      <section className="content" style={{ background: 'var(--warm-800)' }}>
        <div className="wrap">
          <div className="two-col-wide" style={{ alignItems: 'center' }}>
            <div>
              <div className="tag" style={{ color: 'var(--green-400)' }}>Built in-house</div>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 700, color: 'var(--white)', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 20 }}>The Storm-Ready System</h2>
              <p style={{ color: 'var(--warm-200, #d6d3cd)', maxWidth: 'none', marginBottom: 20 }}>
                In restoration, the storm <em>is</em> the demand spike. Whoever shows up first that night wins the phone call. So we built software that watches for the storm and drafts your response before your competitors are awake.
              </p>
              <div className="feature-list" style={{ margin: 0 }}>
                {[
                  'Monitors National Weather Service alerts for your counties, around the clock',
                  'The night a hurricane, tropical storm, flood, or freeze warning hits, it drafts a budget increase, storm-specific ad copy, and a Google post — usually within the hour',
                  'Nothing spends until you approve it. One tap.',
                ].map((f, i) => (
                  <div key={i} className="feature-item" style={{ borderColor: 'rgba(255,255,255,0.12)', ...(i === 0 ? { borderTop: 'none' } : {}) }}>
                    <div className="feature-dot" />
                    <p style={{ color: 'var(--warm-200, #d6d3cd)' }}>{f}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: 40 }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--green-400)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Why it matters</div>
              <p style={{ color: 'var(--white)', fontSize: 18, lineHeight: 1.5, maxWidth: 'none', marginBottom: 24 }}>
                You don&apos;t have to outspend the national franchises. You beat them on timing.
              </p>
              <p style={{ color: 'var(--warm-400)', fontSize: 14, maxWidth: 'none', marginBottom: 0 }}>
                Approve-to-act by design — the system proposes, a human decides. Nothing changes your budget automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="content">
        <div className="wrap">
          <div style={{ maxWidth: 620, marginBottom: 40 }}>
            <div className="tag">Results</div>
            <h2>What this looks like in practice</h2>
            <p>From a restoration company in the Carolinas we&apos;ve managed since late 2025. These figures come from their live Google Ads account.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, padding: '36px 0', borderTop: '1px solid var(--warm-100)', borderBottom: '1px solid var(--warm-100)', marginBottom: 32 }}>
            {[
              { val: '$16–24 → $8–12', label: 'Cost per click on emergency water keywords, before vs. now' },
              { val: '$1,400+/mo', label: 'Saved in ad spend while call volume kept growing' },
              { val: '18+', label: 'Rounds of negative keywords blocking junk and competitor clicks' },
              { val: '23 pages', label: 'Custom website with lead form and call tracking on every page' },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 700, color: 'var(--green-600)', letterSpacing: '-0.02em', marginBottom: 6 }}>{s.val}</div>
                <div style={{ fontSize: 13, color: 'var(--warm-400)', lineHeight: 1.5 }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="callout" style={{ marginBottom: 40 }}>
            <p style={{ maxWidth: 'none', marginBottom: 8 }}>
              In another market, a rebuilt Local Services profile and three new Search campaigns produced <strong>more ad impressions in 12 days than the previous seven and a half months combined</strong> — achieved by fixing configuration, not by spending more.
            </p>
            <p style={{ fontSize: 13, color: 'var(--warm-400)', maxWidth: 'none', marginBottom: 0 }}>
              Client references available on request. These are individual results in specific markets — we won&apos;t promise you identical numbers. What you get is the same system and the same transparency.
            </p>
          </div>

          <div className="two-col">
            <div>
              <h2>Who this is for</h2>
              <p>Water, fire, mold, smoke, and biohazard restoration companies that want their phone to ring more often and know exactly why it did. Owner-operated firms competing against national franchises are where this works best.</p>
            </div>
            <div>
              <div style={{ background: 'var(--warm-50)', borderRadius: 16, padding: 40 }}>
                <div className="tag" style={{ marginBottom: 14 }}>Currently serving</div>
                <div className="feature-list" style={{ margin: 0 }}>
                  {['Charleston, SC', 'Cape Coral & Southwest Florida', 'Rock Hill, SC & Charlotte metro'].map((f, i) => (
                    <div key={i} className="feature-item" style={i === 0 ? { borderTop: 'none' } : {}}>
                      <div className="feature-dot" /><p>{f}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
