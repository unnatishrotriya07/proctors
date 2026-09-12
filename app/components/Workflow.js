'use client';
import { useRef, useState, useEffect } from 'react';
import styles from './Workflow.module.css';
import GlassCard from '@/components/ui/GlassCard';

const steps = [
  {
    num: '01',
    name: 'Learn',
    description: "The student's chapter stays the same. Nothing new to study. No separate app to open.",
  },
  {
    num: '02',
    name: 'Assess',
    description: 'The teacher assigns a Proctor assessment in under two minutes, linked to the chapter just taught.',
  },
  {
    num: '03',
    name: 'Converse',
    description: 'Proctor asks one curriculum-grounded question. The student responds — by voice or text. Proctor follows up once, precisely where it matters.',
  },
  {
    num: '04',
    name: 'Understand',
    description: 'The evaluation pipeline processes how the student answered — not merely what they said — mapping response quality against Bloom’s-tagged learning outcomes.',
  },
  {
    num: '05',
    name: 'Improve',
    description: 'The teacher receives a per-student insight report. The student, for the first time, has a record of how they explained what they know — and where their understanding needs work.',
  },
];

export default function Workflow() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  // Measure card width on mount and resize
  useEffect(() => {
    function measure() {
      if (!trackRef.current) return;
      const first = trackRef.current.querySelector('[data-card]');
      if (first) setCardWidth(first.offsetWidth + 20); // 20 = gap
    }
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Sync active dot while scrolling
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    function onScroll() {
      if (!cardWidth) return;
      const idx = Math.round(track.scrollLeft / cardWidth);
      setActive(Math.min(idx, steps.length - 1));
    }
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, [cardWidth]);

  // Mouse wheel horizontal scroll support
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    function onWheel(e) {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        if (
          (e.deltaY > 0 && track.scrollLeft < track.scrollWidth - track.clientWidth) ||
          (e.deltaY < 0 && track.scrollLeft > 0)
        ) {
          track.scrollLeft += e.deltaY;
        }
      }
    }
    track.addEventListener('wheel', onWheel, { passive: true });
    return () => track.removeEventListener('wheel', onWheel);
  }, []);

  function goTo(idx) {
    if (!trackRef.current || !cardWidth) return;
    trackRef.current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
    setActive(idx);
  }

  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className={styles.header}>
          <p className="label label--accent">How It Works</p>
          <h2 className={styles.heading}>
            The same curriculum. A more complete picture.
          </h2>
        </div>

        {/* Carousel track */}
        <div className={styles.carouselOuter}>
          <div className={styles.track} ref={trackRef}>
            {steps.map((step, i) => (
              <GlassCard key={step.num} className={styles.stepCard} data-card>
                <div className={styles.stepNum}>{step.num}</div>
                <h3 className={styles.stepName}>{step.name}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Dot navigation */}
        <div className={styles.dots} role="tablist" aria-label="Step navigation">
          {steps.map((step, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to step ${i + 1}: ${step.name}`}
              className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <div className={styles.closingWrapper}>
          <GlassCard variant="pill" hoverEffect={false} className={styles.closingLine}>
            <span className={styles.closingDot} />
            <p>The subject stays the same. The chapter stays the same. What the school gets to see does not.</p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
