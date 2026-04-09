import Link from 'next/link';
import CTA from '@/components/CTA';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className="wrap">
          <div className={styles.eyebrow}>Scranton, PA · Serving clients nationwide</div>
          <h1 className={styles.h1}>IT that works the way <span>your business</span> does.</h1>
          <p className={styles.desc}>Managed IT services, cybersecurity, and custom-built technology for businesses across Pennsylvania, North Carolina, Florida, Texas, and California. We don&apos;t just keep things running — we build tools that make your operations faster.</p>
          <div className={styles.actions}>
            <Link href="/contact" className="btn btn-dark">Schedule a Free IT Checkup →</Link>
            <Link href="/what-we-build" className="btn btn-ghost">See What We Build</Link>
          </div>
        </div>
      </section>

      <div className={styles.strip}>
        <div className={styles.stripInner}>
          {['Construction', 'Dental', 'Manufacturing', 'Churches & Nonprofits', 'Professional Services', 'HVAC'].map(v => (
            <span key={v} className={styles.stripItem}>{v}</span>
          ))}
        </div>
      </div>

      <section className="content">
        <div className="wrap">
          <div style={{ maxWidth: 500, marginBottom: 48 }}>
            <div className="tag">What we do</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 700, color: 'var(--warm-800)', lineHeight: 1.1, letterSpacing: '-0.03em' }}>Managed IT that doesn&apos;t leave you guessing</h2>
          </div>
          <div className={styles.svcGrid}>
            {[
              { num: '01', href: '/managed-it', title: 'Managed IT Services', desc: 'Proactive monitoring, fast support, and systems that don\'t keep breaking. We handle your technology so your team can focus on the work that matters.' },
              { num: '02', href: '/cloud', title: 'Microsoft 365 & Cloud', desc: 'We deploy and manage Microsoft 365, Entra ID, SharePoint, Teams, and OneDrive — properly configured, secured, and backed up.' },
              { num: '03', href: '/cybersecurity', title: 'Cybersecurity', desc: 'Phishing defense, endpoint security, backup and recovery, and ongoing hardening. Security built into everything, not bolted on as an afterthought.' },
              { num: '04', href: '/network', title: 'Network & Infrastructure', desc: 'Fast, stable networks built to support your business. On-site support in NEPA, remote support nationwide.' },
            ].map(svc => (
              <Link key={svc.num} href={svc.href} className={styles.svc}>
                <div className={styles.svcNum}>{svc.num}</div>
                <span className={styles.svcArrow}>→</span>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.diff}>
        <div className="wrap">
          <div className={styles.diffGrid}>
            <div>
              <div className="tag" style={{ color: 'var(--green-400)' }}>What makes us different</div>
              <h2 className={styles.diffH2}>We don&apos;t just manage IT — we build it.</h2>
              <p className={styles.diffP}>Most IT companies install off-the-shelf tools and call it a day. We build custom technology around how your business actually works — quoting platforms, support portals, automated monitoring systems. If your operations have a bottleneck, we can probably build something to fix it.</p>
              <Link href="/what-we-build" className="btn btn-green" style={{ marginTop: 32 }}>See What We&apos;ve Built →</Link>
            </div>
            <div className={styles.diffCard}>
              <div className={styles.diffLabel}>Recent Build</div>
              <div className={styles.diffTitle}>Custom Quoting Platform</div>
              <div className={styles.diffSub}>National HVAC contractor · PA, FL, TX, CA</div>
              <div className={styles.diffStats}>
                <div><div className={styles.diffStatNum}>5 min</div><div className={styles.diffStatLabel}>Quote time (was 30+)</div></div>
                <div><div className={styles.diffStatNum}>~60%</div><div className={styles.diffStatLabel}>Less manual entry</div></div>
                <div><div className={styles.diffStatNum}>Zero</div><div className={styles.diffStatLabel}>Missed quotes</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 48px' }}>
            <div className="tag">Who we serve</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 700, color: 'var(--warm-800)', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 14 }}>Trusted by businesses across the country</h2>
            <p style={{ color: 'var(--warm-400)', fontSize: 16 }}>From Scranton to Charlotte to California — organizations that need their technology to be stable, secure, and easy to manage.</p>
          </div>
          <div className={styles.vertRow}>
            {[
              { name: 'Construction', sub: 'Sage, estimating, field devices' },
              { name: 'Dental', sub: 'Practice software, HIPAA' },
              { name: 'Manufacturing', sub: 'On-prem, production' },
              { name: 'Churches', sub: 'M365, security, budgets' },
              { name: 'Professional Services', sub: 'Cloud, compliance' },
            ].map(v => (
              <div key={v.name} className={styles.vertPill}>{v.name} <span className={styles.vertSub}>· {v.sub}</span></div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
