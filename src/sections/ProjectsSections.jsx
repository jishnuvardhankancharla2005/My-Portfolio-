import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import projectData from '../data/projects.json';
import { Search, SlidersHorizontal, FolderGit2 } from 'lucide-react';
import ScrollSection from '../components/ScrollSection';
import PageHeader from '../components/PageHeader';

const ProjectsSections = () => {
  const [projects, setProjects] = useState([]);
  const [filterCategory, setFilterCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setProjects(projectData);
  }, []);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = filterCategory === 'All' || project.category === filterCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <ScrollSection id="projects" index={8} className="projects-scroll-section">
      <section className="projects-inner-section">
        <PageHeader
          icon={FolderGit2}
          title="Projects"
          subtitle="Explore my active developments in Artificial Intelligence, machine learning models, and secure DevOps build workflows."
        />

        <section className="search-filter-section" aria-label="Search and Filter Projects">
          <div className="glass-panel search-box-wrapper tilt-card">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search projects by title, description or tech..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search Projects Input"
            />
          </div>

          <div className="filter-tabs-wrapper">
            <SlidersHorizontal size={16} className="filter-label-icon" />
            <div className="filter-buttons">
              {['All', 'AI/ML', 'DevOps', 'Cybersecurity'].map((category) => (
                <button
                  key={category}
                  className={`filter-btn magnetic-btn-3d ${filterCategory === category ? 'active' : ''}`}
                  onClick={() => setFilterCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {filteredProjects.length > 0 ? (
          <section className="projects-grid stagger-3d" aria-label="Projects Showcase List" style={{ marginTop: 'var(--gap-lg)' }}>
            {filteredProjects.map((project) => (
              <div key={project.id} className="grid-item">
                <ProjectCard project={project} />
              </div>
            ))}
          </section>
        ) : (
          <div className="glass-panel no-results-card" style={{ marginTop: 'var(--gap-lg)' }}>
            <p>No projects match your current search criteria.</p>
            <button
              className="btn btn-secondary magnetic-btn-3d"
              onClick={() => { setSearchTerm(''); setFilterCategory('All'); }}
              style={{ marginTop: 16 }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </ScrollSection>

      <style>{`
        .projects-scroll-section {
          min-height: auto;
        }

        .projects-inner-section {
          width: 100%;
        }

        .search-filter-section {
          display: flex;
          flex-direction: column;
          gap: var(--gap-md);
        }

        .search-box-wrapper {
          display: flex;
          align-items: center;
          padding: 4px var(--gap-sm);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.02);
          border-color: rgba(255, 255, 255, 0.05);
          position: relative;
          overflow: hidden;
        }

        .search-icon {
          color: var(--text-muted);
          margin-right: var(--gap-2xs);
        }

        .search-input {
          flex-grow: 1;
          background: transparent;
          border: none;
          color: var(--text-primary);
          padding: var(--gap-2xs) 0;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          outline: none;
        }

        .search-input::placeholder {
          color: var(--text-muted);
        }

        .filter-tabs-wrapper {
          display: flex;
          align-items: center;
          gap: var(--gap-sm);
          flex-wrap: wrap;
        }

        .filter-label-icon {
          color: var(--text-muted);
        }

        .filter-buttons {
          display: flex;
          gap: var(--gap-xs);
          background: rgba(255, 255, 255, 0.02);
          padding: 4px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .filter-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          padding: 6px var(--gap-sm);
          border-radius: 6px;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.03);
        }

        .filter-btn.active {
          color: #ffffff;
          background: var(--accent-purple);
          box-shadow: 0 2px 10px rgba(139, 92, 246, 0.3);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--gap-lg);
        }

        .grid-item {
          display: flex;
          flex-direction: column;
        }

        .no-results-card {
          padding: var(--gap-xl) var(--gap-md);
          text-align: center;
          color: var(--text-secondary);
        }

        .page-header-icon {
          color: var(--accent-purple);
        }
      `}</style>
    </>
  );
};

export default ProjectsSections;
