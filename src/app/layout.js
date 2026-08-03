import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
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
  url: 'https://www.brooklineit.com',
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
      </body>
    </html>
  );
}
