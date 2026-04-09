import Link from 'next/link';

export default function CTA() {
  return (
    <section className="page-cta">
      <div className="wrap">
        <div className="page-cta-box">
          <h2>Not sure where your IT stands?</h2>
          <p>We&apos;ll take an honest look at your systems and tell you exactly what we find — no strings attached.</p>
          <Link href="/contact" className="btn btn-dark">Schedule a Free IT Checkup →</Link>
        </div>
      </div>
    </section>
  );
}
