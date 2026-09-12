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
        {/* Top: Brand and 4 Columns */}
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
            <div className={styles.brandContact}>
              <span className={styles.contactLabel}>Contact:</span>
              <a href="mailto:hello@proctors.in" className={styles.contactLink}>
                hello@proctors.in
              </a>
            </div>
          </div>

          <div className={styles.columnsGrid}>
            {/* Column 1: Product */}
            <div className={styles.navCol}>
              <p className={styles.colTitle}>Product</p>
              <ul className={styles.links}>
                <li>
                  <a href="#features" className={styles.link} onClick={(e) => handleNavClick(e, '#features')}>
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className={styles.link} onClick={(e) => handleNavClick(e, '#how-it-works')}>
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#for-schools" className={styles.link} onClick={(e) => handleNavClick(e, '#for-schools')}>
                    For Schools
                  </a>
                </li>
                <li>
                  <a href="#pricing" className={styles.link} onClick={(e) => handleNavClick(e, '#pricing')}>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#request-pilot" className={styles.link} onClick={(e) => handleNavClick(e, '#request-pilot')}>
                    Book a Pilot
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Platform */}
            <div className={styles.navCol}>
              <p className={styles.colTitle}>Platform</p>
              <ul className={styles.links}>
                <li>
                  <a href="#features" className={styles.link} onClick={(e) => handleNavClick(e, '#features')}>
                    AI Assessment Engine
                  </a>
                </li>
                <li>
                  <a href="#features" className={styles.link} onClick={(e) => handleNavClick(e, '#features')}>
                    NCERT Question Bank
                  </a>
                </li>
                <li>
                  <a href="#features" className={styles.link} onClick={(e) => handleNavClick(e, '#features')}>
                    HPC Compliance Reports
                  </a>
                </li>
                <li>
                  <a href="#features" className={styles.link} onClick={(e) => handleNavClick(e, '#features')}>
                    Teacher Dashboard
                  </a>
                </li>
                <li>
                  <a href="#features" className={styles.link} onClick={(e) => handleNavClick(e, '#features')}>
                    Human Review Panel
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className={styles.navCol}>
              <p className={styles.colTitle}>Company</p>
              <ul className={styles.links}>
                <li>
                  <a href="#product" className={styles.link} onClick={(e) => handleNavClick(e, '#product')}>
                    About Proctors
                  </a>
                </li>
                <li>
                  <a href="#difference" className={styles.link} onClick={(e) => handleNavClick(e, '#difference')}>
                    Our Approach
                  </a>
                </li>
                <li>
                  <span className={styles.linkDisabled}>
                    Blog <span className={styles.badgeSoon}>soon</span>
                  </span>
                </li>
                <li>
                  <span className={styles.linkDisabled}>
                    Careers <span className={styles.badgeSoon}>soon</span>
                  </span>
                </li>
                <li>
                  <a href="mailto:hello@proctors.in" className={styles.link}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Compliance & Legal */}
            <div className={styles.navCol}>
              <p className={styles.colTitle}>Compliance &amp; Legal</p>
              <ul className={styles.links}>
                <li>
                  <span className={styles.linkDisabled}>
                    Privacy Policy (DPDP Act aligned <span className={styles.badgeSoon}>soon</span>)
                  </span>
                </li>
                <li>
                  <span className={styles.linkDisabled}>
                    Terms of Service <span className={styles.badgeSoon}>soon</span>
                  </span>
                </li>
                <li>
                  <a href="#trust" className={styles.link} onClick={(e) => handleNavClick(e, '#trust')}>
                    Student Data Policy
                  </a>
                </li>
                <li>
                  <a href="#trust" className={styles.link} onClick={(e) => handleNavClick(e, '#trust')}>
                    Security Overview
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom: DPDP Compliance Notice & Copyright */}
        <div className={styles.bottom}>
          <p className={styles.complianceNote}>
            Student data stays with your school. Proctors does not sell or share student records. Data handling aligned to India&apos;s DPDP Act.
          </p>
          <p className={styles.copyright}>© 2026 Proctors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
