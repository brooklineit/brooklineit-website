import CTA from '@/components/CTA';

export const metadata = {
  title: 'Network & Infrastructure',
  description: 'Network design, firewall management, and infrastructure support for businesses.',
};

export default function Network() {
  return (
    <>
      <section className="page-hero"><div className="wrap">
        <div className="tag">Network &amp; Infrastructure</div>
        <h1>Networks that stay up and stay fast.</h1>
        <p>A reliable network is the foundation everything else runs on.</p>
      </div></section>
      <section className="content" style={{ background: 'var(--white)' }}><div className="wrap"><div className="two-col-wide">
        <div>
          <h2>What we work with</h2>
          <p>We design, deploy, and manage business networks across multiple vendors.</p>
          <div className="feature-list">
            <div className="feature-item"><div className="feature-dot" /><p>Firewalls, switches, routers, wireless APs, VPN infrastructure</p></div>
            <div className="feature-item"><div className="feature-dot" /><p>Architecture and planning for new offices</p></div>
            <div className="feature-item"><div className="feature-dot" /><p>Full monitoring of infrastructure health</p></div>
            <div className="feature-item"><div className="feature-dot" /><p>Security hardening and segmentation</p></div>
            <div className="feature-item"><div className="feature-dot" /><p>Wireless survey and optimization</p></div>
            <div className="feature-item"><div className="feature-dot" /><p>Cross-site and remote access (VPN, SD-WAN)</p></div>
          </div>
          <div className="tech-badges">
            {['Cisco / Meraki', 'Ubiquiti UniFi', 'Fortinet', 'Palo Alto', 'Azure vNet'].map(t => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
        </div>
        <div>
          <div className="callout">
            <div className="tag">Our approach</div>
            <h3>Documented, segmented, monitored.</h3>
            <p>Every network we build is documented, segmented for security, and monitored continuously. It grows with you without starting over.</p>
          </div>
        </div>
      </div></div></section>
      <CTA />
    </>
  );
}
