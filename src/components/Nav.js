'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => pathname === path;
  const isService = ['/managed-it', '/cloud', '/cybersecurity', '/network', '/on-premises', '/voice'].includes(pathname);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/logo-dark.png" alt="Brookline IT" width={240} height={48} priority />
        </Link>
        <button className={styles.toggle} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
        <div className={`${styles.right} ${menuOpen ? styles.open : ''}`}>
          <Link href="/" className={`${styles.link} ${isActive('/') ? styles.active : ''}`}>Home</Link>
          <div className={styles.dd}>
            <span className={`${styles.link} ${isService ? styles.active : ''}`}>Services ▾</span>
            <div className={styles.ddMenu}>
              <Link href="/managed-it" onClick={() => setMenuOpen(false)}>Managed IT Services</Link>
              <Link href="/cloud" onClick={() => setMenuOpen(false)}>Microsoft 365 &amp; Cloud</Link>
              <Link href="/cybersecurity" onClick={() => setMenuOpen(false)}>Cybersecurity</Link>
              <Link href="/network" onClick={() => setMenuOpen(false)}>Network &amp; Infrastructure</Link>
              <Link href="/on-premises" onClick={() => setMenuOpen(false)}>On-Site Support</Link>
              <Link href="/voice" onClick={() => setMenuOpen(false)}>Phone &amp; VoIP</Link>
            </div>
          </div>
          <Link href="/what-we-build" className={`${styles.link} ${isActive('/what-we-build') ? styles.active : ''}`}>What We Build</Link>
          <Link href="/about" className={`${styles.link} ${isActive('/about') ? styles.active : ''}`}>About</Link>
          <Link href="/contact" className={styles.cta}>Free IT Checkup</Link>
        </div>
      </div>
    </nav>
  );
}
