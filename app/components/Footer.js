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
              Students learn their curriculum. Proctors helps them get better at
              demonstrating what they learned.
            </p>
            <a className={styles.contactLink} href="mailto:hello@proctors.in">
              hello@proctors.in
            </a>
          </div>

          <div className={styles.navCol}>
            <p className={styles.colTitle}>Product</p>
            <ul className={styles.links}>
              <li>
                <a
                  className={styles.link}
                  href="#features"
                  onClick={(e) => handleNavClick(e, "#features")}
                >
                  Features
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
                  href="#pricing"
                  onClick={(e) => handleNavClick(e, "#pricing")}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="#pilot"
                  onClick={(e) => handleNavClick(e, "#pilot")}
                >
                  Book a Pilot
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.navCol}>
            <p className={styles.colTitle}>Platform</p>
            <ul className={styles.links}>
              <li>
                <span className={styles.linkStatic}>AI Assessment Engine</span>
              </li>
              <li>
                <span className={styles.linkStatic}>NCERT Question Bank</span>
              </li>
              <li>
                <span className={styles.linkStatic}>
                  HPC Compliance Reports
                </span>
              </li>
              <li>
                <span className={styles.linkStatic}>Teacher Dashboard</span>
              </li>
              <li>
                <span className={styles.linkStatic}>Human Review Panel</span>
              </li>
            </ul>
          </div>

          <div className={styles.navCol}>
            <p className={styles.colTitle}>Company</p>
            <ul className={styles.links}>
              <li>
                <span className={styles.linkStatic}>About Proctors</span>
              </li>
              <li>
                <span className={styles.linkStatic}>Our Approach</span>
              </li>
              <li>
                <span className={styles.linkStatic}>Blog (coming soon)</span>
              </li>
              <li>
                <span className={styles.linkStatic}>Careers (coming soon)</span>
              </li>
              <li>
                <a className={styles.link} href="mailto:hello@proctors.in">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.navCol}>
            <p className={styles.colTitle}>Compliance &amp; Legal</p>
            <ul className={styles.links}>
              <li>
                <span className={styles.linkStatic}>
                  Privacy Policy (DPDP Act aligned — coming soon)
                </span>
              </li>
              <li>
                <span className={styles.linkStatic}>
                  Terms of Service (coming soon)
                </span>
              </li>
              <li>
                <span className={styles.linkStatic}>Student Data Policy</span>
              </li>
              <li>
                <span className={styles.linkStatic}>Security Overview</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2026 Proctors. All rights reserved.
          </p>
        </div>
        <p className={styles.complianceNote}>
          Student data stays with your school. Proctors does not sell or share
          student records. Data handling aligned to India&apos;s DPDP Act.
        </p>
      </div>
    </footer>
  );
}
