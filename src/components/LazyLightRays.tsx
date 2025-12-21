import { lazy, Suspense, useEffect, useState } from 'react';
import type { ComponentType } from 'react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import type { LightRaysProps } from './LightRays';

const LightRays = lazy<ComponentType<LightRaysProps>>(async () => {
  try {
    const mod = await import('./LightRays');
    return { default: mod.default };
  } catch {
    // Fallback to a no-op component if WebGL or import fails
    return { default: () => null };
  }
});

type LazyLightRaysProps = Pick<LightRaysProps, 'className' | 'raysColor' | 'raysOrigin'>;

const GradientFallback = ({ className = '' }: { className?: string }) => (
  <div
    aria-hidden
    className={`pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-700/25 via-blue-600/15 to-transparent blur-3xl ${className}`}
  />
);

const LazyLightRays = ({ className, raysColor, raysOrigin }: LazyLightRaysProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    // Defer mounting to avoid layout thrash on first paint
    const id = window.requestAnimationFrame(() => setShouldRender(true));
    return () => window.cancelAnimationFrame(id);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <GradientFallback className={className} />;
  }

  if (!shouldRender) {
    return <GradientFallback className={className} />;
  }

  return (
    <Suspense fallback={<GradientFallback className={className} />}>
      <LightRays className={className} raysColor={raysColor} raysOrigin={raysOrigin} />
    </Suspense>
  );
};

export default LazyLightRays;

