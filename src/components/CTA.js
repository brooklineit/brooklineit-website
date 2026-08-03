import Link from 'next/link';

/**
 * Site-wide closing CTA.
 *
 * Defaults to the IT checkup offer used on every page. Pass overrides where the
 * page's audience isn't an IT buyer — e.g. /marketing, where the highest-intent
 * moment on the page should not hand a restoration contractor an IT offer.
 */
export default function CTA({
  heading = 'Not sure where your IT stands?',
  body = 'We’ll take an honest look at your systems and tell you exactly what we find — no strings attached.',
  ctaText = 'Schedule a Free IT Checkup →',
  ctaHref = '/contact',
}) {
  return (
    <section className="page-cta">
      <div className="wrap">
        <div className="page-cta-box">
          <h2>{heading}</h2>
          <p>{body}</p>
          <Link href={ctaHref} className="btn btn-dark">{ctaText}</Link>
        </div>
      </div>
    </section>
  );
}
