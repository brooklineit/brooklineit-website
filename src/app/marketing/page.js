import Link from 'next/link';
import CTA from '@/components/CTA';
import { pageMetadata } from '@/lib/metadata';
import { marketingGeneral as m } from '@/data/marketing-general';
import { MarketingHero, PillarGrid } from '@/components/marketing/MarketingSections';
import styles from '@/app/page.module.css';

export const metadata = pageMetadata(m.meta);

export default function Marketing() {
  return (
    <>
      <MarketingHero {...m.hero} />

      <PillarGrid pillars={m.pillars} />

      <section className="content">
        <div className="wrap">
          <div style={{ maxWidth: 620, marginBottom: 40 }}>
            <div className="tag">{m.whoFor.tag}</div>
            <h2>{m.whoFor.heading}</h2>
            <p>{m.whoFor.body}</p>
          </div>
          <div className={styles.vertRow}>
            {m.whoFor.industries.map((i) => (
              <div key={i.name} className={styles.vertPill}>
                {i.name} <span className={styles.vertSub}>· {i.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content" style={{ background: 'var(--white)' }}>
        <div className="wrap">
          <div style={{ maxWidth: 680 }}>
            <div className="tag">{m.proof.tag}</div>
            <h2>{m.proof.heading}</h2>
            <p>{m.proof.body}</p>
            <p style={{ marginBottom: 24 }}>
              <Link href={m.proof.linkHref}>{m.proof.linkText}</Link>
            </p>
            <p style={{ fontSize: 13, color: 'var(--warm-400)' }}>{m.proof.note}</p>
          </div>
        </div>
      </section>

      <CTA {...m.cta} />
    </>
  );
}
