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
    { label: 'Product', href: '#product' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'For Schools', href: '#for-schools' },
    { label: 'Pricing', href: '#pricing' },
  ];

  const handleNavClick = (e, href) => {
    if (e) e.preventDefault();
    setMenuOpen(false);
    if (href && href.startsWith('#')) {
      const targetId = href.substring(1);
      const elem = document.getElementById(targetId);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <>
      <header className={styles.navWrapper}>
        <div className={styles.navContainer}>
          <LiquidGlass
            as="nav"
            variant="nav"
            hoverable={false}
            className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
          >
            <div className={styles.inner}>
              <a
                href="#hero"
                className={styles.brand}
                aria-label="Proctors Home"
                onClick={(e) => handleNavClick(e, '#hero')}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt="Proctors"
                  className={styles.logoImg}
                />
              </a>

              {/* Desktop Navigation */}
              <div className={styles.desktopNav}>
                <ul className={styles.links}>
                  {links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className={styles.link}
                        onClick={(e) => handleNavClick(e, l.href)}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href="#request-pilot"
                  className={`btn btn--primary ${styles.ctaBtn}`}
                  onClick={(e) => handleNavClick(e, '#request-pilot')}
                >
                  Book a Pilot
                </a>
              </div>

              {/* Mobile Hamburger */}
              <button
                className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
                type="button"
              >
                <span /><span /><span />
              </button>
            </div>
          </LiquidGlass>
        </div>
      </header>

      {/* Mobile Navigation Dropdown & Overlay */}
      {menuOpen && (
        <div className={styles.mobileNavContainer}>
          <div
            className={styles.overlay}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className={styles.mobileMenuCard}>
            <ul className={styles.mobileLinks}>
              {links.map((l) => (
                <li key={l.href}>
                  <button
                    type="button"
                    className={styles.mobileLink}
                    onClick={(e) => handleNavClick(e, l.href)}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={`btn btn--primary ${styles.mobileCtaBtn}`}
              onClick={(e) => handleNavClick(e, '#request-pilot')}
            >
              Book a Pilot
            </button>
          </div>
        </div>
      )}
    </>
  );
}

