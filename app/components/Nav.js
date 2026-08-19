'use client';
import { useState, useEffect } from 'react';
import styles from './Nav.module.css';
import LiquidGlass from '@/components/ui/LiquidGlass';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Proctor', href: '#proctor' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'For Schools', href: '#for-schools' },
  ];

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={styles.navWrapper}>
      <LiquidGlass
        as="nav"
        variant="nav"
        hoverable={false}
        className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      >
        <div className={styles.inner}>
          <a href="#hero" className={styles.brand} aria-label="Proctors Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Proctors"
              className={styles.logoImg}
            />
          </a>

          <div className={`${styles.navRight} ${menuOpen ? styles.open : ''}`}>
            <ul className={styles.links}>
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={styles.link} onClick={handleNavClick}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#request-pilot"
              className={`btn btn--primary ${styles.ctaBtn}`}
              onClick={handleNavClick}
            >
              Book a Pilot
            </a>
          </div>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </LiquidGlass>

      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}
    </header>
  );
}

