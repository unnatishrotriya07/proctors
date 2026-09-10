"use client";
import { useCallback, useRef } from "react";
import styles from "./Hero.module.css";

const WAVE_BARS = [
  0.5, 0.8, 0.45, 1, 0.7, 0.9, 0.55, 0.75, 1, 0.6, 0.85, 0.5, 0.95, 0.65, 0.8,
  0.45, 0.7, 1, 0.55, 0.85, 0.6, 0.9, 0.5, 0.75,
];

export default function Hero() {
  const visualRef = useRef(null);

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
    const el = visualRef.current;
    if (!el) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--px", x.toFixed(3));
    el.style.setProperty("--py", y.toFixed(3));
  }, []);

  const resetParallax = useCallback(() => {
    const el = visualRef.current;
    if (el) {
      el.style.setProperty("--px", "0");
      el.style.setProperty("--py", "0");
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
            Understand every student,
            <br /> not just every answer.
          </h1>
          <p className={styles.subhead}>
            Proctors gives every student a one-on-one AI assessment experience
            grounded in your curriculum, aligned to NEP 2020, and translated
            into insight your teachers can use this week.
          </p>
          <div className={styles.actions}>
            <a
              className="btn btn--primary"
              href="#book-walkthrough"
              onClick={(e) => handleNavClick(e, "#book-walkthrough")}
            >
              Book a walkthrough
            </a>
            <a
              className="btn btn--ghost"
              href="#how-it-works"
              onClick={(e) => handleNavClick(e, "#how-it-works")}
            >
              See how it works <span aria-hidden="true">→</span>
            </a>
          </div>
          <ul aria-label="Highlights" className={styles.miniTrust}>
            <li>Curriculum-grounded</li>
            <li aria-hidden="true">·</li>
            <li>NEP 2020 aligned</li>
            <li aria-hidden="true">·</li>
            <li>HPC-ready reporting</li>
          </ul>
        </div>

        <div
          aria-hidden="true"
          className={styles.visual}
          onMouseLeave={resetParallax}
          onMouseMove={handleParallax}
          ref={visualRef}
        >
          <div className={styles.stage}>
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
