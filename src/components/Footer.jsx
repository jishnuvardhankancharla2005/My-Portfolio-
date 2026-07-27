import React from 'react';
import { Mail, Heart, FileText } from 'lucide-react';
import { Github, Linkedin, Instagram } from './SocialIcons';

const Footer = ({ onOpenResume }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrap">
      <div className="footer-container">
        <div className="footer-socials">
          <a
            href="https://github.com/jishnuvardhankancharla2005"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/jishnu-vardhan-kancharla-90170032b"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/hey_itz_mr.jishnu"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="Instagram Profile"
          >
            <Instagram size={20} />
          </a>
          <a
            href="mailto:jishnuvardhan558@gmail.com"
            className="footer-social-link"
            aria-label="Send Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="/Jishnu_Vardhan_Kancharla_Resume_1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="View Resume in New Tab"
            title="View & Download Resume in New Tab"
            style={{ background: 'rgba(139, 92, 246, 0.15)', borderColor: 'rgba(139, 92, 246, 0.4)', color: 'var(--accent-purple)', cursor: 'pointer' }}
          >
            <FileText size={20} />
          </a>
        </div>

        <div className="footer-text">
          <p>
            &copy; {currentYear} Jishnu Vardhan Kancharla. Crafted with{' '}
            <Heart
              size={12}
              style={{
                fill: 'var(--accent-pink)',
                color: 'var(--accent-pink)',
                display: 'inline-block',
                verticalAlign: 'middle',
                margin: '0 2px'
              }}
            />{' '}
            using React & Vanilla CSS.
          </p>
          <p style={{ marginTop: '4px', fontSize: '0.75rem', opacity: 0.5 }}>
            AI Engineer | Data Science + DevOps
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
