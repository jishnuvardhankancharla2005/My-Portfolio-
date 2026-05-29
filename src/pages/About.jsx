import React from 'react';
import { Award, BookOpen, Smile, ShieldCheck, Terminal, GraduationCap, Server } from 'lucide-react';

const About = () => {
  return (
    <div className="about-container animate-fade-in">
      <header className="about-header">
        <h1 className="text-gradient">About Me</h1>
        <p className="subtitle">Discover my path, engineering values, and what drives my development.</p>
      </header>

      <div className="about-grid">
        {/* Left Side: Biography and Professional Journey */}
        <section className="about-main" aria-labelledby="journey-title">
          <div className="glass-panel main-bio-card">
            <div className="bio-brand">
              <Terminal size={20} className="bio-brand-icon" />
              <span>About Me</span>
            </div>
            <div className="bio-content">
              <h2 id="journey-title" className="card-subtitle">My Engineering Journey</h2>
              <p>
                I am a B.Tech CSEDS (Computer Science & Engineering - Data Science) student passionate about Data Science, and DevOps. I bridge the gap between intelligent artificial neural networks and highly scalable, secure, and automated deployment architectures.
              </p>
              <p>
                My approach focuses on building enterprise-ready solutions: codebases that compile cleanly, APIs engineered to handle scaling, and security systems designed to resist automated exploits.
              </p>
            </div>
          </div>

          <div className="glass-panel goals-card">
            <h2 className="card-subtitle">
              <GraduationCap size={22} className="card-subtitle-icon" />
              Academic & Professional Goals
            </h2>
            <div className="goals-timeline">
              <div className="timeline-item">
                <div className="timeline-badge purple">AI/ML</div>
                <div className="timeline-info">
                  <h3>Data Science & AI/ML</h3>
                  <p>Mastering advanced statistical models, deep learning architectures, and modern predictive analysis using Python ecosystems.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-badge cyan">DevOps</div>
                <div className="timeline-info">
                  <h3>DevOps + Data Science Synergy</h3>
                  <p>Mastering automated CI/CD deployment pipelines, containerization workflows, and scalable backend infrastructure for machine learning services.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-badge pink">Projects</div>
                <div className="timeline-info">
                  <h3>Building Enterprise AI Projects</h3>
                  <p>Developing Retrieval-Augmented Generation (RAG) assistant systems, predictive analytics, and secure microservices.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Side: Fun Personal Factors */}
        <aside className="about-sidebar">
          {/* Branded Profile Photo Card */}
          <div className="glass-panel sidebar-card profile-photo-card">
            <div className="profile-image-wrapper">
              <img src="/images/jishnu_profile.jpg" alt="Jishnu Vardhan Kancharla" />
            </div>
            <h2 className="text-gradient profile-name">Jishnu Vardhan</h2>
            <p className="profile-role">Data Scientist & DevOps Engineer</p>
          </div>

          <div className="glass-panel sidebar-card personal-interests">
            <h2 className="card-subtitle">
              <Smile size={22} className="card-subtitle-icon text-gradient-accent" />
              Beyond the Code
            </h2>

            <div className="interest-item">
              <div className="interest-icon-box">
                <Terminal size={20} />
              </div>
              <div className="interest-body">
                <h3>Web Development</h3>
                <p>Building clean, responsive, and glassmorphic user interfaces using React, Vite, and modern CSS.</p>
              </div>
            </div>

            <div className="interest-item">
              <div className="interest-icon-box">
                <Server size={20} />
              </div>
              <div className="interest-body">
                <h3>Backend APIs</h3>
                <p>Designing efficient and type-safe REST APIs using FastAPI and Flask to serve models and store data.</p>
              </div>
            </div>

            <div className="interest-item">
              <div className="interest-icon-box">
                <ShieldCheck size={20} />
              </div>
              <div className="interest-body">
                <h3>AI Security Tools</h3>
                <p>Securing neural network pipelines, filtering adversarial prompts, and configuring robust access controls.</p>
              </div>
            </div>

            <div className="interest-item">
              <div className="interest-icon-box">
                <Smile size={20} />
              </div>
              <div className="interest-body">
                <h3>Telugu Humor</h3>
                <p>Resetting and refreshing focus after intense debugging marathons with classic comedy clips and memes.</p>
              </div>
            </div>
          </div>

          {/* Recruiter quick summary card */}
          <div className="glass-panel sidebar-card recruiter-quick-stats">
            <h2 className="card-subtitle">Quick Check</h2>
            <ul className="stats-checklist">
              <li>
                <span className="check-bullet"></span>
                <strong>Course:</strong> B.Tech CSE (Data Science)
              </li>
              <li>
                <span className="check-bullet"></span>
                <strong>Focus:</strong> AI RAG + DevOps
              </li>
              <li>
                <span className="check-bullet"></span>
                <strong>Domain:</strong> AI & DevOps
              </li>
              <li>
                <span className="check-bullet"></span>
                <strong>Availability:</strong> Recruiter Friendly
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <style>{`
        .about-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .about-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 30px;
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }

        .about-main, .about-sidebar {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        /* Card stylings */
        .main-bio-card {
          padding: 0;
          overflow: hidden;
        }

        .bio-brand {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.02);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 12px 24px;
          font-family: var(--font-sans);
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .bio-brand-icon {
          color: var(--accent-purple);
        }

        .bio-content {
          padding: 30px 24px;
          text-align: left;
        }

        .bio-content p {
          color: var(--text-secondary);
          margin-bottom: 16px;
          font-size: 1.02rem;
          line-height: 1.6;
        }

        .bio-content p:last-child {
          margin-bottom: 0;
        }

        .card-subtitle {
          font-size: 1.3rem;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
        }

        .card-subtitle-icon {
          color: var(--accent-purple);
        }

        /* Goals timeline stylings */
        .goals-card {
          padding: 30px 24px;
          text-align: left;
        }

        .goals-timeline {
          display: flex;
          flex-direction: column;
          gap: 24px;
          position: relative;
          padding-left: 20px;
          margin-top: 10px;
        }

        .goals-timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 2px;
          height: calc(100% - 16px);
          background: rgba(255, 255, 255, 0.06);
        }

        .timeline-item {
          display: flex;
          gap: 20px;
          position: relative;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: -24px;
          top: 8px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--bg-cosmic);
          border: 2px solid var(--accent-purple);
        }

        .timeline-badge {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 4px;
          height: fit-content;
          text-transform: uppercase;
        }

        .timeline-badge.purple {
          background: rgba(139, 92, 246, 0.15);
          color: var(--accent-purple);
          border: 1px solid rgba(139, 92, 246, 0.3);
        }

        .timeline-badge.cyan {
          background: rgba(6, 182, 212, 0.15);
          color: var(--accent-cyan);
          border: 1px solid rgba(6, 182, 212, 0.3);
        }

        .timeline-info h3 {
          font-size: 1.05rem;
          margin-bottom: 4px;
          font-weight: 600;
        }

        .timeline-info p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        /* Sidebar items styling */
        .sidebar-card {
          padding: 30px 24px;
          text-align: left;
        }

        .interest-item {
          display: flex;
          gap: 16px;
          margin-bottom: 20px;
        }

        .interest-item:last-child {
          margin-bottom: 0;
        }

        .interest-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .interest-body h3 {
          font-size: 1rem;
          margin-bottom: 4px;
          font-weight: 600;
        }

        .interest-body p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .stats-checklist {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .stats-checklist li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .check-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-purple);
          box-shadow: 0 0 6px var(--accent-purple);
          display: inline-block;
        }

        /* Profile card design */
        .profile-photo-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px;
          text-align: center;
        }

        .profile-image-wrapper {
          width: 180px;
          height: 240px;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 32px rgba(139, 92, 246, 0.15);
          margin-bottom: 16px;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .profile-image-wrapper:hover {
          transform: scale(1.02);
          border-color: var(--accent-purple);
        }

        .profile-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .profile-name {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 4px;
        }

        .profile-role {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      `}</style>
    </div>
  );
};

export default About;
