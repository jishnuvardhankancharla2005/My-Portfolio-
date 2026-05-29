import React from 'react';
import { Layout, Server, BrainCircuit, Settings, ShieldCheck, ChevronRight } from 'lucide-react';

const Skills = () => {
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
    <div className="skills-container animate-fade-in">
      <header className="skills-header">
        <h1 className="text-gradient">My Skillset</h1>
        <p className="subtitle">A visual layout of my technological expertise across the full stack and development operations.</p>
      </header>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <section 
            key={category.title} 
            className="glass-panel skills-category-card"
            style={{ borderLeftColor: category.borderColor }}
            aria-labelledby={`skill-category-${index}`}
          >
            <div className="category-header">
              <div 
                className="category-icon-wrapper" 
                style={{ backgroundColor: category.badgeColor, borderColor: category.borderColor }}
              >
                {category.icon}
              </div>
              <div>
                <h2 id={`skill-category-${index}`} className="category-title">{category.title}</h2>
                <p className="category-desc">{category.description}</p>
              </div>
            </div>

            <div className="category-skills-list">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-meter-row">
                  <div className="skill-meta">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div 
                      className="skill-bar-fill" 
                      style={{ 
                        width: `${skill.level}%`,
                        background: category.title.includes('AI') ? 'var(--gradient-aurora)' : 
                                    category.title.includes('DevOps') ? 'var(--gradient-neon)' : 
                                    category.title.includes('Backend') ? 'var(--gradient-cosmic)' : 
                                    'linear-gradient(135deg, var(--accent-pink) 0%, var(--accent-purple) 100%)'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Recruiter Callout */}
      <section className="glass-panel skills-callout">
        <ShieldCheck size={28} className="callout-icon" />
        <div className="callout-content">
          <h3>Architectural Alignment</h3>
          <p>
            My engineering stack focuses on synergy. I design backend schemas with FastAPI/Flask to secure and pipeline AI model inference results generated by Gemini or LangChain, while packaging the entire structure inside robust Docker microservices.
          </p>
        </div>
      </section>

      <style>{`
        .skills-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
          gap: 30px;
        }

        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        .skills-category-card {
          padding: 30px;
          text-align: left;
          border-left: 4px solid transparent;
        }

        .category-header {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          margin-bottom: 30px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 20px;
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
        }

        .category-icon.text-purple { color: var(--accent-purple); }
        .category-icon.text-cyan { color: var(--accent-cyan); }
        .category-icon.text-blue { color: var(--accent-blue); }
        .category-icon.text-pink { color: var(--accent-pink); }

        .category-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .category-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .category-skills-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .skill-meter-row {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .skill-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
          font-weight: 600;
        }

        .skill-name {
          color: var(--text-primary);
        }

        .skill-percent {
          color: var(--text-secondary);
        }

        .skill-bar-track {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 999px;
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          border-radius: 999px;
          transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Callout Box Styling */
        .skills-callout {
          display: flex;
          gap: 24px;
          padding: 24px;
          align-items: flex-start;
          text-align: left;
        }

        .callout-icon {
          color: var(--accent-cyan);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .callout-content h3 {
          font-size: 1.1rem;
          margin-bottom: 6px;
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
            gap: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;
