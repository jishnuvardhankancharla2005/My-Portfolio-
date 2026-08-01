import React, { lazy, Suspense } from 'react';

const ParticleField = lazy(() => import('./ParticleField'));

const AnimatedBg = () => {
  return (
    <div className="bg-ambient-wrapper" aria-hidden="true">
      <div className="ambient-orb orb-1"></div>
      <div className="ambient-orb orb-2"></div>
      <div className="ambient-orb orb-3"></div>
      <div className="ambient-orb orb-4"></div>
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>
    </div>
  );
};

export default AnimatedBg;
