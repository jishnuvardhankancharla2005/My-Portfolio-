import React from 'react';
import { Smile, ShieldCheck, Terminal, GraduationCap, Server, User, Target, FileText } from 'lucide-react';
import use3DTilt from '../hooks/use3DTilt';
import ScrollSection from '../components/ScrollSection';
import PageHeader from '../components/PageHeader';

const AboutSections = () => {
  const { ref: bioRef, handlers: bioHandlers } = use3DTilt({ maxTilt: 6, scale: 1.01 });
  const { ref: profileRef, handlers: profileHandlers } = use3DTilt({ maxTilt: 10, scale: 1.03 });
  const { ref: goalsRef, handlers: goalsHandlers } = use3DTilt({ maxTilt: 6, scale: 1.01 });
  const { ref: interestsRef, handlers: interestsHandlers } = use3DTilt({ maxTilt: 8, scale: 1.02 });
  const { ref: statsRef, handlers: statsHandlers } = use3DTilt({ maxTilt: 8, scale: 1.02 });

  return (
    <>
      <ScrollSection id="about" index={4} className="about-scroll-section">
      <section className="about-inner-section">
        <PageHeader
          icon={User}
          title="About Me"
          subtitle="Discover my path, engineering values, and what drives my development."
        />

        <div className="about-grid">
          <div className="about-main" aria-labelledby="journey-title">
            <div
              ref={bioRef}
              className="glass-panel main-bio-card tilt-card"
              {...bioHandlers}
            >
              <div className="bio-brand">
                <Terminal size={20} className="bio-brand-icon" />
                <span>About Me</span>
              </div>
              <div className="bio-content">
                <h2 id="journey-title" className="card-subtitle">My Engineering Journey</h2>
                <p>
                  I am a B.Tech CSEDS (Computer Science & Engineering - Data Science) student passionate about Data Science and DevOps. I bridge the gap between intelligent artificial neural networks and highly scalable, secure, and automated deployment architectures.
                </p>
                <p>
                  My approach focuses on building enterprise-ready solutions: codebases that compile cleanly, APIs engineered to handle scaling, and security systems designed to resist automated exploits.
                </p>
                <a
                  href="/Jishnu_Vardhan_Kancharla_Resume_1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-resume"
                  aria-label="Open Resume in new window"
                  style={{ marginTop: '16px', display: 'inline-flex' }}
                >
                  <FileText size={18} />
                  <span>Get Resume</span>
                </a>
              </div>
            </div>

            <div
              ref={goalsRef}
              className="glass-panel goals-card tilt-card"
              {...goalsHandlers}
            >
              <h2 className="card-subtitle">
                <GraduationCap size={22} className="card-subtitle-icon" />
                Academic & Professional Goals
              </h2>
              <div className="goals-timeline stagger-3d">
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
          </div>

          <aside className="about-sidebar">
            <div
              ref={profileRef}
              className="glass-panel glass-plain-image sidebar-card profile-photo-card tilt-card"
              {...profileHandlers}
            >
              <div className="profile-image-wrapper hover-zoom-img">
                <img src="/images/jishnu_profile.jpg" alt="Jishnu Vardhan Kancharla" className="scroll-section-image" />
              </div>
              <h2 className="text-gradient profile-name">Jishnu Vardhan</h2>
              <p className="profile-role">Data Scientist & DevOps Engineer</p>
            </div>

            <div
              ref={interestsRef}
              className="glass-panel sidebar-card personal-interests tilt-card"
              {...interestsHandlers}
            >
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
          </aside>
        </div>

        <div
          ref={statsRef}
          className="glass-panel recruiter-quick-stats tilt-card"
          style={{ marginTop: 'var(--gap-lg)' }}
          {...statsHandlers}
        >
          <h2 className="card-subtitle" style={{ marginBottom: 'var(--gap-md)' }}>
            <Target size={22} className="card-subtitle-icon" />
            Quick Check
          </h2>
          <div className="stats-grid-4">
            <div className="stat-box-item">
              <span className="check-bullet"></span>
              <div className="stat-box-text">
                <span className="stat-label">Course</span>
                <strong className="stat-value">B.Tech CSE (Data Science)</strong>
              </div>
            </div>
            <div className="stat-box-item">
              <span className="check-bullet"></span>
              <div className="stat-box-text">
                <span className="stat-label">Focus</span>
                <strong className="stat-value">AI RAG + DevOps</strong>
              </div>
            </div>
            <div className="stat-box-item">
              <span className="check-bullet"></span>
              <div className="stat-box-text">
                <span className="stat-label">Domain</span>
                <strong className="stat-value">AI & DevOps</strong>
              </div>
            </div>
            <div className="stat-box-item">
              <span className="check-bullet"></span>
              <div className="stat-box-text">
                <span className="stat-label">Availability</span>
                <strong className="stat-value">Recruiter Friendly</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollSection>

      <style>{`
        .about-scroll-section {
          min-height: auto;
        }

        .about-inner-section {
          width: 100%;
        }

        .stats-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--gap-md);
        }

        @media (max-width: 900px) {
          .stats-grid-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 500px) {
          .stats-grid-4 {
            grid-template-columns: 1fr;
          }
        }

        .stat-box-item {
          display: flex;
          align-items: center;
          gap: var(--gap-xs);
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          transition: all 0.25s ease;
        }

        .stat-box-item:hover {
          background: rgba(139, 92, 246, 0.06);
          border-color: rgba(139, 92, 246, 0.2);
          transform: translateY(-2px);
        }

        .stat-box-text {
          display: flex;
          flex-direction: column;
        }

        .stat-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .stat-value {
          font-size: 0.88rem;
          color: var(--text-primary);
          font-weight: 700;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: var(--gap-lg);
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }

        .about-main, .about-sidebar {
          display: flex;
          flex-direction: column;
          gap: var(--gap-lg);
        }

        .main-bio-card {
          padding: 0;
          overflow: hidden;
          position: relative;
        }

        .bio-brand {
          display: flex;
          align-items: center;
          gap: var(--gap-xs);
          background: rgba(255, 255, 255, 0.02);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: var(--gap-2xs) var(--gap-md);
          font-family: var(--font-sans);
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .bio-brand-icon {
          color: var(--accent-purple);
        }

        .bio-content {
          padding: var(--gap-lg) var(--gap-md);
          text-align: left;
        }

        .bio-content p {
          color: var(--text-secondary);
          margin-bottom: var(--gap-sm);
          font-size: 1.02rem;
          line-height: 1.6;
        }

        .bio-content p:last-child {
          margin-bottom: 0;
        }

        .card-subtitle {
          font-size: 1.3rem;
          margin-bottom: var(--gap-md);
          display: flex;
          align-items: center;
          gap: var(--gap-xs);
          font-weight: 700;
        }

        .card-subtitle-icon {
          color: var(--accent-purple);
        }

        .goals-card {
          padding: var(--card-padding);
          text-align: left;
          position: relative;
          overflow: hidden;
        }

        .goals-timeline {
          display: flex;
          flex-direction: column;
          gap: var(--gap-md);
          position: relative;
          padding-left: var(--gap-md);
          margin-top: var(--gap-xs);
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
          gap: var(--gap-md);
          position: relative;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: calc(-1 * var(--gap-md));
          top: 8px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--bg-cosmic);
          border: 2px solid var(--accent-purple);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .timeline-item:hover::before {
          transform: scale(1.4);
          box-shadow: 0 0 10px var(--accent-purple);
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

        .timeline-badge.pink {
          background: rgba(217, 70, 239, 0.15);
          color: var(--accent-pink);
          border: 1px solid rgba(217, 70, 239, 0.3);
        }

        .timeline-info h3 {
          font-size: 1.05rem;
          font-weight: 600;
        }

        .timeline-info p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .sidebar-card {
          padding: var(--card-padding);
          text-align: left;
          position: relative;
          overflow: hidden;
        }

        .interest-item {
          display: flex;
          gap: var(--gap-sm);
          margin-bottom: var(--gap-md);
          transition: transform 0.2s ease;
        }

        .interest-item:hover {
          transform: translateX(4px);
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
          transition: transform 0.3s ease;
        }

        .tilt-card:hover .interest-icon-box {
          transform: translateZ(10px) scale(1.1);
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
          gap: var(--gap-2xs);
        }

        .stats-checklist li {
          display: flex;
          align-items: center;
          gap: var(--gap-2xs);
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: transform 0.2s ease;
        }

        .stats-checklist li:hover {
          transform: translateX(4px);
        }

        .check-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-purple);
          box-shadow: 0 0 6px var(--accent-purple);
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .stats-checklist li:hover .check-bullet {
          transform: scale(1.3);
          box-shadow: 0 0 12px var(--accent-purple);
        }

        .profile-photo-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--gap-md);
          text-align: center;
        }

        .profile-image-wrapper {
          width: 100%;
          max-width: 200px;
          aspect-ratio: 4 / 3;
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(139, 92, 246, 0.18);
          margin-bottom: var(--gap-sm);
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
        }

        .profile-image-wrapper:hover {
          border-color: var(--accent-cyan);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.5), 0 0 35px rgba(6, 182, 212, 0.3);
        }

        .profile-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%;
          transition: transform 0.5s ease;
        }

        .tilt-card:hover .profile-image-wrapper img {
          transform: scale(1.04);
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

        .recruiter-quick-stats {
          padding: var(--gap-lg) var(--gap-md);
          text-align: left;
        }

        .page-header-icon {
          color: var(--accent-purple);
        }
      `}</style>
    </>
  );
};

export default AboutSections;
