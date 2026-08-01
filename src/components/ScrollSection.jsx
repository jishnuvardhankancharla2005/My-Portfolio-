import { useRef, useEffect, useState, useCallback } from 'react';

const ScrollSection = ({ children, className = '', id, index = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = Math.max(0, Math.min(1, 1 - (rect.top / vh)));
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <section
      ref={ref}
      id={id}
      className={`scroll-section ${isVisible ? 'scroll-section-visible' : ''} ${className}`}
      style={{
        '--section-progress': scrollProgress,
        '--section-index': index,
      }}
    >
      <div className="scroll-section-inner container">
        {children}
      </div>
      <div className="section-divider-line" />
    </section>
  );
};

export default ScrollSection;
