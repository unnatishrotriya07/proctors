'use client';
import { useEffect, useRef, useState } from 'react';
import GlassCard from '@/components/ui/GlassCard';
import styles from './LearningChart.module.css';

const points = [
  { week: 'W1', value: 24 },
  { week: 'W2', value: 38 },
  { week: 'W3', value: 52 },
  { week: 'W4', value: 68 },
  { week: 'W5', value: 80 },
  { week: 'W6', value: 92 },
];

const W = 520;
const H = 140;
const PAD = { top: 16, right: 24, bottom: 28, left: 24 };
const chartW = W - PAD.left - PAD.right;
const chartH = H - PAD.top - PAD.bottom;

function getCoords() {
  return points.map((p, i) => {
    const x = PAD.left + (i / (points.length - 1)) * chartW;
    const y = PAD.top + chartH - (p.value / 100) * chartH;
    return [x, y];
  });
}

function getCurvedPath(pts) {
  let d = `M ${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i];
    const [x1, y1] = pts[i + 1];
    const mx = (x0 + x1) / 2;
    d += ` C ${mx},${y0} ${mx},${y1} ${x1},${y1}`;
  }
  return d;
}

function getAreaPath(pts) {
  const lineD = getCurvedPath(pts);
  const lastX = pts[pts.length - 1][0];
  const firstX = pts[0][0];
  const bottomY = PAD.top + chartH;
  return `${lineD} L ${lastX},${bottomY} L ${firstX},${bottomY} Z`;
}

export default function LearningChart() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const pts = getCoords();

  return (
    <div className={styles.wrap} ref={ref}>
      <GlassCard hoverEffect={false} className={styles.card}>
        <p className={styles.lineAbove}>
          Understanding deepens as conversations continue across a term.
        </p>

        <div className={styles.svgContainer}>
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className={styles.svg}
            role="img"
            aria-label="Graph of student conceptual understanding progression"
          >
            <defs>
              <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1b9ffe" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#1b9ffe" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Subtle baseline */}
            <line
              x1={PAD.left}
              y1={PAD.top + chartH}
              x2={W - PAD.right}
              y2={PAD.top + chartH}
              stroke="rgba(148, 163, 184, 0.2)"
              strokeWidth="1"
            />

            {/* Gradient Area Fill */}
            <path
              d={getAreaPath(pts)}
              fill="url(#curveGrad)"
              className={`${styles.area} ${visible ? styles.visible : ''}`}
            />

            {/* Glowing Main Curve */}
            <path
              d={getCurvedPath(pts)}
              fill="none"
              stroke="#1b9ffe"
              strokeWidth="2.5"
              strokeLinecap="round"
              className={`${styles.line} ${visible ? styles.visible : ''}`}
            />

            {/* Dots */}
            {pts.map(([x, y], i) => (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={i === pts.length - 1 ? 4.5 : 3}
                fill={i === pts.length - 1 ? '#1b9ffe' : '#ffffff'}
                stroke="#1b9ffe"
                strokeWidth={i === pts.length - 1 ? 2 : 1.5}
                className={`${styles.dot} ${visible ? styles.dotVisible : ''}`}
                style={{ transitionDelay: `${0.4 + i * 0.08}s` }}
              />
            ))}

            {/* X Labels */}
            {points.map((p, i) => {
              const x = pts[i][0];
              return (
                <text
                  key={i}
                  x={x}
                  y={PAD.top + chartH + 18}
                  textAnchor="middle"
                  className={styles.label}
                >
                  {p.week}
                </text>
              );
            })}
          </svg>
        </div>
      </GlassCard>
    </div>
  );
}
