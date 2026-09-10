"use client";
import { useEffect, useRef, useState } from "react";

/**
 * FunnelChart — pure SVG funnel, no external deps.
 *
 * Props:
 *   data            { label, value, displayValue }[]
 *   color           CSS color string or var()
 *   layers          number of "glass depth" shadow layers (1-4)
 *   labelLayout     "grouped" | "inline"
 *   labelAlign      "center" | "left" | "right"
 *   labelOrientation "vertical" | "horizontal"
 */
export function FunnelChart({
  data = [],
  color = "#2563eb",
  layers = 2,
  labelLayout = "grouped",
  labelAlign = "center",
  labelOrientation = "vertical",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.25 }
    );
    if (ref.current) {
      obs.observe(ref.current);
    }
    return () => obs.disconnect();
  }, []);

  if (!data.length) {
    return null;
  }

  const W = 480;
  const H = data.length * 68;
  const topWidth = W * 0.92;
  const maxVal = data[0].value;

  // Compute trapezoid for each segment
  const segments = data.map((d, i) => {
    const ratio = d.value / maxVal;
    const nextRatio = data[i + 1] ? data[i + 1].value / maxVal : ratio * 0.6;

    const segW_top = topWidth * ratio;
    const segW_bot = topWidth * nextRatio;

    const x1 = (W - segW_top) / 2;
    const x2 = x1 + segW_top;
    const x3 = (W - segW_bot) / 2;
    const x4 = x3 + segW_bot;

    const y1 = i * 68;
    const y2 = y1 + 60;

    return { d, i, ratio, x1, x2, x3, x4, y1, y2 };
  });

  return (
    <div ref={ref} style={{ width: "100%" }}>
      <svg
        aria-label="Funnel chart"
        role="img"
        style={{ height: "auto", overflow: "visible", width: "100%" }}
        viewBox={`0 0 ${W} ${H}`}
      >
        <defs>
          {segments.map(({ i }) => (
            <linearGradient
              id={`funnelGrad-${i}`}
              key={`grad-${i}`}
              x1="0"
              x2="0"
              y1="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor={color}
                stopOpacity={0.95 - i * 0.06}
              />
              <stop
                offset="100%"
                stopColor={color}
                stopOpacity={0.7 - i * 0.06}
              />
            </linearGradient>
          ))}
          {/* Glass highlight */}
          <linearGradient id="funnelShine" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.22" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {segments.map(({ d, x1, x2, x3, x4, y1, y2, i }) => {
          const midX = W / 2;
          const midY = (y1 + y2) / 2 + 4;

          const pathD = `M ${x1} ${y1} L ${x2} ${y1} L ${x4} ${y2} L ${x3} ${y2} Z`;
          const shineD = `M ${x1} ${y1} L ${x2} ${y1} L ${x4} ${y1 + 20} L ${x3} ${y1 + 20} Z`;

          return (
            <g key={i}>
              {/* Shadow layers for depth */}
              {Array.from({ length: Math.min(layers, 3) }).map((_, l) => (
                <path
                  d={pathD}
                  fill="none"
                  key={l}
                  stroke={color}
                  strokeOpacity={0.08 - l * 0.02}
                  strokeWidth={(l + 1) * 3}
                  transform={`translate(0, ${(l + 1) * 1.5})`}
                />
              ))}

              {/* Main body */}
              <path
                d={pathD}
                fill={`url(#funnelGrad-${i})`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "scaleY(1)" : "scaleY(0)",
                  transformOrigin: `${W / 2}px ${y1}px`,
                  transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
                }}
              />

              {/* Glass shine overlay */}
              <path
                d={shineD}
                fill="url(#funnelShine)"
                style={{
                  opacity: visible ? 1 : 0,
                  transition: `opacity 0.5s ease ${i * 0.1 + 0.2}s`,
                }}
              />

              {/* Segment border top */}
              {i > 0 && (
                <line
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="1"
                  x1={x1}
                  x2={x2}
                  y1={y1}
                  y2={y1}
                />
              )}

              {/* Center label */}
              {labelLayout === "grouped" && labelAlign === "center" && (
                <g
                  style={{
                    opacity: visible ? 1 : 0,
                    transition: `opacity 0.4s ease ${i * 0.1 + 0.35}s`,
                  }}
                >
                  {labelOrientation === "vertical" ? (
                    <>
                      <text
                        fill="white"
                        fontFamily="inherit"
                        fontSize="13"
                        fontWeight="700"
                        style={{ letterSpacing: "-0.01em" }}
                        textAnchor="middle"
                        x={midX}
                        y={midY - 7}
                      >
                        {d.displayValue || d.value.toLocaleString()}
                      </text>
                      <text
                        fill="rgba(255,255,255,0.8)"
                        fontFamily="inherit"
                        fontSize="10"
                        style={{
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                        }}
                        textAnchor="middle"
                        x={midX}
                        y={midY + 9}
                      >
                        {d.label}
                      </text>
                    </>
                  ) : (
                    <text
                      fill="white"
                      fontFamily="inherit"
                      fontSize="12"
                      fontWeight="600"
                      textAnchor="middle"
                      x={midX}
                      y={midY + 4}
                    >
                      {d.label} · {d.displayValue || d.value}
                    </text>
                  )}
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
