import { useRef, useCallback } from 'react';

const use3DTilt = ({ maxTilt = 15, perspective = 1000, scale = 1.05, speed = 400 } = {}) => {
  const ref = useRef(null);
  const frameRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    frameRef.current = requestAnimationFrame(() => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      el.style.setProperty('--shine-x', `${(x / rect.width) * 100}%`);
      el.style.setProperty('--shine-y', `${(y / rect.height) * 100}%`);
      el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
      el.style.transition = `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
    });
  }, [maxTilt, perspective, scale, speed]);

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    ref.current.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    ref.current.style.transition = `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
  }, [perspective, speed]);

  const handlers = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };

  return { ref, handlers };
};

export default use3DTilt;
