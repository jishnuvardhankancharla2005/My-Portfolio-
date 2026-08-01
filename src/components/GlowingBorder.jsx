import { useRef, useCallback } from 'react';

const GlowingBorder = ({ children, className = '', color = 'purple' }) => {
  const ref = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    ref.current.style.setProperty('--glow-x', `${x}%`);
    ref.current.style.setProperty('--glow-y', `${y}%`);
  }, []);

  const colorMap = {
    purple: 'rgba(139, 92, 246, 0.6)',
    cyan: 'rgba(6, 182, 212, 0.6)',
    pink: 'rgba(217, 70, 239, 0.6)',
    blue: 'rgba(59, 130, 246, 0.6)',
    rainbow: null,
  };

  const glowColor = colorMap[color] || colorMap.purple;

  return (
    <div
      ref={ref}
      className={`glow-border-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      style={{
        '--glow-color': glowColor || 'rgba(139, 92, 246, 0.6)',
      }}
    >
      <div className="glow-border-effect" />
      {children}
    </div>
  );
};

export default GlowingBorder;
