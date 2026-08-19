'use client';
import { useRef, useState, useCallback } from 'react';
import styles from './LiquidGlass.module.css';

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
  className = '',
  variant = 'card',
  interactive = true,
  hoverable = true,
  as: Component = 'div',
  ...props
}) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = useCallback((e) => {
    if (!interactive || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y, active: true });
  }, [interactive]);

  const handleMouseLeave = useCallback(() => {
    setMousePos((prev) => ({ ...prev, active: false }));
  }, []);

  const variantClass = styles[variant] || styles.card;
  const hoverClass = hoverable ? styles.hoverable : '';
  const combinedClasses = `${styles.liquidGlass} ${variantClass} ${hoverClass} ${className}`.trim();

  return (
    <Component
      ref={cardRef}
      className={combinedClasses}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--mouse-x': `${mousePos.x}%`,
        '--mouse-y': `${mousePos.y}%`,
        '--spotlight-opacity': mousePos.active ? '1' : '0',
        ...props.style,
      }}
      {...props}
    >
      {/* Specular Top Rim Reflection */}
      <div className={styles.topRim} aria-hidden="true" />

      {/* Interactive Cursor Spotlight Glow */}
      {interactive && (
        <div className={styles.spotlight} aria-hidden="true" />
      )}

      {/* Inner Content */}
      <div className={styles.content}>
        {children}
      </div>
    </Component>
  );
}

export { LiquidGlass };
