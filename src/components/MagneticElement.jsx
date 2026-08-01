import { useRef, useCallback, useState } from 'react';

const MagneticElement = ({ children, strength = 0.3, className = '' }) => {
  const ref = useRef(null);
  const [transform, setTransform] = useState('translate(0px, 0px)');

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTransform(`translate(${x * strength}px, ${y * strength}px)`);
  }, [strength]);

  const handleMouseLeave = useCallback(() => {
    setTransform('translate(0px, 0px)');
  }, []);

  return (
    <div
      ref={ref}
      className={`magnetic-element ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: 'transform 0.3s cubic-bezier(0.03, 0.98, 0.52, 0.99)' }}
    >
      {children}
    </div>
  );
};

export default MagneticElement;
