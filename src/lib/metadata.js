const SITE_URL = 'https://www.brooklineit.com';
const SITE_NAME = 'Brookline IT';

/**
 * Build a page's metadata with canonical, Open Graph, and Twitter tags derived
 * from one source of truth.
 *
 * Next.js does NOT merge nested metadata objects from the root layout into a
 * page — a page that sets only `title`/`description` silently inherits the
 * layout's `openGraph` and `twitter` blocks wholesale. That's why every route
 * was sharing the homepage's "Brookline IT · Managed IT Services" social title.
 * Routing every page through this helper means og:* and twitter:* can't drift
 * from the page's own title and description again.
 *
 * @param {object}  opts
 * @param {string}  opts.title        Page title (without the site suffix).
 * @param {string}  opts.description  Meta description; reused for og/twitter.
 * @param {string}  opts.path         Route path, e.g. '/marketing'.
 * @param {string} [opts.socialTitle] Override the og/twitter title if the
 *                                    social headline should differ.
 * @param {string} [opts.socialDescription] Override the og/twitter description.
 */
export function pageMetadata({ title, description, path, socialTitle, socialDescription }) {
  const ogTitle = socialTitle ?? `${title} · ${SITE_NAME}`;
  const ogDescription = socialDescription ?? description;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: `${SITE_URL}${path === '/' ? '' : path}`,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
    },
  };
}
