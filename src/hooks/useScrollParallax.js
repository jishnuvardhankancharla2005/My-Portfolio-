import { useEffect, useRef, useState, useCallback } from 'react';

const useScrollParallax = (options = {}) => {
  const {
    speed = 0.5,
    direction = 'up',
    threshold = 0.1,
  } = options;

  const ref = useRef(null);
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = windowHeight / 2;
    const distance = elementCenter - viewportCenter;

    setOffset(distance * speed * -1);

    if (rect.top < windowHeight * (1 - threshold) && rect.bottom > windowHeight * threshold) {
      setIsVisible(true);
    }
  }, [speed, threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const getStyle = useCallback(() => {
    const transforms = [];
    if (direction === 'up' || direction === 'down') {
      transforms.push(`translateY(${offset}px)`);
    }
    if (direction === 'left' || direction === 'right') {
      transforms.push(`translateX(${offset}px)`);
    }
    return {
      transform: transforms.join(' '),
      transition: 'transform 0.1s linear',
    };
  }, [offset, direction]);

  return { ref, offset, isVisible, style: getStyle() };
};

export default useScrollParallax;
