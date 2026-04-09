import CTA from '@/components/CTA';

export const metadata = {
  title: 'Managed IT Services',
  description: 'Brookline IT provides managed IT services for small businesses in Scranton, Wilkes-Barre, and nationwide.',
};

export default function ManagedIT() {
  return (
    <>
      <section className="page-hero"><div className="wrap">
        <div className="tag">Managed IT Services</div>
        <h1>Your IT, fully managed.</h1>
        <p>Proactive management, security-first thinking, and support you don&apos;t have to chase.</p>
      </div></section>
      <section className="content" style={{ background: 'var(--white)' }}><div className="wrap"><div className="two-col-wide">
        <div>
          <h2>What managed IT looks like with us</h2>
          <p>You get a dedicated partner who knows your environment. Not a rotating cast of helpdesk agents.</p>
          <div className="feature-list">
            <div className="feature-item"><div className="feature-dot" /><p>24/7 monitoring of all managed endpoints, servers, and network infrastructure</p></div>
            <div className="feature-item"><div className="feature-dot" /><p>Proactive maintenance and patching to prevent issues</p></div>
            <div className="feature-item"><div className="feature-dot" /><p>Fast support &mdash; remote and on-site across NEPA, remote nationwide</p></div>
            <div className="feature-item"><div className="feature-dot" /><p>Full documentation of your environment</p></div>
            <div className="feature-item"><div className="feature-dot" /><p>Regular reporting on system health and security</p></div>
            <div className="feature-item"><div className="feature-dot" /><p>Vendor coordination &mdash; ISP, software, hardware suppliers</p></div>
          </div>
        </div>
        <div>
          <div className="callout">
            <div className="tag">The difference</div>
            <h3>We don&apos;t just monitor &mdash; we build.</h3>
            <p>Custom automation, thorough documentation, and plain-language communication. Your IT partner shouldn&apos;t need a translator.</p>
          </div>
        </div>
      </div></div></section>
      <CTA />
    </>
  );
}
