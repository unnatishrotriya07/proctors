'use client';

import { useState, useEffect } from 'react';
import { MorphingInfinity } from '@/components/ui/morphing-infinity';

export default function PageLoader() {
  const [loading, setLoading] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Check if user has already visited in this session
    const hasVisited = sessionStorage.getItem('proctors_first_visit');
    if (hasVisited) {
      return;
    }

    const initTimer = setTimeout(() => {
      setLoading(true);
    }, 0);
    // Lock scroll during initial 3-second loader
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setFading(true);
      const fadeTimer = setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = '';
        sessionStorage.setItem('proctors_first_visit', 'true');
      }, 500);
      return () => clearTimeout(fadeTimer);
    }, 3000);

    return () => {
      clearTimeout(initTimer);
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-white/20 backdrop-blur-sm transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex min-h-64 items-center justify-center">
        <MorphingInfinity className="size-16 text-foreground" />
      </div>
    </div>
  );
}
