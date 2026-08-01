import React, { useState } from 'react';
import { Layout, Server, BrainCircuit, Settings, ShieldCheck, Code } from 'lucide-react';
import use3DTilt from '../hooks/use3DTilt';
import ScrollSection from '../components/ScrollSection';
import PageHeader from '../components/PageHeader';

const SkillCategoryCard = ({ category, index }) => {
  const { ref, handlers } = use3DTilt({ maxTilt: 8, scale: 1.02 });
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      ref={ref}
      className={`glass-panel skills-category-card tilt-card ${flipped ? 'is-flipped' : ''}`}
      style={{
        borderLeftColor: category.borderColor,
        animationDelay: `${0.15 * index}s`,
      }}
      {...handlers}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="card-3d-inner">
        <div className="card-3d-front">
          <div className="category-header">
            <div
              className="category-icon-wrapper"
              style={{ backgroundColor: category.badgeColor, borderColor: category.borderColor }}
            >
              {category.icon}
            </div>
            <div>
              <h2 className="category-title">{category.title}</h2>
              <p className="category-desc">{category.description}</p>
            </div>
          </div>

          <div className="category-skills-list">
            {category.skills.map((skill) => (
              <div key={skill.name} className="skill-plain-item">
                <span className="skill-plain-dot" style={{
                  background: category.title.includes('AI') ? 'var(--accent-purple)' :
                              category.title.includes('DevOps') ? 'var(--accent-cyan)' :
                              category.title.includes('Backend') ? 'var(--accent-blue)' :
                              'var(--accent-pink)'
                }}></span>
                <span className="skill-plain-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card-3d-back">
          <div className="back-content">
            <div className="back-icon">{category.icon}</div>
            <h3>{category.title}</h3>
            <p className="back-summary">
              {category.skills.length} skills · Average proficiency: {Math.round(category.skills.reduce((a, s) => a + s.level, 0) / category.skills.length)}%
            </p>
            <div className="back-skills-tags">
              {category.skills.map((skill) => (
                <span key={skill.name} className="back-skill-tag">{skill.name}</span>
              ))}
            </div>
            <span className="back-hint">Click to flip back</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillsSections = () => {
  const skillCategories = [
    {
      title: 'Data Science & AI/ML',
      description: 'Building deep learning models, statistical datasets, semantic knowledge assistants, and vector indices.',
      icon: <BrainCircuit className="category-icon text-purple" size={24} />,
      badgeColor: 'rgba(139, 92, 246, 0.1)',
      borderColor: 'rgba(139, 92, 246, 0.2)',
      skills: [
        { name: 'Python (Pandas, NumPy)', level: 92 },
        { name: 'Scikit-Learn & ML Models', level: 88 },
        { name: 'LangChain & Gemini RAG', level: 95 },
        { name: 'PyTorch (Deep Learning)', level: 82 },
        { name: 'Vector DBs (FAISS)', level: 85 }
      ]
    },
    {
      title: 'DevOps & Infrastructure',
      description: 'Orchestrating container pipelines, automated CI/CD workflows, and virtualized cloud networks.',
      icon: <Settings className="category-icon text-cyan" size={24} />,
      badgeColor: 'rgba(6, 182, 212, 0.1)',
      borderColor: 'rgba(6, 182, 212, 0.2)',
      skills: [
        { name: 'Docker & Containers', level: 90 },
        { name: 'GitHub Actions (CI/CD)', level: 88 },
        { name: 'Kubernetes Orchestration', level: 80 },
        { name: 'AWS Cloud Services', level: 75 },
        { name: 'Linux & Shell Scripting', level: 85 }
      ]
    },
    {
      title: 'Backend Engineering',
      description: 'Developing highly efficient, authenticated, and clean routing architectures.',
      icon: <Server className="category-icon text-blue" size={24} />,
      badgeColor: 'rgba(59, 130, 246, 0.1)',
      borderColor: 'rgba(59, 130, 246, 0.2)',
      skills: [
        { name: 'FastAPI', level: 90 },
        { name: 'Flask', level: 85 }
      ]
    },
    {
      title: 'Frontend & UI Design',
      description: 'Crafting responsive user interfaces with modular reactivity and glassmorphic designs.',
      icon: <Layout className="category-icon text-pink" size={24} />,
      badgeColor: 'rgba(217, 70, 239, 0.1)',
      borderColor: 'rgba(217, 70, 239, 0.2)',
      skills: [
        { name: 'React', level: 85 },
        { name: 'Vite', level: 90 },
        { name: 'Tailwind', level: 90 }
      ]
    }
  ];

  return (
    <>
      <ScrollSection id="skills" index={7} className="skills-scroll-section">
      <section className="skills-inner-section">
        <PageHeader
          icon={Code}
          title="My Skillset"
          subtitle="A visual layout of my technological expertise across the full stack and development operations."
        />

        <div className="skills-grid stagger-3d">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={category.title} category={category} index={index} />
          ))}
        </div>

        <div className="glass-panel skills-callout tilt-card" style={{ marginTop: 'var(--gap-lg)' }}>
          <ShieldCheck size={28} className="callout-icon" />
          <div className="callout-content">
            <h3>Architectural Alignment</h3>
            <p>
              My engineering stack focuses on synergy. I design backend schemas with FastAPI/Flask to secure and pipeline AI model inference results generated by Gemini or LangChain, while packaging the entire structure inside robust Docker microservices.
            </p>
          </div>
        </div>
      </section>
    </ScrollSection>

      <style>{`
        .skills-scroll-section {
          min-height: auto;
        }

        .skills-inner-section {
          width: 100%;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--gap-lg);
          margin-bottom: var(--gap-lg);
        }

        .skills-category-card {
          padding: 0;
          text-align: left;
          border-left: 4px solid transparent;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          min-height: 320px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .card-3d-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          transform-style: preserve-3d;
        }

        .skills-category-card.is-flipped .card-3d-inner {
          transform: rotateY(180deg);
        }

        .card-3d-front {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          padding: var(--card-padding);
        }

        .card-3d-back {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: rotateY(180deg);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--card-padding);
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(6, 182, 212, 0.05));
        }

        .back-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--gap-2xs);
        }

        .back-icon {
          font-size: 2rem;
          margin-bottom: var(--gap-xs);
          animation: float3dSlow 4s ease-in-out infinite;
        }

        .back-content h3 {
          font-size: 1.4rem;
          font-weight: 800;
        }

        .back-summary {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .back-skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--gap-xs);
          justify-content: center;
          margin-top: var(--gap-xs);
        }

        .back-skill-tag {
          font-size: 0.72rem;
          font-weight: 600;
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 999px;
          color: var(--text-secondary);
        }

        .back-hint {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: var(--gap-2xs);
          opacity: 0.6;
        }

        .category-header {
          display: flex;
          gap: var(--gap-md);
          align-items: flex-start;
          margin-bottom: var(--gap-lg);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: var(--gap-md);
        }

        .category-icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid transparent;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .tilt-card:hover .category-icon-wrapper {
          transform: translateZ(15px) scale(1.1);
        }

        .category-icon.text-purple { color: var(--accent-purple); }
        .category-icon.text-cyan { color: var(--accent-cyan); }
        .category-icon.text-blue { color: var(--accent-blue); }
        .category-icon.text-pink { color: var(--accent-pink); }

        .category-title {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .category-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .category-skills-list {
          display: flex;
          flex-direction: column;
          gap: var(--gap-2xs);
        }

        .skill-plain-item {
          display: flex;
          align-items: center;
          gap: var(--gap-2xs);
          padding: var(--gap-xs) var(--gap-2xs);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          transition: all 0.25s ease;
        }

        .skill-plain-item:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.08);
          transform: translateX(4px);
        }

        .skill-plain-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
          box-shadow: 0 0 6px currentColor;
        }

        .skill-plain-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .skills-callout {
          display: flex;
          gap: var(--gap-md);
          padding: var(--gap-md);
          align-items: flex-start;
          text-align: left;
          position: relative;
          overflow: hidden;
        }

        .callout-icon {
          color: var(--accent-cyan);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .callout-content h3 {
          font-size: 1.1rem;
          font-weight: 700;
        }

        .callout-content p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 600px) {
          .skills-callout {
            flex-direction: column;
            gap: var(--gap-sm);
          }
        }

        .page-header-icon {
          color: var(--accent-purple);
        }
      `}</style>
    </>
  );
};

export default SkillsSections;
