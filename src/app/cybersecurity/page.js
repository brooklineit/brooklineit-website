import CTA from '@/components/CTA';

export const metadata = {
  title: 'Cybersecurity',
  description: 'Cybersecurity services for small businesses. Phishing defense, endpoint protection, backup and recovery.',
};

export default function Cybersecurity() {
  return (
    <>
      <section className="page-hero"><div className="wrap">
        <div className="tag">Cybersecurity</div>
        <h1>Cybersecurity for small business.</h1>
        <p>Cyber threats don&apos;t skip small businesses &mdash; they target them. We build security into everything we manage.</p>
      </div></section>
      <section className="content" style={{ background: 'var(--white)' }}><div className="wrap"><div className="two-col-wide">
        <div>
          <h2>Our security approach</h2>
          <p>Reduce likelihood. Reduce impact. Build resilience.</p>
          <div className="feature-list">
            <div className="feature-item"><div className="feature-dot" /><p>Multi-factor authentication and conditional access from day one</p></div>
            <div className="feature-item"><div className="feature-dot" /><p>Endpoint protection across every managed device</p></div>
            <div className="feature-item"><div className="feature-dot" /><p>Email security with anti-phishing and safe attachments</p></div>
            <div className="feature-item"><div className="feature-dot" /><p>Backup and disaster recovery tested regularly</p></div>
            <div className="feature-item"><div className="feature-dot" /><p>Patch management to close vulnerabilities</p></div>
            <div className="feature-item"><div className="feature-dot" /><p>Least-privilege access and network segmentation</p></div>
          </div>
        </div>
        <div>
          <div className="callout" style={{ marginBottom: 20 }}>
            <div className="tag">The human side</div>
            <h3>We understand why phishing works.</h3>
            <p>Our founder&apos;s background as a Licensed Professional Counselor means we understand the psychology behind social engineering. That shapes everything from training to policy.</p>
          </div>
          <div style={{ background: 'var(--warm-50)', borderRadius: 16, padding: 40 }}>
            <div className="num-stat"><div className="num-stat-val">91%</div></div>
            <div className="num-stat-label" style={{ marginBottom: 16 }}>of cyberattacks begin with a phishing email</div>
            <p style={{ fontSize: 14, color: 'var(--warm-400)', maxWidth: 'none', marginBottom: 0 }}>Security isn&apos;t just about technology. It&apos;s about understanding people.</p>
          </div>
        </div>
      </div></div></section>
      <CTA />
    </>
  );
}
