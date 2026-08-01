import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'focus', label: 'Competencies' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

const ScrollNavDots = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="scroll-nav-dots" aria-label="Section navigation">
      {sections.map((section) => (
        <button
          key={section.id}
          className={`scroll-dot ${activeSection === section.id ? 'active' : ''}`}
          onClick={() => scrollTo(section.id)}
          aria-label={section.label}
          title={section.label}
        >
          <span className="dot-inner" />
          <span className="dot-label">{section.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default ScrollNavDots;
