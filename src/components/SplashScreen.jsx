import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';

const SplashScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 2000),
      setTimeout(() => setPhase(4), 2800),
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => onComplete(), 800);
      }, 3600),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = (canvas.width = window.innerWidth);
    const h = (canvas.height = window.innerHeight);

    const particles = [];
    const colors = ['#8b5cf6', '#06b6d4', '#3b82f6', '#d946ef', '#ffffff'];

    for (let i = 0; i < 120; i++) {
      const angle = (Math.PI * 2 * i) / 120;
      const speed = 1.5 + Math.random() * 3;
      particles.push({
        x: w / 2,
        y: h / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        decay: 0.008 + Math.random() * 0.012,
        life: 1,
      });
    }

    function drawRing(progress) {
      const cx = w / 2;
      const cy = h / 2;
      const maxR = Math.min(w, h) * 0.35;
      const r = maxR * progress;

      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(cx, cy, Math.max(0, r - i * 20), 0, Math.PI * 2 * Math.min(progress * 1.5, 1));
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.3 - i * 0.1})`;
        ctx.lineWidth = 2 - i * 0.5;
        ctx.stroke();
      }

      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        const offsetAngle = (progress * Math.PI * 4) + (i * Math.PI * 2) / 3;
        const px = cx + Math.cos(offsetAngle) * r * 0.7;
        const py = cy + Math.sin(offsetAngle) * r * 0.7;
        ctx.arc(px, py, 3 + Math.sin(progress * 10) * 2, 0, Math.PI * 2);
        ctx.fillStyle = colors[i % 3];
        ctx.fill();
      }
    }

    let startTime = performance.now();

    function animate(time) {
      const elapsed = (time - startTime) / 1000;
      ctx.clearRect(0, 0, w, h);

      const ringProgress = Math.min(elapsed / 2, 1);
      drawRing(ringProgress);

      if (elapsed > 1.5) {
        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.99;
          p.vy *= 0.99;
          p.life -= p.decay;
          p.alpha = Math.max(0, p.life);

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * p.alpha, 0, Math.PI * 2);
          ctx.fillStyle = p.color.replace(')', `, ${p.alpha})`).replace('rgb', 'rgba').replace('#', '');

          const r = parseInt(p.color.slice(1, 3), 16);
          const g = parseInt(p.color.slice(3, 5), 16);
          const b = parseInt(p.color.slice(5, 7), 16);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.alpha})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * p.alpha * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.alpha * 0.15})`;
          ctx.fill();
        });
      }

      animFrameRef.current = requestAnimationFrame(animate);
    }

    animFrameRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    initCanvas();
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [initCanvas]);

  return createPortal(
    <div className={`splash-screen ${isExiting ? 'splash-exit' : ''}`}>
      <canvas ref={canvasRef} className="splash-canvas" />

      <div className="splash-content">
        {/* Glowing ring */}
        <div className={`splash-ring ${phase >= 1 ? 'active' : ''}`}>
          <div className="ring-orbit ring-orbit-1"></div>
          <div className="ring-orbit ring-orbit-2"></div>
          <div className="ring-orbit ring-orbit-3"></div>
        </div>

        {/* Name reveal */}
        <div className={`splash-name ${phase >= 2 ? 'active' : ''}`}>
          <div className="name-line name-line-1">
            {'JISHNU'.split('').map((char, i) => (
              <span key={i} className="name-char" style={{ animationDelay: `${0.05 * i}s` }}>
                {char}
              </span>
            ))}
          </div>
          <div className="name-line name-line-2">
            {'VARDHAN'.split('').map((char, i) => (
              <span key={i} className="name-char" style={{ animationDelay: `${0.6 + 0.05 * i}s` }}>
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <div className={`splash-tagline ${phase >= 3 ? 'active' : ''}`}>
          <span className="tagline-word">Data Scientist</span>
          <span className="tagline-divider">&</span>
          <span className="tagline-word">DevOps Engineer</span>
        </div>

        {/* Loading bar */}
        <div className={`splash-loader ${phase >= 2 ? 'active' : ''}`}>
          <div className="loader-track">
            <div className="loader-fill" style={{ width: phase >= 4 ? '100%' : phase >= 3 ? '70%' : phase >= 2 ? '35%' : '0%' }}></div>
          </div>
        </div>

        {/* Geometric accents */}
        <div className={`splash-geo splash-geo-1 ${phase >= 1 ? 'active' : ''}`}></div>
        <div className={`splash-geo splash-geo-2 ${phase >= 2 ? 'active' : ''}`}></div>
        <div className={`splash-geo splash-geo-3 ${phase >= 1 ? 'active' : ''}`}></div>
        <div className={`splash-geo splash-geo-4 ${phase >= 3 ? 'active' : ''}`}></div>
      </div>
    </div>,
    document.body
  );
};

export default SplashScreen;
