import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, ShieldAlert, Cpu, GitBranch } from 'lucide-react';

const Home = () => {
  return (
    <div className="home-container animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text-side">
          <div className="badge-glow animate-fade-in">
            <span className="badge-glow-dot"></span>
            Ready for New Challenges
          </div>

          <h1 className="hero-title animate-delay-1">
            Hi, I am <span className="text-gradient">Jishnu Vardhan Kancharla</span>
          </h1>

          <p className="hero-tagline text-gradient-accent animate-delay-2">
            Data Scientist & DevOps Engineer | Building Enterprise-Grade AI Solutions
          </p>

          <p className="hero-bio animate-delay-3">
            I am a B.Tech CSE (Data Science) student bridging the gap between intelligent artificial neural networks and highly scalable, secure, and automated deployment architectures.
          </p>

          <div className="hero-actions animate-delay-3">
            <Link to="/projects" className="btn btn-primary">
              <span>Explore My Work</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>

        <div className="hero-image-side animate-delay-1">
          <div className="passport-photo-frame">
            <img src="/images/jishnu_profile.jpg" alt="Jishnu Vardhan Kancharla" className="passport-photo" />
          </div>
        </div>
      </section>

      {/* Focus Areas Grid */}
      <section className="focus-areas-section animate-delay-3">
        <h2 className="section-title">Core Competencies</h2>
        <div className="focus-grid">

          <div className="glass-panel glass-panel-hover focus-card">
            <div className="focus-icon-wrapper purple">
              <Brain size={28} />
            </div>
            <h3>Artificial Intelligence</h3>
            <p>Developing robust Retrieval-Augmented Generation (RAG) models, custom LLM tool integrations, and semantic vector database searches.</p>
          </div>

          <div className="glass-panel glass-panel-hover focus-card">
            <div className="focus-icon-wrapper cyan">
              <GitBranch size={28} />
            </div>
            <h3>DevOps & Automation</h3>
            <p>Containerizing applications via Docker, scripting automated CI/CD deployment pipelines, and managing server instances with AWS.</p>
          </div>

          <div className="glass-panel glass-panel-hover focus-card">
            <div className="focus-icon-wrapper blue">
              <ShieldAlert size={28} />
            </div>
            <h3>AI Security & Cyber</h3>
            <p>Securing REST API routing and orchestrating anomalous traffic classifiers to shield models from vulnerabilities and injections.</p>
          </div>

        </div>
      </section>

      {/* Key Highlights Counter */}
      <section className="highlights-section animate-delay-3">
        <div className="glass-panel highlights-container">
          <div className="stat-box">
            <span className="stat-number text-gradient-accent">7+</span>
            <span className="stat-label">Active Projects</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <span className="stat-number text-gradient-accent">10+</span>
            <span className="stat-label">Core Tech Toolkits</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <span className="stat-number text-gradient-accent">AI/ML</span>
            <span className="stat-label">Model Pipelines</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <span className="stat-number text-gradient-accent">Docker</span>
            <span className="stat-label">Orchestration</span>
          </div>
        </div>
      </section>

      <style>{`
        .home-container {
          display: flex;
          flex-direction: column;
          gap: 90px;
          padding-top: 20px;
        }

        /* Hero Section styles */
        .hero-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1000px;
          margin: 0 auto;
          gap: 40px;
          text-align: left;
        }

        .hero-text-side {
          flex: 1.2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-image-side {
          flex: 0.8;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .passport-photo-frame {
          width: 220px;
          height: 280px; /* Standard 3.5:4.5 passport aspect ratio */
          border-radius: 8px; /* Slightly rounded corners for passport photo style */
          overflow: hidden;
          border: 4px solid rgba(255, 255, 255, 0.05);
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.1),
            0 15px 30px rgba(0, 0, 0, 0.4),
            0 0 20px rgba(139, 92, 246, 0.1);
          position: relative;
          transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1), border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .passport-photo-frame:hover {
          transform: translateY(-5px);
          border-color: var(--accent-purple);
          box-shadow: 
            0 0 0 1px var(--accent-purple),
            0 20px 40px rgba(0, 0, 0, 0.5),
            0 0 30px rgba(139, 92, 246, 0.2);
        }

        .passport-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column-reverse;
            text-align: center;
            align-items: center;
            gap: 30px;
          }
          
          .hero-text-side {
            align-items: center;
          }
        }

        .badge-glow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-purple);
          margin-bottom: 24px;
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.1);
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
          from { opacity: 0.4; }
          to { opacity: 1; }
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
          font-weight: 800;
        }

        .hero-tagline {
          font-size: clamp(1.1rem, 2.5vw, 1.6rem);
          font-weight: 700;
          margin-bottom: 24px;
          line-height: 1.3;
        }

        .hero-bio {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 680px;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Focus Areas Section styles */
        .section-title {
          font-size: 2rem;
          margin-bottom: 40px;
          text-align: center;
          position: relative;
        }

        .section-title::after {
          content: '';
          display: block;
          width: 50px;
          height: 3px;
          background: var(--gradient-cosmic);
          margin: 12px auto 0;
          border-radius: 999px;
        }

        .focus-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .focus-card {
          padding: 36px 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .focus-icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          border: 1px solid transparent;
        }

        .focus-icon-wrapper.purple {
          background: rgba(139, 92, 246, 0.1);
          border-color: rgba(139, 92, 246, 0.2);
          color: var(--accent-purple);
        }

        .focus-icon-wrapper.cyan {
          background: rgba(6, 182, 212, 0.1);
          border-color: rgba(6, 182, 212, 0.2);
          color: var(--accent-cyan);
        }

        .focus-icon-wrapper.blue {
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.2);
          color: var(--accent-blue);
        }

        .focus-card h3 {
          font-size: 1.3rem;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .focus-card p {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Highlights Container Section */
        .highlights-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 40px 24px;
          flex-wrap: wrap;
          gap: 24px;
        }

        .stat-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          min-width: 150px;
        }

        .stat-number {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 6px;
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-align: center;
        }

        .stat-divider {
          width: 1px;
          height: 50px;
          background: rgba(255, 255, 255, 0.08);
        }

        @media (max-width: 768px) {
          .stat-divider {
            display: none;
          }
          .highlights-container {
            grid-template-columns: repeat(2, 1fr);
            display: grid;
            padding: 30px 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
