"use client";
import styles from "./Hero.module.css";

export default function Hero() {
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
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            The conversation behind
            <br className={styles.desktopBr} />{" "}
            <span className={styles.headlineSub}>every grade.</span>
          </h1>

          <p className={styles.subhead}>
            Proctor asks the follow-up question a teacher would ask, if only
            there were time. Built entirely on the curriculum your school
            already teaches — nothing extra to study, nothing new to install.
          </p>

          <div className={styles.actions}>
            <a
              className="btn btn--primary"
              href="#request-pilot"
              onClick={(e) => handleNavClick(e, "#request-pilot")}
            >
              Book a Pilot
            </a>
            <a
              className={`btn btn--ghost ${styles.secondaryBtn}`}
              href="#proctor"
              onClick={(e) => handleNavClick(e, "#proctor")}
            >
              See how Proctor works <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className={styles.trustLockup}>
            <div className={styles.trustItem}>
              <span className={styles.trustCategory}>Curriculum</span>
              <span className={styles.trustValue}>CBSE &amp; State Boards</span>
            </div>
            <span aria-hidden="true" className={styles.trustSep} />
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
