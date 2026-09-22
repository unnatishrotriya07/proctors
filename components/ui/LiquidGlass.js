"use client";
import { useCallback, useRef } from "react";
import styles from "./LiquidGlass.module.css";

/**
 * Premium Liquid Glass Component (visionOS / Apple Liquid Glass Architecture)
 *
 * Features:
 * - Dynamic cursor refraction spotlight
 * - Multi-layer specular rim highlights
 * - High-index backdrop blur & saturation
 * - Fluid hover physics & optical depth
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className='']
 * @param {'card'|'elevated'|'pill'|'nav'|'blue'|'grey'|'subtle'} [props.variant='card']
 * @param {boolean} [props.interactive=true] - Enable dynamic mouse spotlight
 * @param {boolean} [props.hoverable=true] - Enable elevation on hover
 * @param {keyof JSX.IntrinsicElements | React.ComponentType<any>} [props.as='div']
 */
export default function LiquidGlass({
  children,
  className = "",
  variant = "card",
  interactive = true,
  hoverable = true,
  hoverEffect,
  as: Component = "div",
  ...props
}) {
  const cardRef = useRef(null);
  const rafId = useRef(null);

  const handleMouseMove = useCallback(
    (e) => {
      if (!(interactive && cardRef.current)) {
        return;
      }
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }
      const el = cardRef.current;
      const { clientX, clientY } = e;
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      rafId.current = requestAnimationFrame(() => {
        if (!el) {
          return;
        }
        const rect = el.getBoundingClientRect();
        const x = ((clientX - rect.left) / rect.width) * 100;
        const y = ((clientY - rect.top) / rect.height) * 100;
        el.style.setProperty("--mouse-x", `${x.toFixed(1)}%`);
        el.style.setProperty("--mouse-y", `${y.toFixed(1)}%`);
        el.style.setProperty("--spotlight-opacity", "1");
      });
    },
    [interactive]
  );

  const handleMouseLeave = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }
    if (cardRef.current) {
      cardRef.current.style.setProperty("--spotlight-opacity", "0");
    }
  }, []);

  const isHoverable = hoverEffect === undefined ? hoverable : hoverEffect;
  const variantClass = styles[variant] || styles.card;
  const hoverClass = isHoverable ? styles.hoverable : "";
  const combinedClasses =
    `${styles.liquidGlass} ${variantClass} ${hoverClass} ${className}`.trim();

  return (
    <Component
      className={combinedClasses}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={cardRef}
      style={{
        "--mouse-x": "50%",
        "--mouse-y": "50%",
        "--spotlight-opacity": "0",
        ...props.style,
      }}
      {...props}
    >
      {/* Specular Top Rim Reflection */}
      <div aria-hidden="true" className={styles.topRim} />

      {/* Interactive Cursor Spotlight Glow */}
      {interactive && <div aria-hidden="true" className={styles.spotlight} />}

      {/* Inner Content */}
      <div className={styles.content}>{children}</div>
    </Component>
  );
}

export { LiquidGlass };
