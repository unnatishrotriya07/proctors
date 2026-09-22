"use client";
import { useCallback, useRef } from "react";
import styles from "./Hero.module.css";

const WAVE_BARS = [
  0.5, 0.8, 0.45, 1, 0.7, 0.9, 0.55, 0.75, 1, 0.6, 0.85, 0.5, 0.95, 0.65, 0.8,
  0.45, 0.7, 1, 0.55, 0.85, 0.6, 0.9, 0.5, 0.75,
];

export default function Hero() {
  const visualRef = useRef(null);
  const stageRef = useRef(null);
  const rafId = useRef(null);

  const handleNavClick = (e, href) => {
    if (href?.startsWith("#")) {
      e.preventDefault();
      const elem = document.getElementById(href.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  const handleParallax = useCallback((e) => {
    const visual = visualRef.current;
    const stage = stageRef.current;
    if (!(visual && stage)) {
      return;
    }
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const rect = visual.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }
    rafId.current = requestAnimationFrame(() => {
      if (!stage) {
        return;
      }
      const rotY = (x * 10).toFixed(2);
      const rotX = (-y * 8).toFixed(2);
      stage.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
    });
  }, []);

  const resetParallax = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }
    const stage = stageRef.current;
    if (stage) {
      stage.style.transform = "rotateY(0deg) rotateX(0deg)";
    }
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={`badge badge--blue ${styles.eyebrow}`}>
            <span aria-hidden="true" className={styles.eyebrowDot} />
            Conversational assessment for modern schools
          </p>
          <h1 className={styles.headline}>
            AI assessment that listens to how a student thinks —<br /> not just
            what they write.
          </h1>
          <p className={styles.subhead}>
            Proctor delivers a patient, one-on-one academic dialogue to every
            student in your school — grounded in the chapter they just studied,
            aligned to your board, and ready for your PARAKH Holistic Progress
            Card. No extra curriculum. No extra teacher hours.
          </p>
          <div className={styles.actions}>
            <a
              className="btn btn--primary"
              href="#request-pilot"
              onClick={(e) => handleNavClick(e, "#request-pilot")}
            >
              Book a Free Pilot →
            </a>
            <a
              className="btn btn--ghost"
              href="#product"
              onClick={(e) => handleNavClick(e, "#product")}
            >
              See How Proctor Works ↓
            </a>
          </div>
          <p className={styles.microcopy}>
            ✦ Free for design-partner schools &nbsp;|&nbsp; ✦ Works on any
            device &nbsp;|&nbsp; ✦ No new curriculum to prepare
          </p>
          <ul
            aria-label="Compliance and alignment"
            className={styles.miniTrust}
          >
            <li>CBSE &amp; State Board Aligned</li>
            <li aria-hidden="true">·</li>
            <li>NEP 2020 Compliant</li>
            <li aria-hidden="true">·</li>
            <li>PARAKH / HPC Ready</li>
            <li aria-hidden="true">·</li>
            <li>NCERT-Grounded</li>
          </ul>
        </div>

        <div
          aria-hidden="true"
          className={styles.visual}
          onMouseLeave={resetParallax}
          onMouseMove={handleParallax}
          ref={visualRef}
        >
          <div className={styles.stage} ref={stageRef}>
            <div className={styles.halo} />
            <div className={styles.ring} />
            <div className={styles.console}>
              <div className={styles.consoleTop}>
                <span className={styles.liveDot} />
                <span className={styles.consoleTitle}>
                  Grade 7 · Fractions · Live
                </span>
              </div>
              <div className={styles.wave}>
                {WAVE_BARS.map((h, i) => (
                  <span
                    key={i}
                    style={{
                      animationDelay: `${(i % 12) * 0.12}s`,
                      height: `${Math.round(h * 100)}%`,
                    }}
                  />
                ))}
              </div>
              <div className={styles.progress}>
                <div className={styles.progressBar}>
                  <span style={{ width: "68%" }} />
                </div>
                <span className={styles.progressLabel}>
                  Listening · Question 4 of 6
                </span>
              </div>
            </div>

            <div className={styles.cardAi}>
              <p className={styles.cardRole}>Proctors asks</p>
              <p>“Can you explain how you arrived at that answer?”</p>
            </div>
            <div className={styles.cardStudent}>
              <p className={styles.cardRole}>Aarav responds</p>
              <p>“I thought the pattern changed because the numbers grew…”</p>
            </div>
            <div className={styles.alignBadge}>
              <span className={styles.alignCheck}>✓</span>
              Curriculum aligned · Pattern recognition
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
