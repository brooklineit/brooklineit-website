import CTA from '@/components/CTA';

export const metadata = {
  title: 'On-Site IT Support',
  description: 'On-site server management, desktop support, and hardware services for Scranton-area businesses.',
};

export default function OnPremises() {
  return (
    <>
      <section className="page-hero"><div className="wrap">
        <div className="tag">On-Site Support</div>
        <h1>Hands-on IT support when you need it.</h1>
        <p>Not everything lives in the cloud. We show up, diagnose, and fix it properly.</p>
      </div></section>
      <section className="content" style={{ background: 'var(--white)' }}><div className="wrap"><div className="two-col-wide">
        <div>
          <h2>What we support</h2>
          <div className="feature-list">
            <div className="feature-item"><div className="feature-dot" /><p><strong>Servers</strong> &mdash; Windows Server, AD, Group Policy, DNS, DHCP, file shares</p></div>
            <div className="feature-item"><div className="feature-dot" /><p><strong>Workstations</strong> &mdash; Windows, macOS, Linux deployment and lifecycle</p></div>
            <div className="feature-item"><div className="feature-dot" /><p><strong>Hardware</strong> &mdash; procurement, upgrades, replacements, migrations</p></div>
            <div className="feature-item"><div className="feature-dot" /><p><strong>Applications</strong> &mdash; local software support and vendor coordination</p></div>
            <div className="feature-item"><div className="feature-dot" /><p><strong>Peripherals</strong> &mdash; printers, scanners, device management</p></div>
          </div>
        </div>
        <div style={{ background: 'var(--warm-50)', borderRadius: 16, padding: 40 }}>
          <div className="tag">How we work on-site</div>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 700, color: 'var(--warm-800)', letterSpacing: '-0.02em', marginBottom: 12 }}>We show up prepared.</h3>
          <p style={{ maxWidth: 'none' }}>We know your environment because we document it from day one. Faster diagnosis, fewer repeat visits, less disruption. We coordinate with your staff so changes happen smoothly.</p>
        </div>
      </div></div></section>
      <CTA />
    </>
  );
}
