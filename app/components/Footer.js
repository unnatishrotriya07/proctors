"use client";
import styles from "./Footer.module.css";

export default function Footer() {
  const handleNavClick = (e, href) => {
    if (href?.startsWith("#")) {
      e.preventDefault();
      const targetId = href.slice(1);
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <a
              aria-label="Proctors Home"
              className={styles.brand}
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Proctors" className={styles.logoImg} src="/logo.png" />
            </a>
            <p className={styles.tagline}>
              Proctors helps schools understand how every student thinks,
              learns, and communicates.
            </p>
          </div>

          <div className={styles.navCol}>
            <p className={styles.colTitle}>Product</p>
            <ul className={styles.links}>
              <li>
                <a
                  className={styles.link}
                  href="#product"
                  onClick={(e) => handleNavClick(e, "#product")}
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="#how-it-works"
                  onClick={(e) => handleNavClick(e, "#how-it-works")}
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="#for-schools"
                  onClick={(e) => handleNavClick(e, "#for-schools")}
                >
                  For Schools
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="#insight"
                  onClick={(e) => handleNavClick(e, "#insight")}
                >
                  Teacher Insight
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="#book-walkthrough"
                  onClick={(e) => handleNavClick(e, "#book-walkthrough")}
                >
                  Book a walkthrough
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.contactCol}>
            <p className={styles.colTitle}>Contact</p>
            <a className={styles.contactLink} href="mailto:hello@proctors.in">
              hello@proctors.in
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2026 Proctors</p>
        </div>
      </div>
    </footer>
  );
}
