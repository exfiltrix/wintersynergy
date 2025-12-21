import { useEffect, useState } from 'react';

/**
 * Tracks user preference to reduce motion (SSR-safe).
 */
const usePrefersReducedMotion = () => {
  const [prefers, setPrefers] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');

    const update = () => setPrefers(media.matches);
    update();

    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return prefers;
};

export default usePrefersReducedMotion;

