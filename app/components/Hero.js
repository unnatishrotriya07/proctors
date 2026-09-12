'use client';
import styles from './Hero.module.css';

export default function Hero() {
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
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            AI assessment that listens to{' '}
            <span className={styles.headlineSub}>how a student thinks</span> —<br className={styles.desktopBr} />{' '}
            not just what they write.
          </h1>

          <p className={styles.subhead}>
            Proctor delivers a patient, one-on-one academic dialogue to every student in your school — grounded in the chapter they just studied, aligned to your board, and ready for your PARAKH Holistic Progress Card. No extra curriculum. No extra teacher hours.
          </p>

          <div className={styles.ctaGroup}>
            <div className={styles.actions}>
              <a
                href="#request-pilot"
                className="btn btn--primary"
                onClick={(e) => handleNavClick(e, '#request-pilot')}
              >
                Book a Free Pilot <span aria-hidden="true">→</span>
              </a>
              <a
                href="#product"
                className={`btn btn--ghost ${styles.secondaryBtn}`}
                onClick={(e) => handleNavClick(e, '#product')}
              >
                See How Proctor Works <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className={styles.microCopy}>
              <span>✦ Free for design-partner schools</span>
              <span className={styles.microDot}>•</span>
              <span>✦ Works on any device</span>
              <span className={styles.microDot}>•</span>
              <span>✦ No new curriculum to prepare</span>
            </div>
          </div>

          <div className={styles.trustBadgesRow} aria-label="Accreditation and compliance badges">
            <span className={styles.trustBadge}>CBSE &amp; State Board Aligned</span>
            <span className={styles.trustBadge}>NEP 2020 Compliant</span>
            <span className={styles.trustBadge}>PARAKH / HPC Ready</span>
            <span className={styles.trustBadge}>NCERT-Grounded</span>
          </div>
        </div>
      </div>
    </section>
  );
}

