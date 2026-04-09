import Link from 'next/link';

export default function NotFound() {
  return (
    <section style={{ padding: '200px 0 120px', textAlign: 'center' }}>
      <div className="wrap">
        <div className="tag">404</div>
        <h1 style={{
          fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 5vw, 56px)',
          fontWeight: 700, color: 'var(--warm-800)',
          lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 18
        }}>
          Page not found.
        </h1>
        <p style={{ fontSize: 18, color: 'var(--warm-400)', marginBottom: 32 }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn btn-dark">Back to Home →</Link>
      </div>
    </section>
  );
}
