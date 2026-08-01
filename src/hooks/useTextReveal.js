import { useEffect, useRef, useState, useCallback } from 'react';

const useTextReveal = (options = {}) => {
  const { delay = 0, stagger = 0.03, type = 'chars' } = options;
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsRevealed(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const splitText = useCallback((text) => {
    if (type === 'chars') {
      return text.split('').map((char, i) => (
        <span
          key={i}
          className={`reveal-char ${isRevealed ? 'revealed' : ''}`}
          style={{ transitionDelay: `${i * stagger}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    }
    if (type === 'words') {
      return text.split(' ').map((word, i) => (
        <span
          key={i}
          className={`reveal-word ${isRevealed ? 'revealed' : ''}`}
          style={{ transitionDelay: `${i * stagger}s` }}
        >
          {word}
        </span>
      ));
    }
    return text;
  }, [isRevealed, stagger, type]);

  return { ref, isRevealed, splitText };
};

export default useTextReveal;
