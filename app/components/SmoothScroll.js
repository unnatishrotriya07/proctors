"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

export default function SmoothScroll({ children }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    const onChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      options={{
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)), // Apple exponential ease-out
        lerp: 0.09,
        smoothWheel: true,
        syncTouch: false, // Preserve native iOS/mobile inertial touch physics per Apple HIG
      }}
      root
    >
      {children}
    </ReactLenis>
  );
}
