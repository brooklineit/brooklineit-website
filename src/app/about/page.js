import CTA from '@/components/CTA';

export const metadata = {
  title: 'About',
  description: 'Founded in Scranton, PA, Brookline IT combines deep technical expertise with a human-centered approach to managed IT.',
};

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="tag">About us</div>
          <h1>Technology support built on thoroughness, not shortcuts.</h1>
          <p>Brookline IT provides managed IT services for businesses across the country. We start every relationship by understanding how your technology actually works — not how it was supposed to work on paper.</p>
        </div>
      </section>

      <section className="content" style={{ background: 'var(--white)' }}>
        <div className="wrap">
          <div className="two-col">
            <div>
              <div className="tag">The founder</div>
              <h2>Technical depth. Human perspective.</h2>
              <p>Brookline IT was founded by Vince, whose technical foundation was built through close mentorship under a highly respected IT professional known for designing and supporting complex business environments.</p>
              <p>What makes Vince&apos;s approach different is his background as a Licensed Professional Counselor. That training shapes how Brookline IT works with every client: listening carefully before prescribing solutions, explaining risks in plain language, and understanding how technology decisions affect real people inside an organization.</p>
            </div>
            <div>
              <div className="callout">
                <div className="tag">Why it matters</div>
                <h3>Your IT partner should understand people, not just systems.</h3>
                <p>Most IT providers lead with technology. We lead with listening. That counseling background means we understand the habits, the frustrations, and the real-world workflows that technology needs to support — not replace.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="wrap">
          <div className="two-col-wide">
            <div>
              <div className="tag">What clients experience</div>
              <h2>IT support that feels like having someone in your corner.</h2>
              <p>When you contact Brookline IT, you&apos;re talking to someone who already knows your environment, your systems, and your business. Not a generic helpdesk. Not a different person every time.</p>
              <div className="feature-list">
                <div className="feature-item"><div className="feature-dot" /><p>Proactive about preventing problems, not just reacting to them</p></div>
                <div className="feature-item"><div className="feature-dot" /><p>Clear communication without hiding behind jargon</p></div>
                <div className="feature-item"><div className="feature-dot" /><p>Practical cybersecurity guidance that fits your size and budget</p></div>
                <div className="feature-item"><div className="feature-dot" /><p>Honest recommendations — even when that means saying you don&apos;t need to spend money</p></div>
              </div>
            </div>
            <div>
              <div style={{ background: 'var(--warm-50)', borderRadius: 16, padding: 40 }}>
                <div className="num-stat">
                  <div className="num-stat-val">5</div>
                  <div className="num-stat-unit">states served</div>
                </div>
                <div className="num-stat-label" style={{ marginBottom: 32 }}>PA, NC, FL, TX, CA</div>
                <div className="num-stat">
                  <div className="num-stat-val">20+</div>
                  <div className="num-stat-unit">years experience</div>
                </div>
                <div className="num-stat-label" style={{ marginBottom: 32 }}>Business IT, networking, M365, security</div>
                <div className="num-stat">
                  <div className="num-stat-val">1</div>
                  <div className="num-stat-unit">person you talk to</div>
                </div>
                <div className="num-stat-label">Every time. Someone who knows your systems.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content" style={{ background: 'var(--white)' }}>
        <div className="wrap" style={{ maxWidth: 680 }}>
          <div className="tag">Our mission</div>
          <h2>Reliable technology. Clear answers. Fewer surprises.</h2>
          <p>Our mission is to deliver proactive IT support that helps businesses operate efficiently and securely. We prevent problems before they interrupt your work, and we make technology decisions easier to understand.</p>
          <p>Good IT shouldn&apos;t demand constant attention. It should quietly support everything you do.</p>
        </div>
      </section>

      <CTA />
    </>
  );
}
