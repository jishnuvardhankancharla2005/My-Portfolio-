import { useEffect, useRef, useState } from 'react';

const AnimatedCounter = ({ target, suffix = '', duration = 2000, label }) => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const start = performance.now();
          const numericTarget = parseInt(target, 10);

          if (isNaN(numericTarget)) {
            setCount(target);
            return;
          }

          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * numericTarget));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <div ref={ref} className="animated-counter">
      <span className="counter-value text-gradient-accent">
        {typeof count === 'number' ? count : target}{suffix}
      </span>
      <span className="counter-label">{label}</span>
    </div>
  );
};

export default AnimatedCounter;
