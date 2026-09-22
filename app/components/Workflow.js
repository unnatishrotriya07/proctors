"use client";
import { useEffect, useRef, useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import styles from "./Workflow.module.css";

const steps = [
  {
    description:
      "The student's chapter stays the same. Nothing new to study. No separate app to open.",
    name: "Learn",
    num: "01",
  },
  {
    description:
      "The teacher assigns a Proctor assessment in under two minutes, linked to the chapter just taught.",
    name: "Assess",
    num: "02",
  },
  {
    description:
      "Proctor asks one curriculum-grounded question. The student responds — by voice or text. Proctor follows up once, precisely where it matters.",
    name: "Converse",
    num: "03",
  },
  {
    description:
      "The evaluation pipeline processes how the student answered — not merely what they said — mapping response quality against Bloom's-tagged learning outcomes.",
    name: "Understand",
    num: "04",
  },
  {
    description:
      "The teacher receives a per-student insight report. The student, for the first time, has a record of how they explained what they know — and where their understanding needs work.",
    name: "Improve",
    num: "05",
  },
];

export default function Workflow() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  // Measure card width on mount and resize
  useEffect(() => {
    function measure() {
      if (!trackRef.current) {
        return;
      }
      const first = trackRef.current.querySelector("[data-card]");
      if (first) {
        setCardWidth(first.offsetWidth + 20); // 20 = gap
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Sync active dot while scrolling
  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    function onScroll() {
      if (!cardWidth) {
        return;
      }
      const idx = Math.round(track.scrollLeft / cardWidth);
      setActive(Math.min(idx, steps.length - 1));
    }
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [cardWidth]);

  // Mouse wheel horizontal scroll support
  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    function onWheel(e) {
      if (
        Math.abs(e.deltaY) > Math.abs(e.deltaX) &&
        ((e.deltaY > 0 &&
          track.scrollLeft < track.scrollWidth - track.clientWidth) ||
          (e.deltaY < 0 && track.scrollLeft > 0))
      ) {
        track.scrollLeft += e.deltaY;
      }
    }
    track.addEventListener("wheel", onWheel, { passive: true });
    return () => track.removeEventListener("wheel", onWheel);
  }, []);

  function goTo(idx) {
    if (!(trackRef.current && cardWidth)) {
      return;
    }
    trackRef.current.scrollTo({ behavior: "smooth", left: idx * cardWidth });
    setActive(idx);
  }

  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className={styles.header}>
          <p className="label label--accent">How It Works</p>
          <h2 className={styles.heading}>
            The same curriculum. A more complete picture.
          </h2>
        </div>

        {/* Mobile Step Counter & Swipe Cue */}
        <div className={styles.mobileStepHeader}>
          <div className={styles.mobileStepMeta}>
            <span className={styles.mobileStepBadge}>
              Step {active + 1} of {steps.length}
            </span>
            <span className={styles.mobileStepTitle}>{steps[active].name}</span>
          </div>
          <div className={styles.mobileProgressBar}>
            <div
              className={styles.mobileProgressFill}
              style={{ width: `${((active + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Carousel track */}
        <div className={styles.carouselOuter}>
          <div className={styles.track} ref={trackRef}>
            {steps.map((step, i) => (
              <GlassCard
                className={`${styles.stepCard} ${
                  i === active ? styles.stepCardActive : ""
                }`}
                data-card
                key={step.num}
              >
                <div className={styles.stepNum}>{step.num}</div>
                <h3 className={styles.stepName}>{step.name}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Dot navigation */}
        <div
          aria-label="Step navigation"
          className={styles.dots}
          role="tablist"
        >
          {steps.map((step, i) => (
            <button
              aria-label={`Go to step ${i + 1}: ${step.name}`}
              aria-selected={i === active}
              className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
              key={step.num}
              onClick={() => goTo(i)}
              role="tab"
              type="button"
            />
          ))}
        </div>

        <div className={styles.closingWrapper}>
          <GlassCard
            className={styles.closingLine}
            hoverEffect={false}
            variant="pill"
          >
            <span className={styles.closingDot} />
            <p>
              The subject stays the same. The chapter stays the same. What the
              school gets to see does not.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
