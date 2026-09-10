"use client";
import { useEffect, useState } from "react";
import LiquidGlass from "@/components/ui/LiquidGlass";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#product", label: "Product" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#for-schools", label: "For Schools" },
    { href: "#insight", label: "Insight" },
  ];

  const handleNavClick = (e, href) => {
    if (e) {
      e.preventDefault();
    }
    setMenuOpen(false);
    if (href?.startsWith("#")) {
      const targetId = href.slice(1);
      const elem = document.getElementById(targetId);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <>
      <header className={styles.navWrapper}>
        <div className={styles.navContainer}>
          <LiquidGlass
            as="nav"
            className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
            hoverable={false}
            variant="nav"
          >
            <div className={styles.inner}>
              <a
                aria-label="Proctors Home"
                className={styles.brand}
                href="#hero"
                onClick={(e) => handleNavClick(e, "#hero")}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Proctors"
                  className={styles.logoImg}
                  src="/logo.png"
                />
              </a>

              {/* Desktop Navigation */}
              <div className={styles.desktopNav}>
                <ul className={styles.links}>
                  {links.map((l) => (
                    <li key={l.href}>
                      <a
                        className={styles.link}
                        href={l.href}
                        onClick={(e) => handleNavClick(e, l.href)}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  className={styles.signIn}
                  href="#signin"
                  onClick={(e) => handleNavClick(e, "#signin")}
                >
                  Sign In
                </a>
                <a
                  className={`btn btn--primary ${styles.ctaBtn}`}
                  href="#book-walkthrough"
                  onClick={(e) => handleNavClick(e, "#book-walkthrough")}
                >
                  Book a walkthrough
                </a>
              </div>

              {/* Mobile Hamburger */}
              <button
                aria-label="Toggle menu"
                className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
                onClick={() => setMenuOpen((prev) => !prev)}
                type="button"
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </LiquidGlass>
        </div>
      </header>

      {/* Mobile Navigation Dropdown & Overlay */}
      {menuOpen && (
        <div className={styles.mobileNavContainer}>
          <div
            aria-hidden="true"
            className={styles.overlay}
            onClick={() => setMenuOpen(false)}
          />
          <div className={styles.mobileMenuCard}>
            <ul className={styles.mobileLinks}>
              {links.map((l) => (
                <li key={l.href}>
                  <button
                    className={styles.mobileLink}
                    onClick={(e) => handleNavClick(e, l.href)}
                    type="button"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  className={styles.mobileLink}
                  onClick={(e) => handleNavClick(e, "#signin")}
                  type="button"
                >
                  Sign In
                </button>
              </li>
            </ul>
            <button
              className={`btn btn--primary ${styles.mobileCtaBtn}`}
              onClick={(e) => handleNavClick(e, "#book-walkthrough")}
              type="button"
            >
              Book a walkthrough
            </button>
          </div>
        </div>
      )}
    </>
  );
}
