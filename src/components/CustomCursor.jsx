import { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const glowRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const pos = useRef({ x: -100, y: -100 });
  const trailPos = useRef({ x: -100, y: -100 });

  const animate = useCallback(() => {
    trailPos.current.x += (pos.current.x - trailPos.current.x) * 0.15;
    trailPos.current.y += (pos.current.y - trailPos.current.y) * 0.15;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
    }
    if (trailRef.current) {
      trailRef.current.style.transform = `translate(${trailPos.current.x}px, ${trailPos.current.y}px)`;
    }
    if (glowRef.current) {
      glowRef.current.style.transform = `translate(${trailPos.current.x}px, ${trailPos.current.y}px)`;
    }

    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      const interactive = target.closest('a, button, .btn, .filter-btn, .nav-link, .tilt-card, .cert-card, input, textarea, [role="button"]');
      if (interactive) {
        setIsHovering(true);
        const text = interactive.getAttribute('data-cursor-text');
        if (text) setCursorText(text);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      const interactive = target.closest('a, button, .btn, .filter-btn, .nav-link, .tilt-card, .cert-card, input, textarea, [role="button"]');
      if (interactive) {
        setIsHovering(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    const frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(frame);
    };
  }, [animate]);

  return createPortal(
    <>
      <div
        ref={glowRef}
        className={`custom-cursor-glow ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
      />
      <div
        ref={trailRef}
        className={`custom-cursor-trail ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
      />
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
      >
        {cursorText && <span className="cursor-text">{cursorText}</span>}
      </div>
    </>,
    document.body
  );
};

export default CustomCursor;
