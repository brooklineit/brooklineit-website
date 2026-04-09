import CTA from '@/components/CTA';

export const metadata = {
  title: 'What We Build',
  description: 'See the custom tools Brookline IT has built. We don\'t just manage IT, we build technology that fits your business.',
};

function BuildItem({ title, sub, description, stats, features, featureLabel }) {
  return (
    <div style={{ background: 'var(--white)', padding: 48, display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 48, alignItems: 'start' }}>
      <div>
        <h3 style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 700, color: 'var(--warm-800)', letterSpacing: '-0.02em', marginBottom: 8 }}>{title}</h3>
        <div style={{ fontSize: 14, color: 'var(--green-600)', fontWeight: 500, marginBottom: 16 }}>{sub}</div>
        <p style={{ maxWidth: 'none' }}>{description}</p>
        {stats && (
          <div style={{ display: 'flex', gap: 32, marginTop: 24, paddingTop: 24, borderTop: '1px solid var(--warm-100)', flexWrap: 'wrap' }}>
            {stats.map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 700, color: 'var(--green-600)', letterSpacing: '-0.02em' }}>{s.val}</div>
                <div style={{ fontSize: 12, color: 'var(--warm-400)', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div style={{ background: 'var(--warm-50)', borderRadius: 12, padding: 32 }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--warm-400)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>{featureLabel}</div>
        <div className="feature-list" style={{ margin: 0 }}>
          {features.map((f, i) => (
            <div key={i} className="feature-item" style={i === 0 ? { borderTop: 'none' } : {}}>
              <div className="feature-dot" /><p>{f}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WhatWeBuild() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="tag">What we build</div>
          <h1>We don&apos;t just manage IT &mdash; we build it.</h1>
          <p>Most IT companies install off-the-shelf tools and call it a day. We build custom technology around how your business actually works.</p>
        </div>
      </section>

      <section className="content" style={{ background: 'var(--white)' }}>
        <div className="wrap">
          <div className="two-col" style={{ marginBottom: 48 }}>
            <div>
              <h2>Custom solutions we&apos;ve built</h2>
              <p>Every project starts with a conversation. We listen to how your team works, where time gets wasted, and what&apos;s frustrating. Then we build something to fix it.</p>
            </div>
            <div>
              <div className="callout">
                <div className="tag">Our philosophy</div>
                <h3>If off-the-shelf is the right answer, we&apos;ll tell you.</h3>
                <p>We&apos;d rather give you honest advice than sell you something you don&apos;t need. But when standard tools can&apos;t solve the problem, that&apos;s where we shine.</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gap: 1, background: 'var(--warm-100)', border: '1px solid var(--warm-100)', borderRadius: 16, overflow: 'hidden' }}>
            <BuildItem
              title="Custom Quoting Platform"
              sub="National HVAC contractor &middot; PA, FL, TX, CA"
              description="A national HVAC contractor was spending 30+ minutes on every quote. We built a platform that reads incoming requests, matches equipment and pricing automatically, and generates proposals in under 5 minutes."
              stats={[{ val: '5 min', label: 'Quote time (was 30+)' }, { val: '~60%', label: 'Less manual entry' }, { val: 'Zero', label: 'Missed quotes' }]}
              featureLabel="What we built"
              features={['Smart email-to-quote engine', 'Equipment intelligence database', 'Dynamic multi-state pricing engine', 'CRM integration (Zoho)']}
            />
            <BuildItem
              title="Client Support Portal"
              sub="Built for Brookline IT clients"
              description="Most MSPs point clients at a generic helpdesk. We built our own from the ground up &mdash; branded, fast, with SSO login and automatic ticket routing."
              featureLabel="Key details"
              features={['Microsoft Entra ID and Google SSO', 'Custom ticket routing and triage', 'Real-time status tracking', 'Continuously improved from client feedback']}
            />
            <BuildItem
              title="Automated Monitoring & Reporting"
              sub="Built to catch problems before you notice them"
              description="An automated system that monitors endpoints, checks for security risks, and triages alerts in the background. Every morning it generates a briefing with flagged risks and overnight activity."
              featureLabel="Capabilities"
              features={['Automated daily health briefings', 'Endpoint monitoring across all devices', 'Phishing threat detection and triage', 'Issues routed before clients are impacted']}
            />
          </div>
        </div>
      </section>

      <section className="content">
        <div className="wrap" style={{ maxWidth: 680 }}>
          <div className="tag">How it works</div>
          <h2>How a custom build works</h2>
          <p>Every project starts with a conversation &mdash; not a sales pitch. We listen to how your team actually works, where time gets wasted, and what&apos;s frustrating.</p>
          <p>There&apos;s no catalog to pick from. We design and build each solution around your specific workflows, your tools, and your team. And once it&apos;s running, we keep improving it.</p>
          <p>If it turns out off-the-shelf is the right answer, we&apos;ll tell you that too.</p>
        </div>
      </section>

      <CTA />
    </>
  );
}
