import MarketReviewForm from './MarketReviewForm';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Request a Market Review',
  description:
    'Tell us where you work and we’ll tell you straight whether your market is still open — plus what we see in your current ads and local presence. For water, fire, and mold restoration companies.',
  path: '/market-review',
});

export default function MarketReview() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="tag">Market review</div>
          <h1>Is your market still open?</h1>
          <p>
            We take one restoration company per market. Tell us where you work and we&apos;ll tell you
            straight &mdash; plus what we see in your current ads and local presence.
          </p>
        </div>
      </section>

      <section className="content" style={{ background: 'var(--white)' }}>
        <div className="wrap">
          <div className="two-col">
            <div>
              <h2>Tell us about your business</h2>
              <p>
                The more you give us here, the more specific the review. Everything below takes about two
                minutes, and we&apos;ll come back with what we actually see &mdash; not a template.
              </p>
              <MarketReviewForm />
            </div>
            <div>
              <div className="callout" style={{ marginBottom: 20 }}>
                <div className="tag">What you get back</div>
                <h3>An honest read on your market.</h3>
                <p>
                  Whether your market is still available, who you&apos;re actually competing with locally,
                  and what we can see about your current ads, reviews, and local presence from the outside.
                </p>
              </div>
              <div style={{ background: 'var(--warm-50)', borderRadius: 16, padding: 40 }}>
                <div className="tag" style={{ marginBottom: 14 }}>Prefer to talk?</div>
                <p style={{ marginBottom: 12, maxWidth: 'none', fontSize: 15 }}>
                  <strong style={{ color: 'var(--warm-700)' }}>Email</strong><br />contact@brooklineit.com
                </p>
                <p style={{ marginBottom: 0, maxWidth: 'none', fontSize: 15 }}>
                  <strong style={{ color: 'var(--warm-700)' }}>Phone</strong><br />570.344.4900
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
