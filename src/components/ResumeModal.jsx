import React from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const resumeUrl = "/Jishnu_Vardhan_Kancharla_Resume_1.pdf";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content resume-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="resume-modal-header">
          <div className="resume-header-title">
            <div className="resume-icon-badge">
              <FileText size={20} />
            </div>
            <div>
              <h3>Jishnu Vardhan Kancharla - Resume</h3>
              <p className="resume-subtitle">B.Tech CSE (Data Science) | AI & DevOps Engineer</p>
            </div>
          </div>

          <div className="resume-header-actions">
            <a 
              href={resumeUrl} 
              download="Jishnu_Vardhan_Kancharla_Resume.pdf"
              className="btn btn-primary btn-sm resume-action-btn"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </a>
            <a 
              href={resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm resume-action-btn"
            >
              <ExternalLink size={16} />
              <span>Open in New Tab</span>
            </a>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close Resume Viewer">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Main Viewer */}
        <div className="resume-modal-body">
          <iframe 
            src={`${resumeUrl}#toolbar=1&navpanes=0`} 
            title="Jishnu Vardhan Kancharla Resume PDF Viewer"
            className="resume-pdf-iframe"
          />
        </div>

        {/* Modal Footer Banner */}
        <div className="resume-modal-footer">
          <div className="resume-footer-info">
            <CheckCircle2 size={16} className="text-cyan" />
            <span>Recruiter friendly resume • Updated for Data Science & DevOps roles</span>
          </div>
          <a 
            href={resumeUrl} 
            download="Jishnu_Vardhan_Kancharla_Resume.pdf"
            className="btn btn-resume btn-sm"
          >
            <Download size={15} />
            <span>Download Copy</span>
          </a>
        </div>
      </div>

      <style>{`
        .resume-modal-content {
          width: 92vw;
          max-width: 1100px;
          height: 88vh;
          background: #0b0917;
          border: 1px solid rgba(139, 92, 246, 0.35);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.85), 0 0 30px rgba(139, 92, 246, 0.2);
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .resume-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          background: rgba(14, 11, 30, 0.95);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          gap: 16px;
        }

        .resume-header-title {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .resume-icon-badge {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2));
          border: 1px solid rgba(139, 92, 246, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-purple);
          flex-shrink: 0;
        }

        .resume-header-title h3 {
          font-size: 1.15rem;
          font-weight: 800;
          margin-bottom: 2px;
          color: var(--text-primary);
        }

        .resume-subtitle {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .resume-header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .resume-action-btn {
          padding: 8px 16px !important;
          font-size: 0.85rem !important;
        }

        .modal-close-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-left: 6px;
        }

        .modal-close-btn:hover {
          background: var(--accent-purple);
          border-color: var(--accent-purple);
          transform: rotate(90deg);
        }

        .resume-modal-body {
          flex-grow: 1;
          width: 100%;
          height: 100%;
          background: #05040b;
        }

        .resume-pdf-iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        .resume-modal-footer {
          padding: 12px 24px;
          background: rgba(14, 11, 30, 0.95);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .resume-footer-info {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .text-cyan {
          color: var(--accent-cyan);
        }

        @media (max-width: 768px) {
          .resume-modal-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .resume-header-actions {
            width: 100%;
            justify-content: flex-start;
            flex-wrap: wrap;
          }

          .modal-close-btn {
            position: absolute;
            top: 12px;
            right: 12px;
          }

          .resume-modal-footer {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumeModal;
