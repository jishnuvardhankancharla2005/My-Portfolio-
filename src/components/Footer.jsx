import { Mail, Heart, FileText, Terminal } from 'lucide-react';
import { Github, Linkedin, Instagram } from './SocialIcons';

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 85;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="footer-wrap">
      <div className="footer-inner">
        {/* Top section: brand + tagline */}
        <div className="footer-top">
          <div className="footer-brand-col">
            <button className="footer-brand-link" onClick={() => scrollToSection('hero')}>
              <Terminal size={20} className="footer-brand-icon" />
              <span className="footer-brand-name text-gradient">Jishnu Vardhan</span>
            </button>
            <p className="footer-tagline">
              Data Scientist & DevOps Engineer building enterprise-grade AI architectures with secure, scalable deployment pipelines.
            </p>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <div className="footer-nav-list">
              {navLinks.map((link) => (
                <button key={link.id} className="footer-nav-link" onClick={() => scrollToSection(link.id)}>
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="footer-connect-col">
            <h4 className="footer-col-title">Connect</h4>
            <div className="footer-socials-grid">
              <a
                href="https://github.com/jishnuvardhankancharla2005"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/jishnu-vardhan-kancharla-90170032b"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com/hey_itz_mr.jishnu"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram Profile"
              >
                <Instagram size={16} />
              </a>
              <a
                href="mailto:jishnuvardhan558@gmail.com"
                className="footer-social-link"
                aria-label="Send Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="/Jishnu_Vardhan_Kancharla_Resume_1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link footer-resume-link"
                aria-label="Open Resume in new window"
                title="View & Download Resume"
              >
                <FileText size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Jishnu Vardhan Kancharla. Crafted{' '}
            <Heart
              size={11}
              style={{
                fill: 'var(--accent-pink)',
                color: 'var(--accent-pink)',
                display: 'inline-block',
                verticalAlign: 'middle',
                margin: '0 2px',
              }}
            />{' '}
            using React & Vanilla CSS.
          </p>
          <p className="footer-subline">AI Engineer | Data Science + DevOps</p>
        </div>
      </div>

      <style>{`
        .footer-wrap {
          width: 100%;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          margin-top: auto;
          position: relative;
          z-index: 2;
          background: rgba(3, 2, 11, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 24px 16px;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.3fr 1.2fr 1fr;
          gap: 24px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        .footer-brand-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          color: inherit;
          font-family: inherit;
          padding: 0;
          margin-bottom: 8px;
        }

        .footer-brand-name {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 800;
        }

        .footer-tagline {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.4;
          max-width: 240px;
        }

        .footer-col-title {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-secondary);
          margin-bottom: 10px;
        }

        .footer-nav-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 16px;
        }

        .footer-nav-link {
          font-size: 0.82rem;
          color: var(--text-muted);
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          padding: 4px 0;
          transition: color 0.2s ease;
          font-weight: 500;
        }

        .footer-nav-link:hover {
          color: var(--text-primary);
        }

        .footer-socials-grid {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .footer-social-link {
          color: var(--text-secondary);
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .footer-social-link:hover {
          color: #ffffff;
          background: var(--accent-purple);
          border-color: var(--accent-purple);
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(139, 92, 246, 0.4);
        }

        .footer-resume-link {
          background: rgba(139, 92, 246, 0.1);
          border-color: rgba(139, 92, 246, 0.25);
          color: var(--accent-purple);
        }

        .footer-resume-link:hover {
          background: linear-gradient(135deg, var(--accent-purple), var(--accent-pink));
          border-color: transparent;
          color: #ffffff;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 12px;
          flex-wrap: wrap;
          gap: 6px;
        }

        .footer-copyright {
          font-size: 0.74rem;
          color: var(--text-muted);
        }

        .footer-subline {
          font-size: 0.66rem;
          color: var(--text-muted);
          opacity: 0.6;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        @media (max-width: 600px) {
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
