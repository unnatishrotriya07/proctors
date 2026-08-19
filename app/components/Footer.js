'use client';
import styles from './Footer.module.css';

export default function Footer() {
  const handleNavClick = (e, href) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
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
            <p className={styles.tagline}>
              Students learn their curriculum. Proctors helps them get better at demonstrating what they learned.
            </p>
          </div>

          <div className={styles.navCol}>
            <p className={styles.colTitle}>Navigation</p>
            <ul className={styles.links}>
              <li>
                <a
                  href="#proctor"
                  className={styles.link}
                  onClick={(e) => handleNavClick(e, '#proctor')}
                >
                  Proctor
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className={styles.link}
                  onClick={(e) => handleNavClick(e, '#how-it-works')}
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#for-schools"
                  className={styles.link}
                  onClick={(e) => handleNavClick(e, '#for-schools')}
                >
                  For Schools
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.contactCol}>
            <p className={styles.colTitle}>Contact</p>
            <a href="mailto:hello@proctors.in" className={styles.contactLink}>
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
