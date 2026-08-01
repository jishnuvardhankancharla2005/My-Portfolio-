import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Terminal, FileText } from 'lucide-react';

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 85;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSection(sections[i].label);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (id) => {
    scrollToSection(id);
    closeMenu();
    const section = sections.find(s => s.id === id);
    if (section) setActiveSection(section.label);
  };

  return (
    <header className={`header-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="nav-logo" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); closeMenu(); }}>
          <Terminal className="text-gradient-accent" size={24} />
          <span className="text-gradient font-heading" style={{ fontWeight: 800 }}>Jishnu vardhan</span>
        </Link>

        <ul className={`nav-menu ${isOpen ? 'open' : ''}`} id="main-nav-list">
          <li>
            <button className={`nav-link ${activeSection === 'Home' ? 'active' : ''}`} onClick={() => handleNavClick('hero')}>
              Home
            </button>
          </li>
          <li>
            <button className={`nav-link ${activeSection === 'About' ? 'active' : ''}`} onClick={() => handleNavClick('about')}>
              About
            </button>
          </li>
          <li>
            <button className={`nav-link ${activeSection === 'Skills' ? 'active' : ''}`} onClick={() => handleNavClick('skills')}>
              Skills
            </button>
          </li>
          <li>
            <button className={`nav-link ${activeSection === 'Projects' ? 'active' : ''}`} onClick={() => handleNavClick('projects')}>
              Projects
            </button>
          </li>
          <li>
            <button className={`nav-link ${activeSection === 'Certifications' ? 'active' : ''}`} onClick={() => handleNavClick('certifications')}>
              Certifications
            </button>
          </li>
          <li>
            <button className={`nav-link ${activeSection === 'Contact' ? 'active' : ''}`} onClick={() => handleNavClick('contact')}>
              Contact
            </button>
          </li>
          <li className="nav-resume-li">
            <a
              href="/Jishnu_Vardhan_Kancharla_Resume_1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-resume btn-nav-resume"
              onClick={closeMenu}
              aria-label="Open Resume in new window"
            >
              <FileText size={15} />
              <span>Get Resume</span>
            </a>
          </li>
        </ul>

        <button
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <style>{`
        .header-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 76px;
          z-index: 1000;
          background: rgba(10, 8, 22, 0.4);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .header-nav.scrolled {
          background: rgba(6, 4, 18, 0.85);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.6);
        }

        .navbar-container {
          max-width: 1200px;
          height: 100%;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .nav-menu {
          display: flex !important;
          list-style: none !important;
          gap: 6px !important;
          margin: 0 !important;
          padding: 0 !important;
          position: static !important;
          width: auto !important;
          flex-direction: row !important;
          background: transparent !important;
          backdrop-filter: none !important;
          border: none !important;
          box-shadow: none !important;
          transform: none !important;
          opacity: 1 !important;
          pointer-events: auto !important;
        }

        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.92rem;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid transparent;
          display: inline-block;
          background: none;
          cursor: pointer;
        }

        .nav-link:hover {
          color: #ffffff;
          background: rgba(139, 92, 246, 0.10);
          border-color: rgba(139, 92, 246, 0.15);
          box-shadow: 0 0 12px rgba(139, 92, 246, 0.08);
          transform: translateY(-1px);
        }

        .nav-link.active {
          color: #ffffff;
          background: rgba(139, 92, 246, 0.12);
          border: 1px solid rgba(139, 92, 246, 0.25);
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.1);
        }

        .mobile-toggle {
          display: none !important;
        }

        @media (max-width: 768px) {
          .mobile-toggle {
            display: block !important;
            background: none !important;
            border: none !important;
            color: var(--text-primary) !important;
            cursor: pointer !important;
            padding: 8px !important;
            border-radius: 8px !important;
            transition: background 0.2s ease !important;
            z-index: 1001 !important;
          }

          .mobile-toggle:hover {
            background: rgba(255, 255, 255, 0.05) !important;
          }

          .nav-menu {
            position: absolute !important;
            top: 76px !important;
            left: 0 !important;
            width: 100% !important;
            flex-direction: column !important;
            background: rgba(6, 4, 18, 0.94) !important;
            backdrop-filter: blur(28px) !important;
            -webkit-backdrop-filter: blur(28px) !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6) !important;
            padding: 24px !important;
            gap: 12px !important;
            transform: translateY(-160%) !important;
            opacity: 0 !important;
            pointer-events: none !important;
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease !important;
            z-index: 999 !important;
          }

          .nav-menu.open {
            transform: translateY(0) !important;
            opacity: 1 !important;
            pointer-events: auto !important;
          }

          .nav-link {
            display: block !important;
            width: 100% !important;
            text-align: center !important;
            padding: 12px 16px !important;
            font-size: 1rem !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
