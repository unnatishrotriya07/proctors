"use client";
import { useEffect } from "react";

export default function Reveal({ children }) {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.revealed)");
    if (!("IntersectionObserver" in window)) {
      for (const el of els) {
        el.classList.add("revealed");
      }
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    for (const el of els) {
      io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  return <>{children}</>;
}
