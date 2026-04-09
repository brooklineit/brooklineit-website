import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata = {
  title: {
    default: 'Brookline IT · Managed IT Services in Scranton, PA',
    template: '%s · Brookline IT',
  },
  description: 'Brookline IT provides managed IT services, cybersecurity, and custom-built technology for small businesses nationwide. Headquartered in Scranton, PA.',
  openGraph: {
    title: 'Brookline IT · Managed IT Services',
    description: 'Managed IT services, cybersecurity, and custom-built technology for businesses. Headquartered in Scranton, PA.',
    url: 'https://brooklineit.com',
    siteName: 'Brookline IT',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
