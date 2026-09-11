import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';

// Google Business Profile ("Brookline IT, LLC") and LinkedIn company page.
// Listing them in sameAs helps Google tie this site to our profiles rather
// than to the many unrelated "Brookline" businesses.
const GBP_URL = 'https://maps.google.com/?cid=3947530190270250968';
const LINKEDIN_URL = 'https://www.linkedin.com/company/brookline-it/';
import '@/styles/globals.css';

export const metadata = {
  metadataBase: new URL('https://www.brooklineit.com'),
  title: {
    default: 'Brookline IT · Managed IT Services in Scranton, PA',
    template: '%s · Brookline IT',
  },
  description: 'Brookline IT provides managed IT services, cybersecurity, and custom-built technology for small businesses nationwide. Headquartered in Scranton, PA.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Brookline IT · Managed IT Services',
    description: 'Managed IT services, cybersecurity, and custom-built technology for businesses. Headquartered in Scranton, PA.',
    url: 'https://www.brooklineit.com',
    siteName: 'Brookline IT',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brookline IT · Managed IT Services',
    description: 'Managed IT services, cybersecurity, and custom-built technology for businesses. Headquartered in Scranton, PA.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.brooklineit.com/#business',
  name: 'Brookline IT',
  legalName: 'Brookline IT, LLC',
  url: 'https://www.brooklineit.com',
  hasMap: GBP_URL,
  sameAs: [GBP_URL, LINKEDIN_URL],
  founder: { '@type': 'Person', name: 'Vince Vargas' },
  logo: 'https://www.brooklineit.com/images/logo-white.png',
  image: 'https://www.brooklineit.com/images/logo-white.png',
  description:
    'Brookline IT provides managed IT services, cybersecurity, and custom-built technology for small businesses. Headquartered in Scranton, PA — serving clients nationwide.',
  email: 'contact@brooklineit.com',
  telephone: '+1-570-344-4900',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Scranton',
    addressRegion: 'PA',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'State', name: 'Pennsylvania' },
    { '@type': 'State', name: 'North Carolina' },
    { '@type': 'State', name: 'South Carolina' },
    { '@type': 'State', name: 'Florida' },
    { '@type': 'State', name: 'Texas' },
    { '@type': 'State', name: 'California' },
  ],
  knowsAbout: [
    'Managed IT Services',
    'Cybersecurity',
    'Microsoft 365',
    'Cloud Infrastructure',
    'Network & Infrastructure',
    'VoIP',
    'Digital Marketing',
    'Local SEO',
    'Google Ads Management',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
