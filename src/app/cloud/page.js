import CTA from '@/components/CTA';

export const metadata = {
  title: 'Microsoft 365 & Cloud Services',
  description: 'Microsoft 365 management, cloud migrations, and Entra ID configuration for businesses.',
};

export default function Cloud() {
  return (
    <>
      <section className="page-hero"><div className="wrap">
        <div className="tag">Microsoft 365 &amp; Cloud</div>
        <h1>Cloud done right.</h1>
        <p>Your team depends on Microsoft 365 every day. When it&apos;s configured correctly, everything just works.</p>
      </div></section>
      <section className="content" style={{ background: 'var(--white)' }}><div className="wrap"><div className="two-col-wide">
        <div>
          <h2>What we manage</h2>
          <p>We don&apos;t just turn things on &mdash; we configure them properly.</p>
          <div className="feature-list">
            <div className="feature-item"><div className="feature-dot" /><p><strong>Entra ID</strong> &mdash; identity management, conditional access, SSO</p></div>
            <div className="feature-item"><div className="feature-dot" /><p><strong>Exchange Online</strong> &mdash; email, shared mailboxes, security</p></div>
            <div className="feature-item"><div className="feature-dot" /><p><strong>SharePoint &amp; OneDrive</strong> &mdash; files, permissions, sharing</p></div>
            <div className="feature-item"><div className="feature-dot" /><p><strong>Microsoft Teams</strong> &mdash; collaboration, voice, meetings</p></div>
            <div className="feature-item"><div className="feature-dot" /><p><strong>Defender</strong> &mdash; endpoint protection, threat policies</p></div>
            <div className="feature-item"><div className="feature-dot" /><p><strong>Backup &amp; Admin</strong> &mdash; cloud backups, license management</p></div>
          </div>
          <div className="tech-badges">
            {['Entra ID', 'Exchange', 'SharePoint', 'OneDrive', 'Teams', 'Defender', 'Intune'].map(t => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
        </div>
        <div style={{ background: 'var(--warm-50)', borderRadius: 16, padding: 40 }}>
          <div className="tag">Why it matters</div>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 700, color: 'var(--warm-800)', letterSpacing: '-0.02em', marginBottom: 12 }}>Most businesses have M365. Most aren&apos;t using it well.</h3>
          <p style={{ maxWidth: 'none' }}>Default settings leave security gaps. Permissions get messy. Backups aren&apos;t configured. We fix that.</p>
        </div>
      </div></div></section>
      <CTA />
    </>
  );
}
