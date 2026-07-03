import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scrolling to dynamically adjust navbar glass styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`header-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <Terminal className="text-gradient-accent" size={24} />
          <span className="text-gradient font-heading" style={{ fontWeight: 800 }}>Jishnu vardhan</span>
        </Link>

        {/* Single navigation menu */}
        <ul className={`nav-menu ${isOpen ? 'open' : ''}`} id="main-nav-list">
          <li>
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/certifications" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Certifications
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile menu toggle button */}
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
        /* Premium Frosted Glass Header Nav */
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

        /* 2. Desktop Mode (Default / fallback) */
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
        }

        .nav-link:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.02);
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

        /* 3. Mobile Mode (<= 768px Viewports) */
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
