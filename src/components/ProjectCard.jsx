import React from 'react';
import { ExternalLink, Cpu } from 'lucide-react';
import { Github } from './SocialIcons';

const ProjectCard = ({ project }) => {
  // Simple helper to assign unique glow color to category
  const getCategoryColor = (category) => {
    switch (category) {
      case 'AI/ML':
        return 'rgba(139, 92, 246, 0.15)'; // Purple
      case 'DevOps':
        return 'rgba(6, 182, 212, 0.15)';  // Cyan
      default:
        return 'rgba(59, 130, 246, 0.15)';  // Blue
    }
  };

  const getCategoryBorder = (category) => {
    switch (category) {
      case 'AI/ML':
        return 'rgba(139, 92, 246, 0.3)';
      case 'DevOps':
        return 'rgba(6, 182, 212, 0.3)';
      default:
        return 'rgba(59, 130, 246, 0.3)';
    }
  };

  const getCategoryTextColor = (category) => {
    switch (category) {
      case 'AI/ML':
        return '#c084fc';
      case 'DevOps':
        return '#22d3ee';
      default:
        return '#60a5fa';
    }
  };

  return (
    <article className="glass-panel glass-panel-hover project-card">
      <div className="card-image-wrapper">
        <img 
          src={project.image} 
          alt={`${project.title} screenshot`} 
          className="project-card-image"
          loading="lazy"
        />
        <span 
          className="project-category-badge"
          style={{ 
            backgroundColor: getCategoryColor(project.category),
            borderColor: getCategoryBorder(project.category),
            color: getCategoryTextColor(project.category)
          }}
        >
          {project.category}
        </span>
      </div>

      <div className="project-card-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-desc">{project.description}</p>
        
        <div className="project-tech-wrapper">
          {project.tech.map((techItem) => (
            <span key={techItem} className="badge project-tech-badge">
              <Cpu size={10} className="tech-badge-icon" />
              {techItem}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-action-link"
            aria-label={`View code for ${project.title} on GitHub`}
          >
            <Github size={18} />
            <span>Source Code</span>
          </a>
        </div>
      </div>

      <style>{`
        .project-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          height: 100%;
        }

        .card-image-wrapper {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .project-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover .project-card-image {
          transform: scale(1.08);
        }

        .project-category-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border: 1px solid transparent;
          backdrop-filter: blur(8px);
        }

        .project-card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          text-align: left;
        }

        .project-title {
          font-size: 1.25rem;
          margin-bottom: 4px;
          font-weight: 700;
        }

        .project-tagline {
          font-size: 0.85rem;
          color: var(--accent-cyan);
          font-weight: 500;
          margin-bottom: 16px;
        }

        .project-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
          flex-grow: 1;
          line-height: 1.5;
        }

        .project-tech-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 24px;
        }

        .project-tech-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.02);
          border-color: rgba(255, 255, 255, 0.05);
          font-size: 0.72rem;
          color: var(--text-secondary);
        }

        .tech-badge-icon {
          opacity: 0.6;
        }

        .project-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 16px;
          margin-top: auto;
        }

        .project-action-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--text-primary);
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 600;
          transition: all 0.2s ease;
          padding: 6px 12px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
        }

        .project-action-link:hover {
          color: #ffffff;
          background: rgba(139, 92, 246, 0.1);
          border-color: rgba(139, 92, 246, 0.2);
          transform: translateY(-1px);
        }
      `}</style>
    </article>
  );
};

export default ProjectCard;
