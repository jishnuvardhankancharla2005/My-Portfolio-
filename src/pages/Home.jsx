import { useRef, useEffect, useState } from 'react';
import { ArrowRight, Brain, ShieldAlert, FileText, GitBranch, ChevronDown, Sparkles, Zap, Code2 } from 'lucide-react';
import use3DTilt from '../hooks/use3DTilt';
import ScrollSection from '../components/ScrollSection';
import AnimatedCounter from '../components/AnimatedCounter';
import ScrollNavDots from '../components/ScrollNavDots';
import AboutSections from '../sections/AboutSections';
import SkillsSections from '../sections/SkillsSections';
import ProjectsSections from '../sections/ProjectsSections';
import ContactSections from '../sections/ContactSections';
import CertificationsSections from '../sections/CertificationsSections';

const FocusCard = ({ icon: Icon, color, title, description, index }) => {
  const { ref, handlers } = use3DTilt({ maxTilt: 12, scale: 1.04 });

  return (
    <div
      ref={ref}
      className="glass-panel glass-panel-hover focus-card tilt-card"
      style={{ animationDelay: `${0.15 * index}s` }}
      {...handlers}
    >
      <div className={`focus-icon-wrapper ${color}`}>
        <Icon size={28} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const taglineRef = useRef(null);
  const typingTimerRef = useRef(null);
  const pauseTimerRef = useRef(null);
  const TAGLINE = "Data Scientist & DevOps Engineer";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible || !taglineRef.current) return;
    let index = 0;
    const textEl = taglineRef.current.querySelector('.typing-text');
    if (!textEl) return;

    function type() {
      if (index <= TAGLINE.length) {
        textEl.textContent = TAGLINE.slice(0, index);
        index++;
        typingTimerRef.current = setTimeout(type, 35);
      } else {
        textEl.textContent = TAGLINE;
        pauseTimerRef.current = setTimeout(() => {
          index = 0;
          type();
        }, 2000);
      }
    }
    type();

    return () => {
      clearTimeout(typingTimerRef.current);
      clearTimeout(pauseTimerRef.current);
    };
  }, [isVisible]);

  const focusAreas = [
    {
      icon: Brain,
      color: 'purple',
      title: 'Artificial Intelligence',
      description: 'Developing robust Retrieval-Augmented Generation (RAG) models, custom LLM tool integrations, and semantic vector database searches.',
    },
    {
      icon: GitBranch,
      color: 'cyan',
      title: 'DevOps & Automation',
      description: 'Containerizing applications via Docker, scripting automated CI/CD deployment pipelines, and managing server instances with AWS.',
    },
    {
      icon: ShieldAlert,
      color: 'blue',
      title: 'AI Security & Cyber',
      description: 'Securing REST API routing and orchestrating anomalous traffic classifiers to shield models from vulnerabilities and injections.',
    },
  ];

  return (
    <div className={`home-container ${isVisible ? 'is-visible' : ''}`}>
      <ScrollNavDots />

      {/* ===== SECTION 1: HERO ===== */}
      <ScrollSection id="hero" index={0} className="hero-scroll-section">
          <section className="hero-section">
            <div className="hero-ambient-shape hero-shape-1" />
            <div className="hero-ambient-shape hero-shape-2" />
            <div className="hero-ambient-shape hero-shape-3" />
          <div className="hero-inner">
            <div className="hero-text-side">
              <div className="badge-glow animate-fade-in">
                <span className="badge-glow-dot"></span>
                Ready for New Challenges
              </div>

              <h1 className="hero-title text-3d animate-fade-in animate-delay-1">
                Hi, I am <span className="text-gradient">Jishnu Vardhan Kancharla</span>
              </h1>

              <p className="hero-tagline text-gradient-accent animate-fade-in animate-delay-2" ref={taglineRef}>
                <span className="typing-text" />
                <span className="typing-cursor" />
              </p>

              <p className="hero-bio animate-fade-in animate-delay-3">
                I am a B.Tech CSE (Data Science) student bridging the gap between intelligent artificial neural networks and highly scalable, secure, and automated deployment architectures.
              </p>

              <div className="hero-actions animate-fade-in animate-delay-3">
                <a href="#projects" className="btn btn-primary">
                  <span>Explore My Work</span>
                  <ArrowRight size={18} />
                </a>
                <a
                  href="/Jishnu_Vardhan_Kancharla_Resume_1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-resume"
                >
                  <FileText size={18} />
                  <span>Get Resume</span>
                </a>
                <a href="#contact" className="btn btn-secondary">
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>

            <div className="hero-image-side animate-fade-in animate-delay-1">
              <div className="hero-portrait-frame-3d">
                <div className="hero-portrait-frame">
                  <img src="/images/jishnu_profile.jpg" alt="Jishnu Vardhan Kancharla" className="hero-portrait-image" />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator">
            <span className="scroll-indicator-text">Scroll to explore</span>
            <ChevronDown size={20} className="scroll-indicator-icon" />
          </div>
        </section>
      </ScrollSection>

      {/* ===== SECTION 2: COMPETENCIES ===== */}
      <ScrollSection id="focus" index={1} className="focus-scroll-section">
        <section className="focus-areas-section">
          <div className="section-header-animated">
            <Sparkles size={20} className="section-header-icon" />
            <h2 className="section-title text-3d">Core Competencies</h2>
          </div>
          <div className="focus-areas-content">
            <div className="focus-grid stagger-3d">
              {focusAreas.map((area, index) => (
                <FocusCard key={area.title} {...area} index={index} />
              ))}
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ===== SECTION 3: ABOUT PREVIEW ===== */}
      <ScrollSection id="about-preview" index={2} className="about-preview-scroll-section">
        <section className="about-preview-section">
          <div className="section-header-animated">
            <Code2 size={20} className="section-header-icon" />
            <h2 className="section-title text-3d">About Myself</h2>
          </div>
          <div className="about-preview-content">
            <div className="about-preview-grid">
              <div className="about-preview-left">
                <p className="about-preview-text">
                  I am a B.Tech CSEDS student passionate about Data Science and DevOps.
                  I bridge the gap between intelligent artificial neural networks and highly scalable,
                  secure, and automated deployment architectures.
                </p>
                <p className="about-preview-text">
                  My approach focuses on building enterprise-ready solutions: codebases that compile cleanly,
                  APIs engineered to handle scaling, and security systems designed to resist automated exploits.
                </p>
                <a href="#about" className="btn btn-primary">
                  <span>Learn More About Me</span>
                  <ArrowRight size={18} />
                </a>
              </div>
              <div className="about-preview-right">
                <div className="tech-stack-visual">
                <div className="tech-orbit">
                  <div className="orbit-ring orbit-ring-1">
                    <span className="orbit-node orbit-node-1" title="Python">🐍</span>
                    <span className="orbit-node orbit-node-2" title="Docker">🐳</span>
                  </div>
                  <div className="orbit-ring orbit-ring-2">
                    <span className="orbit-node orbit-node-3" title="React">⚛️</span>
                    <span className="orbit-node orbit-node-4" title="AWS">☁️</span>
                    <span className="orbit-node orbit-node-5" title="Linux">🐧</span>
                  </div>
                  <div className="orbit-center">
                    <Zap size={32} className="orbit-center-icon" />
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ===== SECTION 4: STATS ===== */}
      <ScrollSection id="stats" index={3} className="stats-scroll-section">
        <section className="stats-section">
          <div className="section-header-animated">
            <Zap size={20} className="section-header-icon" />
            <h2 className="section-title text-3d">By The Numbers</h2>
          </div>
          <div className="stats-content">
            <div className="glass-panel highlights-container tilt-card">
              <AnimatedCounter target={7} suffix="+" label="Active Projects" duration={1500} />
              <div className="stat-divider"></div>
              <AnimatedCounter target={10} suffix="+" label="Core Tech Toolkits" duration={1800} />
              <div className="stat-divider"></div>
              <AnimatedCounter target={5} suffix="" label="AI Certifications" duration={1200} />
              <div className="stat-divider"></div>
              <AnimatedCounter target={3} suffix="" label="DevOps Programs" duration={1000} />
            </div>
            <div className="cta-bottom">
              <p className="cta-text">Ready to see what I can build?</p>
              <div className="cta-actions">
                <a href="#projects" className="btn btn-primary">
                  <span>View All Projects</span>
                  <ArrowRight size={18} />
                </a>
                <a href="#contact" className="btn btn-secondary">
                  <span>Let's Connect</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollSection>

        <AboutSections />
      <SkillsSections />
      <ProjectsSections />
      <CertificationsSections />
      <ContactSections />

      <style>{`
        .home-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .home-container.is-visible .hero-text-side {
          animation: slideIn3dLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .home-container.is-visible .hero-image-side {
          animation: slideIn3dRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* ===== SCROLL SECTION SYSTEM ===== */
        .scroll-section {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .scroll-section-inner {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-divider-line {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 80px;
          background: linear-gradient(to bottom, rgba(139, 92, 246, 0.3), transparent);
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .scroll-section-visible .section-divider-line {
          opacity: 1;
        }

        /* Scroll-triggered section animations */
        .scroll-section .focus-areas-content,
        .scroll-section .about-preview-content,
        .scroll-section .stats-content {
          opacity: 0;
          transform: perspective(800px) rotateX(8deg) translateY(60px);
          transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .scroll-section-visible .focus-areas-content,
        .scroll-section-visible .about-preview-content,
        .scroll-section-visible .stats-content {
          opacity: 1;
          transform: perspective(800px) rotateX(0deg) translateY(0);
        }

        /* ===== HERO SECTION ===== */
        .hero-scroll-section {
          min-height: calc(100vh - 90px);
          padding: 40px 0 var(--section-padding);
        }

        .hero-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: var(--gap-xl);
          text-align: left;
          position: relative;
        }

        .hero-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: var(--gap-xl);
          position: relative;
          z-index: 1;
        }

        .hero-text-side {
          flex: 1.2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          opacity: 0;
        }

        .hero-image-side {
          flex: 0.9;
          display: flex;
          justify-content: center;
          align-items: center;
          transform-style: preserve-3d;
          opacity: 0;
        }

        .hero-portrait-frame-3d {
          transform-style: preserve-3d;
          transition: transform 0.15s ease-out;
        }

        /* ===== AMBIENT FLOATING SHAPES ===== */
        .hero-ambient-shape {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          opacity: 0.15;
          transition: transform 0.2s ease-out;
        }

        .hero-shape-1 {
          width: 300px;
          height: 300px;
          top: -10%;
          right: -5%;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.25), transparent 70%);
          animation: shapeFloat1 8s ease-in-out infinite;
        }

        .hero-shape-2 {
          width: 200px;
          height: 200px;
          bottom: 5%;
          left: -3%;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.2), transparent 70%);
          animation: shapeFloat2 10s ease-in-out infinite;
        }

        .hero-shape-3 {
          width: 150px;
          height: 150px;
          top: 30%;
          left: 40%;
          background: radial-gradient(circle, rgba(217, 70, 239, 0.15), transparent 70%);
          animation: shapeFloat3 12s ease-in-out infinite;
        }

        @keyframes shapeFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(15px, -20px) scale(1.05); }
          66% { transform: translate(-10px, 15px) scale(0.95); }
        }

        @keyframes shapeFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-15px, -10px) scale(1.08); }
          66% { transform: translate(20px, 15px) scale(0.92); }
        }

        @keyframes shapeFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(10px, 20px) scale(1.03); }
          66% { transform: translate(-15px, -10px) scale(0.97); }
        }

        .hero-portrait-frame {
          width: clamp(260px, 24vw, 340px);
          aspect-ratio: 3 / 4;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(139, 92, 246, 0.15);
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease;
        }

        .hero-portrait-frame:hover {
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6), 0 0 50px rgba(6, 182, 212, 0.25);
        }

        .hero-portrait-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%;
          transition: transform 0.5s ease;
        }

        .hero-portrait-frame:hover .hero-portrait-image {
          transform: scale(1.04);
        }



        /* Scroll indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          opacity: 0.5;
          animation: floatBounce 2s ease-in-out infinite;
        }

        .scroll-indicator-text {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-muted);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .scroll-indicator-icon {
          color: var(--accent-purple);
        }

        @keyframes floatBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }

        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column-reverse;
            text-align: center;
            align-items: center;
            gap: var(--gap-lg);
          }
          .hero-inner {
            flex-direction: column-reverse;
            text-align: center;
            align-items: center;
            gap: var(--gap-lg);
          }
          .hero-text-side { align-items: center; }
          .scroll-section { padding: var(--gap-xl) 0; min-height: auto; }
        }

        .badge-glow {
          display: inline-flex;
          align-items: center;
          gap: var(--gap-xs);
          padding: 6px 14px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-purple);
          margin-bottom: var(--gap-md);
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.1);
          animation: borderGlow3d 6s ease-in-out infinite;
        }

        .badge-glow-dot {
          width: 6px;
          height: 6px;
          background-color: var(--accent-purple);
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 8px var(--accent-purple);
          animation: pulseDot 1.5s infinite alternate;
        }

        @keyframes pulseDot {
          from { opacity: 0.4; } to { opacity: 1; }
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: var(--gap-sm);
          font-weight: 800;
        }

        .hero-title .text-gradient {
          display: block;
          font-size: clamp(2.8rem, 7vw, 4.8rem);
          margin-top: 4px;
        }

        .hero-tagline {
          font-size: clamp(1.1rem, 2.5vw, 1.6rem);
          font-weight: 700;
          margin-bottom: var(--gap-md);
          line-height: 1.3;
          min-height: 2.2em;
        }

        .typing-cursor {
          display: inline-block;
          width: 2px;
          height: 1.1em;
          background: var(--accent-cyan);
          margin-left: 2px;
          vertical-align: text-bottom;
          animation: blinkCursor 0.8s step-end infinite;
        }

        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-bio {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 680px;
          margin-bottom: var(--gap-xl);
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: var(--gap-sm);
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
          position: relative;
          z-index: 10;
          pointer-events: auto;
        }

        .hero-actions .btn {
          height: 48px;
          box-sizing: border-box;
        }

        @media (max-width: 768px) {
          .hero-actions {
            justify-content: center;
            width: 100%;
          }
        }

        /* ===== SECTION HEADERS ===== */
        .section-header-animated {
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: center;
        }

        .section-header-icon {
          color: var(--accent-purple);
          animation: float3dSlow 3s ease-in-out infinite;
        }

        .section-title {
          font-size: 2rem;
          text-align: center;
          position: relative;
        }

        .section-title::after {
          content: '';
          display: block;
          width: 50px;
          height: 3px;
          background: var(--gradient-cosmic);
          margin-top: var(--gap-2xs);
          margin-left: auto;
          margin-right: auto;
          border-radius: 999px;
        }

        /* ===== FOCUS GRID ===== */
        .focus-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--gap-lg);
        }

        .focus-card {
          padding: var(--card-padding);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .focus-icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--gap-md);
          border: 1px solid transparent;
          transition: transform 0.3s ease;
        }

        .tilt-card:hover .focus-icon-wrapper {
          transform: translateZ(20px) scale(1.1);
        }

        .focus-icon-wrapper.purple { background: rgba(139, 92, 246, 0.1); border-color: rgba(139, 92, 246, 0.2); color: var(--accent-purple); }
        .focus-icon-wrapper.cyan { background: rgba(6, 182, 212, 0.1); border-color: rgba(6, 182, 212, 0.2); color: var(--accent-cyan); }
        .focus-icon-wrapper.blue { background: rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.2); color: var(--accent-blue); }

        .focus-card h3 { font-size: 1.3rem; margin-bottom: var(--gap-2xs); font-weight: 700; }
        .focus-card p { font-size: 0.92rem; color: var(--text-secondary); line-height: 1.5; }

        /* ===== ABOUT PREVIEW ===== */
        .about-preview-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: var(--gap-2xl);
          align-items: center;
        }

        .about-preview-text {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: var(--gap-sm);
        }

        /* Tech orbit visual */
        .tech-stack-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--gap-md);
        }

        .tech-orbit {
          position: relative;
          width: 300px;
          height: 300px;
        }

        .orbit-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid rgba(139, 92, 246, 0.15);
          animation: orbitSpin 20s linear infinite;
        }

        .orbit-ring-2 {
          inset: 30px;
          border-color: rgba(6, 182, 212, 0.12);
          animation-duration: 30s;
          animation-direction: reverse;
        }

        .orbit-node {
          position: absolute;
          font-size: 1.5rem;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(10, 8, 22, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          backdrop-filter: blur(8px);
        }

        .orbit-node-1 { top: -22px; left: 50%; transform: translateX(-50%); }
        .orbit-node-2 { bottom: -22px; left: 50%; transform: translateX(-50%); }
        .orbit-node-3 { top: 20%; left: -22px; }
        .orbit-node-4 { top: 50%; right: -22px; transform: translateY(-50%); }
        .orbit-node-5 { bottom: 20%; left: -22px; }

        .orbit-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-purple), var(--accent-cyan));
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 40px rgba(139, 92, 246, 0.4);
          animation: pulseGlow3d 3s ease-in-out infinite;
        }

        .orbit-center-icon { color: #ffffff; }

        @media (max-width: 768px) {
          .about-preview-grid {
            grid-template-columns: 1fr;
            gap: var(--gap-xl);
          }
          .tech-orbit { width: 220px; height: 220px; }
        }

        /* ===== STATS SECTION ===== */
        .stats-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--gap-xl);
        }

        .highlights-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: var(--gap-xl) var(--gap-lg);
          flex-wrap: wrap;
          gap: var(--gap-lg);
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 900px;
        }

        .stat-divider {
          width: 1px;
          height: 60px;
          background: rgba(255, 255, 255, 0.08);
        }

        /* Animated counter styles */
        .animated-counter {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          min-width: 140px;
          z-index: 2;
        }

        .counter-value {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: var(--gap-xs);
        }

        .counter-label {
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-align: center;
        }

        @media (max-width: 768px) {
          .stat-divider { display: none; }
          .highlights-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            padding: var(--gap-lg) var(--gap-sm);
          }
        }

        /* ===== CTA BOTTOM ===== */
        .cta-bottom {
          text-align: center;
        }

        .cta-text {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: var(--gap-md);
          font-weight: 500;
        }

        .cta-actions {
          display: flex;
          gap: var(--gap-sm);
          justify-content: center;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
};

export default Home;
