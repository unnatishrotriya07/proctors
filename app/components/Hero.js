import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            The conversation behind<br />
            <span className={styles.headlineSub}>every grade.</span>
          </h1>

          <p className={styles.subhead}>
            Proctor asks the follow-up question a teacher would ask, if only there were time.
            Built entirely on the curriculum your school already teaches — nothing extra to study, nothing new to install.
          </p>

          <div className={styles.actions}>
            <a href="#request-pilot" className="btn btn--primary">
              Book a Pilot
            </a>
            <a href="#proctor" className={`btn btn--ghost ${styles.secondaryBtn}`}>
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

