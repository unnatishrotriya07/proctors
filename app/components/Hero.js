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
            The conversation behind<br className={styles.desktopBr} />{' '}
            <span className={styles.headlineSub}>every grade.</span>
          </h1>

          <p className={styles.subhead}>
            Proctor asks the follow-up question a teacher would ask, if only there were time.
            Built entirely on the curriculum your school already teaches — nothing extra to study, nothing new to install.
          </p>

          <div className={styles.actions}>
            <a
              href="#request-pilot"
              className="btn btn--primary"
              onClick={(e) => handleNavClick(e, '#request-pilot')}
            >
              Book a Pilot
            </a>
            <a
              href="#proctor"
              className={`btn btn--ghost ${styles.secondaryBtn}`}
              onClick={(e) => handleNavClick(e, '#proctor')}
            >
              See how Proctor works <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className={styles.trustLockup}>
            <div className={styles.trustItem}>
              <span className={styles.trustCategory}>Curriculum</span>
              <span className={styles.trustValue}>CBSE &amp; State Boards</span>
            </div>
            <span className={styles.trustSep} aria-hidden="true" />
            <div className={styles.trustItem}>
              <span className={styles.trustCategory}>Framework</span>
              <span className={styles.trustValue}>NEP 2020 &amp; PARAKH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

