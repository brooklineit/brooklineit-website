export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Brookline IT for a free IT checkup. Serving businesses in Scranton and nationwide.',
};

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="tag">Get in touch</div>
          <h1>Let&apos;s talk.</h1>
          <p>Whether you have a specific IT problem, you&apos;re thinking about switching providers, or you just want a second opinion &mdash; we&apos;re happy to have the conversation.</p>
        </div>
      </section>
      <section className="content" style={{ background: 'var(--white)' }}>
        <div className="wrap">
          <div className="two-col">
            <div>
              <h2>Schedule a Free IT Checkup</h2>
              <p>We&apos;ll look at your setup &mdash; network, security, cloud, backups &mdash; and give you an honest assessment. If everything looks good, we&apos;ll tell you. If there are gaps, we&apos;ll show you exactly what they are.</p>
              <form style={{ marginTop: 32 }}>
                <div className="form-group"><label>Name</label><input type="text" placeholder="Your name" /></div>
                <div className="form-group"><label>Company</label><input type="text" placeholder="Your company name" /></div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="form-group"><label>Email</label><input type="email" placeholder="you@company.com" /></div>
                  <div className="form-group"><label>Phone</label><input type="tel" placeholder="(555) 123-4567" /></div>
                </div>
                <div className="form-group"><label>What can we help with?</label><textarea placeholder="Tell us a bit about your situation..." /></div>
                <button type="submit" className="btn btn-dark" style={{ width: '100%', justifyContent: 'center' }}>Send Message &rarr;</button>
              </form>
            </div>
            <div>
              <div style={{ background: 'var(--warm-50)', borderRadius: 16, padding: 40, marginBottom: 20 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--warm-800)', marginBottom: 20 }}>Contact information</h3>
                <p style={{ marginBottom: 12, maxWidth: 'none', fontSize: 15 }}><strong style={{ color: 'var(--warm-700)' }}>Email</strong><br />contact@brooklineit.com</p>
                <p style={{ marginBottom: 12, maxWidth: 'none', fontSize: 15 }}><strong style={{ color: 'var(--warm-700)' }}>Phone</strong><br />570.344.4900</p>
                <p style={{ marginBottom: 0, maxWidth: 'none', fontSize: 15 }}><strong style={{ color: 'var(--warm-700)' }}>Headquarters</strong><br />Scranton, PA</p>
              </div>
              <div className="callout">
                <div className="tag">Service area</div>
                <h3>Nationwide support, local roots.</h3>
                <p>On-site support throughout Northeast Pennsylvania. Remote managed IT services for clients across PA, North Carolina, Florida, Texas, and California.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
