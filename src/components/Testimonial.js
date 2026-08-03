/**
 * Client testimonial card.
 *
 * Renders the quote in the display serif (matching section headings), with
 * attribution in the body sans below a hairline rule — same warm-50 panel
 * treatment used by the sidebar cards on the service pages.
 */
export default function Testimonial({ quote, name, title, company, city }) {
  const attribution = [title, company].filter(Boolean).join(', ');

  return (
    <figure style={{ background: 'var(--warm-50)', borderRadius: 16, padding: 40, margin: 0 }}>
      <blockquote style={{ margin: 0 }}>
        <p style={{
          fontFamily: 'var(--serif)', fontSize: 20, lineHeight: 1.45,
          color: 'var(--warm-800)', letterSpacing: '-0.01em',
          maxWidth: 'none', marginBottom: 24,
        }}>
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>
      <figcaption style={{ paddingTop: 20, borderTop: '1px solid var(--warm-100)' }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--warm-800)' }}>{name}</div>
        {attribution && (
          <div style={{ fontSize: 13, color: 'var(--warm-400)', marginTop: 2 }}>{attribution}</div>
        )}
        {city && (
          <div style={{ fontSize: 13, color: 'var(--green-600)', marginTop: 2 }}>{city}</div>
        )}
      </figcaption>
    </figure>
  );
}
