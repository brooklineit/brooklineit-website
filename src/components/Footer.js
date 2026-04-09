import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Image src="/images/logo-white.png" alt="Brookline IT" width={200} height={32} />
            <p>Managed IT services and custom technology for businesses. Headquartered in Scranton, PA — serving clients across Pennsylvania, North Carolina, Florida, Texas, and California.</p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><Link href="/managed-it">Managed IT</Link></li>
              <li><Link href="/cloud">Microsoft 365 &amp; Cloud</Link></li>
              <li><Link href="/cybersecurity">Cybersecurity</Link></li>
              <li><Link href="/network">Network &amp; Infrastructure</Link></li>
              <li><Link href="/on-premises">On-Site Support</Link></li>
              <li><Link href="/voice">Phone &amp; VoIP</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/what-we-build">What We Build</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li><a href="mailto:contact@brooklineit.com">contact@brooklineit.com</a></li>
              <li><a href="tel:5703444900">570.344.4900</a></li>
              <li className={styles.loc}>Scranton, PA (HQ)</li>
              <li className={styles.loc}>Serving clients nationwide</li>
            </ul>
          </div>
        </div>
        <div className={styles.bar}>
          <span>© 2026 Brookline IT</span>
          <Link href="/contact">Schedule a Free IT Checkup</Link>
        </div>
      </div>
    </footer>
  );
}
