import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <a href="#hero" className={styles.brand} aria-label="Proctors Home">
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
              <li><a href="#proctor" className={styles.link}>Proctor</a></li>
              <li><a href="#how-it-works" className={styles.link}>How It Works</a></li>
              <li><a href="#for-schools" className={styles.link}>For Schools</a></li>
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
