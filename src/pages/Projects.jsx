import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import projectData from '../data/projects.json';
import { Search, SlidersHorizontal } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filterCategory, setFilterCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Load database items
  useEffect(() => {
    setProjects(projectData);
  }, []);

  // Compute filtered projects based on category and search query
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = filterCategory === 'All' || project.category === filterCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="projects-container animate-fade-in">
      <header className="projects-header">
        <h1 className="text-gradient">Project Portfolio</h1>
        <p className="subtitle">Explore my active developments in Artificial Intelligence, machine learning models, and secure DevOps build workflows.</p>
      </header>

      {/* Search and Filters Bar */}
      <section className="search-filter-section" aria-label="Search and Filter Projects">
        <div className="glass-panel search-box-wrapper">
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
                className={`filter-btn ${filterCategory === category ? 'active' : ''}`}
                onClick={() => setFilterCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid Display */}
      {filteredProjects.length > 0 ? (
        <section className="projects-grid" aria-label="Projects Showcase List">
          {filteredProjects.map((project) => (
            <div key={project.id} className="grid-item">
              <ProjectCard project={project} />
            </div>
          ))}
        </section>
      ) : (
        <div className="glass-panel no-results-card">
          <p>No projects match your current search criteria.</p>
          <button 
            className="btn btn-secondary" 
            onClick={() => { setSearchTerm(''); setFilterCategory('All'); }}
            style={{ marginTop: '16px' }}
          >
            Clear Filters
          </button>
        </div>
      )}

      <style>{`
        .projects-container {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .projects-header {
          text-align: center;
          margin-bottom: 10px;
        }

        /* Search and Filter Panel styles */
        .search-filter-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 20px;
        }

        .search-box-wrapper {
          display: flex;
          align-items: center;
          padding: 4px 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.02);
          border-color: rgba(255, 255, 255, 0.05);
        }

        .search-icon {
          color: var(--text-muted);
          margin-right: 12px;
        }

        .search-input {
          flex-grow: 1;
          background: transparent;
          border: none;
          color: var(--text-primary);
          padding: 12px 0;
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
          gap: 16px;
          flex-wrap: wrap;
        }

        .filter-label-icon {
          color: var(--text-muted);
        }

        .filter-buttons {
          display: flex;
          gap: 8px;
          background: rgba(255, 255, 255, 0.02);
          padding: 4px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .filter-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          padding: 6px 16px;
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

        /* Grid list styling */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 30px;
        }

        .grid-item {
          display: flex;
          flex-direction: column;
        }

        .no-results-card {
          padding: 60px 24px;
          text-align: center;
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
};

export default Projects;
