import CTA from '@/components/CTA';

export const metadata = {
  title: 'Business Phone Systems & VoIP',
  description: 'Business phone systems, VoIP, and Microsoft Teams phone support for businesses.',
};

export default function Voice() {
  return (
    <>
      <section className="page-hero"><div className="wrap">
        <div className="tag">Phone &amp; VoIP</div>
        <h1>Business phone systems that just work.</h1>
        <p>One point of contact for your voice and communication infrastructure.</p>
      </div></section>
      <section className="content" style={{ background: 'var(--white)' }}><div className="wrap"><div className="two-col-wide">
        <div>
          <h2>What we support</h2>
          <div className="feature-list">
            <div className="feature-item"><div className="feature-dot" /><p>Microsoft Teams voice and calling plans</p></div>
            <div className="feature-item"><div className="feature-dot" /><p>RingCentral and hosted VoIP platforms</p></div>
            <div className="feature-item"><div className="feature-dot" /><p>Traditional and hybrid &mdash; Avaya, NEC, Mitel</p></div>
            <div className="feature-item"><div className="feature-dot" /><p>System configuration and user setup</p></div>
            <div className="feature-item"><div className="feature-dot" /><p>Call routing and auto-attendant programming</p></div>
            <div className="feature-item"><div className="feature-dot" /><p>Number porting and carrier coordination</p></div>
          </div>
          <div className="tech-badges">
            {['Microsoft Teams', 'RingCentral', 'Avaya', 'NEC', 'Mitel'].map(t => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
        </div>
        <div style={{ background: 'var(--warm-50)', borderRadius: 16, padding: 40 }}>
          <div className="tag">Thinking about upgrading?</div>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 700, color: 'var(--warm-800)', letterSpacing: '-0.02em', marginBottom: 12 }}>Honest advice, not vendor pressure.</h3>
          <p style={{ maxWidth: 'none' }}>If your phone system is aging, we&apos;ll walk you through options without pushing a specific vendor. We recommend what makes sense for your business and budget.</p>
        </div>
      </div></div></section>
      <CTA />
    </>
  );
}
