import Link from 'next/link';
import Testimonial from '@/components/Testimonial';
import styles from './marketing.module.css';

/**
 * Section components for vertical marketing pages (/marketing, and future
 * siblings like /marketing/roofing).
 *
 * Every section is driven entirely by a vertical config object — see
 * src/data/verticals/restoration.js for the shape. Adding a vertical should
 * mean writing a new config and a thin page that assembles these, with no new
 * markup or styling.
 */

export function MarketingHero({ tag, heading, body, primaryCta, secondaryCta }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="tag">{tag}</div>
        <h1>{heading}</h1>
        <p>{body}</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
          <Link href={primaryCta.href} className="btn btn-dark">{primaryCta.text}</Link>
          <Link href={secondaryCta.href} className="btn btn-ghost">{secondaryCta.text}</Link>
        </div>
      </div>
    </section>
  );
}

export function MarketingIntro({ heading, body, exclusivity }) {
  return (
    <section className="content" style={{ background: 'var(--white)' }}>
      <div className="wrap">
        <div className="two-col" style={{ marginBottom: 48 }}>
          <div>
            <h2>{heading}</h2>
            <p>{body}</p>
          </div>
          <div>
            <div className="callout">
              <div className="tag">{exclusivity.tag}</div>
              <h3>{exclusivity.heading}</h3>
              <p>{exclusivity.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StormSection({ tag, heading, body, points, aside }) {
  return (
    <section className="content" style={{ background: 'var(--warm-800)' }}>
      <div className="wrap">
        <div className="two-col-wide" style={{ alignItems: 'center' }}>
          <div>
            <div className="tag" style={{ color: 'var(--green-400)' }}>{tag}</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 700, color: 'var(--white)', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 20 }}>{heading}</h2>
            <p style={{ color: 'var(--warm-200, #d6d3cd)', maxWidth: 'none', marginBottom: 20 }}>
              {body}
            </p>
            <div className="feature-list" style={{ margin: 0 }}>
              {points.map((f, i) => (
                <div key={i} className="feature-item" style={{ borderColor: 'rgba(255,255,255,0.12)', ...(i === 0 ? { borderTop: 'none' } : {}) }}>
                  <div className="feature-dot" />
                  <p style={{ color: 'var(--warm-200, #d6d3cd)' }}>{f}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: 40 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--green-400)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>{aside.label}</div>
            <p style={{ color: 'var(--white)', fontSize: 18, lineHeight: 1.5, maxWidth: 'none', marginBottom: 24 }}>
              {aside.lead}
            </p>
            <p style={{ color: 'var(--warm-400)', fontSize: 14, maxWidth: 'none', marginBottom: 0 }}>
              {aside.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillar({ num, title, sub, items }) {
  return (
    <div className={styles.pillar}>
      <div className={styles.pillarNum}>{num}</div>
      <h3>{title}</h3>
      <div className={styles.pillarSub}>{sub}</div>
      <div className="feature-list" style={{ marginBottom: 0 }}>
        {items.map((f, i) => (
          <div key={i} className="feature-item" style={i === 0 ? { borderTop: 'none' } : {}}>
            <div className="feature-dot" /><p>{f}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PillarGrid({ pillars }) {
  return (
    <section className="content" style={{ background: 'var(--white)' }}>
      <div className="wrap">
        <div className={styles.pillars}>
          {pillars.map((p, i) => (
            <Pillar
              key={p.title}
              num={String(i + 1).padStart(2, '0')}
              title={p.title}
              sub={p.sub}
              items={p.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResultsSection({ tag, heading, intro, stats, callout, disclaimer, fallbackNote, testimonials = [], whoThisIsFor }) {
  return (
    <section className="content">
      <div className="wrap">
        <div style={{ maxWidth: 620, marginBottom: 40 }}>
          <div className="tag">{tag}</div>
          <h2>{heading}</h2>
          <p>{intro}</p>
        </div>

        <div className={styles.stats}>
          {stats.map((s, i) => (
            <div key={i}>
              <div className={styles.statVal}>{s.val}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className="callout" style={{ marginBottom: 40 }}>
          <p style={{ maxWidth: 'none', marginBottom: 8 }}>
            {callout}
          </p>
          <p style={{ fontSize: 13, color: 'var(--warm-400)', maxWidth: 'none', marginBottom: 0 }}>
            {testimonials.length === 0 && `${fallbackNote} `}
            {disclaimer}
          </p>
        </div>

        {testimonials.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: testimonials.length > 1 ? 'repeat(auto-fit, minmax(320px, 1fr))' : '1fr', gap: 20, marginBottom: 40 }}>
            {testimonials.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </div>
        )}

        <WhoThisIsFor {...whoThisIsFor} />
      </div>
    </section>
  );
}

export function WhoThisIsFor({ heading, body, adjacentNote, marketsLabel, markets }) {
  return (
    <div className="two-col">
      <div>
        <h2>{heading}</h2>
        <p>{body}</p>
        <p style={{ fontSize: 14, color: 'var(--warm-400)' }}>{adjacentNote}</p>
      </div>
      <div>
        <div style={{ background: 'var(--warm-50)', borderRadius: 16, padding: 40 }}>
          <div className="tag" style={{ marginBottom: 14 }}>{marketsLabel}</div>
          <div className="feature-list" style={{ margin: 0 }}>
            {markets.map((f, i) => (
              <div key={i} className="feature-item" style={i === 0 ? { borderTop: 'none' } : {}}>
                <div className="feature-dot" /><p>{f}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
