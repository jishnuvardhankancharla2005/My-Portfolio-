import React, { useState } from 'react';
import { Award, ExternalLink, X, Layers, CheckCircle2, ScrollText } from 'lucide-react';
import use3DTilt from '../hooks/use3DTilt';
import ScrollSection from '../components/ScrollSection';
import PageHeader from '../components/PageHeader';

const CertCard = ({ cert, index, onSelectBundle, onSelectImage }) => {
  const { ref, handlers } = use3DTilt({ maxTilt: 10, scale: 1.03 });

  return (
    <div
      ref={ref}
      className={`glass-panel cert-card tilt-card ${cert.isProfessional ? 'professional-card' : ''}`}
      style={{ animationDelay: `${0.1 * index}s` }}
      {...handlers}
    >
      {cert.isProfessional && (
        <div className="professional-badge">
          <Award size={13} className="badge-icon" />
          <span>Professional Program</span>
        </div>
      )}

      <div
        className={`cert-image-wrapper ${cert.isModal || cert.isProfessional ? 'clickable' : ''}`}
        onClick={() => {
          if (cert.isProfessional) {
            onSelectBundle(cert);
          } else if (cert.isModal) {
            onSelectImage(cert.image);
          }
        }}
      >
        {cert.image.endsWith('.pdf') ? (
          <div className="pdf-live-preview-container">
            <iframe
              src={`${cert.image}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              title={cert.title}
              className="pdf-preview-iframe"
              scrolling="no"
            />
            <div className="pdf-preview-overlay">
              {cert.isProfessional ? (
                <div className="pdf-overlay-badge">
                  <span>{cert.subCertificates.length} Course Series</span>
                </div>
              ) : (
                <div className="pdf-overlay-badge pdf-single-badge">
                  <span>Verified PDF</span>
                </div>
              )}
              <span className="pdf-overlay-hint">
                {cert.isProfessional ? 'Explore Series \u2192' : 'View Certificate \u2192'}
              </span>
            </div>
          </div>
        ) : (
          <img src={cert.image} alt={cert.title} className="cert-image" onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200/1e1e2e/8b5cf6?text=Certificate'; }} />
        )}
      </div>
      <div className="cert-content">
        <h3 className="cert-title">{cert.title}</h3>
        <p className="cert-issuer">{cert.issuer}</p>
        {cert.isProfessional && (
          <div className="bundle-count-pill">
            <Layers size={13} />
            <span>{cert.subCertificates.length} Course Certificates Included</span>
          </div>
        )}
        {cert.link ? (
          <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link btn btn-secondary btn-sm magnetic-btn-3d">
            <span>Verify Credential</span>
            <ExternalLink size={14} />
          </a>
        ) : (
          <button
            onClick={() => {
              if (cert.isProfessional) {
                onSelectBundle(cert);
              } else if (cert.isModal) {
                onSelectImage(cert.image);
              }
            }}
            className={`cert-link btn ${cert.isProfessional ? 'btn-primary' : 'btn-secondary'} btn-sm magnetic-btn-3d`}
          >
            <span>{cert.isProfessional ? 'Explore Series' : 'View Certificate'}</span>
            <ExternalLink size={14} />
          </button>
        )}
      </div>
    </div>
  );
};

const CertificationsSections = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBundle, setSelectedBundle] = useState(null);
  const [activeSubCertIndex, setActiveSubCertIndex] = useState(0);

  const certifications = [
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft & LinkedIn",
      image: "/images/Career Essentials in Generative AI by Microsoft and LinkedIn/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.pdf",
      isProfessional: true,
      isModal: true,
      subCertificates: [
        { title: "Career Essentials in Generative AI (Full Program)", image: "/images/Career Essentials in Generative AI by Microsoft and LinkedIn/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.pdf" },
        { title: "What Is Generative AI?", image: "/images/Career Essentials in Generative AI by Microsoft and LinkedIn/CertificateOfCompletion_What Is Generative AI.pdf" },
        { title: "Everyday AI Concepts", image: "/images/Career Essentials in Generative AI by Microsoft and LinkedIn/CertificateOfCompletion_Everyday AI Concepts.pdf" },
        { title: "Ethics in the Age of Generative AI", image: "/images/Career Essentials in Generative AI by Microsoft and LinkedIn/CertificateOfCompletion_Ethics in the Age of Generative AI.pdf" },
        { title: "Learning Microsoft 365 Copilot for Work", image: "/images/Career Essentials in Generative AI by Microsoft and LinkedIn/CertificateOfCompletion_Learning Microsoft 365 Copilot for Work.pdf" },
        { title: "Your Top AI Questions Answered", image: "/images/Career Essentials in Generative AI by Microsoft and LinkedIn/CertificateOfCompletion_Your Top AI Questions Answered AI Literacy for Everyone.pdf" }
      ]
    },
    {
      title: "DevOps Professional Certificate",
      issuer: "PagerDuty & LinkedIn",
      image: "/images/DevOps professional course certificates/CertificateOfCompletion_DevOps Professional Certificate by PagerDuty and LinkedIn.pdf",
      isProfessional: true,
      isModal: true,
      subCertificates: [
        { title: "DevOps Professional Certificate (Full Program)", image: "/images/DevOps professional course certificates/CertificateOfCompletion_DevOps Professional Certificate by PagerDuty and LinkedIn.pdf" },
        { title: "DevOps Foundations", image: "/images/DevOps professional course certificates/CertificateOfCompletion_DevOps Foundations.pdf" },
        { title: "Continuous Delivery & CI", image: "/images/DevOps professional course certificates/CertificateOfCompletion_DevOps Foundations Continuous DeliveryContinuous Integration.pdf" },
        { title: "Infrastructure as Code", image: "/images/DevOps professional course certificates/CertificateOfCompletion_DevOps Foundations Infrastructure as Code.pdf" }
      ]
    },
    {
      title: "AWS Educate Introduction to Generative AI",
      issuer: "AWS Training and Certification",
      link: "https://www.credly.com/badges/13e50406-d1a3-4455-a012-18f69a66d166/linked_in_profile",
      image: "https://images.credly.com/images/e50c657a-edd9-4c93-b1cf-2b6634b54abf/linkedin_thumb_blob"
    },
    {
      title: "Data Analysis Using Python",
      issuer: "IBM",
      link: "https://www.credly.com/badges/5afe3d0d-82ac-469a-bc81-e8d7ed6e2958/linked_in_profile",
      image: "https://images.credly.com/images/f5bb6420-710c-4508-bd1f-df3a9d3fafb0/linkedin_thumb_blob"
    },
    {
      title: "Gemini for DevOps Engineers",
      issuer: "Google Skills",
      link: "https://www.skills.google/public_profiles/6ca9fbb7-7747-4739-ba1e-44b36cf813e7/badges/24694857",
      image: "https://cdn.qwiklabs.com/AOTX3vSfPS5CkyTtLAOcgNxjZgQ94K4v9D712bLexMU%3D"
    },
    {
      title: "Claude Code 101",
      issuer: "Anthropic",
      link: "https://verify.skilljar.com/c/id82p4uvnctq",
      image: "https://cdn.sanity.io/images/4zrzovbb/website/c4bd33e7c8e809a2f9a9a5896ee13961e2a738ec-2400x1260.png"
    },
    {
      title: "Advanced Python: Top Tools for Data Science",
      issuer: "LinkedIn Learning",
      link: "",
      image: "/images/Advanced Python Top Tools for Data Science and Engineering.pdf",
      isModal: true
    },
    {
      title: "Introduction to Data Science",
      issuer: "Infosys Springboard",
      link: "",
      image: "/images/introduction to data science (infosys).pdf",
      isModal: true
    }
  ];

  return (
    <>
      <ScrollSection id="certifications" index={9} className="cert-scroll-section">
      <section className="cert-inner-section">
        <PageHeader
          icon={ScrollText}
          title="Licenses & Certifications"
          subtitle="Verified credentials, professional programs, and technical badges showcasing my expertise."
        />

        <div className="certifications-grid scroll-3d-section stagger-3d">
          {certifications.map((cert, index) => (
            <CertCard
              key={index}
              cert={cert}
              index={index}
              onSelectBundle={(c) => { setSelectedBundle(c); setActiveSubCertIndex(0); }}
              onSelectImage={setSelectedImage}
            />
          ))}
        </div>
      </section>
    </ScrollSection>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content standard-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)} aria-label="Close modal">
              <X size={22} />
            </button>
            {selectedImage.endsWith('.pdf') ? (
              <div className="pdf-modal-wrapper">
                <iframe 
                  src={`${selectedImage}#toolbar=1&navpanes=0`} 
                  title="Certificate PDF"
                  className="modal-document"
                />
              </div>
            ) : (
              <img src={selectedImage} alt="Certificate detail" className="modal-image" />
            )}
          </div>
        </div>
      )}

      {selectedBundle && (
        <div className="modal-overlay" onClick={() => setSelectedBundle(null)}>
          <div className="modal-content bundle-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedBundle(null)} aria-label="Close series modal">
              <X size={22} />
            </button>
            
            <div className="bundle-modal-layout">
              <div className="bundle-modal-sidebar">
                <div className="bundle-sidebar-header">
                  <div className="bundle-header-badge">
                    <Award size={16} />
                    <span>Professional Program</span>
                  </div>
                  <h4>{selectedBundle.title}</h4>
                  <p className="issuer-sub">Issued by {selectedBundle.issuer}</p>
                </div>
                <div className="bundle-sidebar-list">
                  {selectedBundle.subCertificates.map((sub, idx) => (
                    <button
                      key={idx}
                      className={`bundle-sidebar-item ${idx === activeSubCertIndex ? 'active' : ''}`}
                      onClick={() => setActiveSubCertIndex(idx)}
                    >
                      <span className="item-number">{idx + 1}</span>
                      <span className="item-title">{sub.title}</span>
                      {idx === activeSubCertIndex && <CheckCircle2 size={16} className="item-active-check" />}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="bundle-modal-viewer">
                <iframe 
                  key={activeSubCertIndex}
                  src={`${selectedBundle.subCertificates[activeSubCertIndex].image}#toolbar=1&navpanes=0`} 
                  title={selectedBundle.subCertificates[activeSubCertIndex].title}
                  className="modal-document"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .cert-scroll-section {
          min-height: auto;
        }

        .cert-inner-section {
          width: 100%;
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--gap-lg);
        }

        .cert-card {
          padding: 0;
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
          border: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
        }

        .cert-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent-cyan);
          box-shadow: 
            0 15px 35px rgba(6, 182, 212, 0.25),
            inset 0 0 15px rgba(6, 182, 212, 0.08);
        }

        .professional-card {
          border: 1px solid rgba(139, 92, 246, 0.5) !important;
          box-shadow: 
            0 8px 30px rgba(139, 92, 246, 0.2),
            inset 0 0 20px rgba(139, 92, 246, 0.12);
        }

        .professional-card:hover {
          border-color: var(--accent-pink) !important;
          box-shadow: 
            0 15px 45px rgba(217, 70, 239, 0.35),
            0 0 20px rgba(139, 92, 246, 0.3),
            inset 0 0 25px rgba(139, 92, 246, 0.2) !important;
        }

        .professional-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          background: linear-gradient(135deg, var(--accent-purple), var(--accent-pink));
          border-radius: 999px;
          font-size: 0.7rem;
          font-weight: 700;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.5);
          z-index: 10;
        }

        .cert-image-wrapper {
          height: 200px;
          background: #090714;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
        }

        .pdf-live-preview-container {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
          background: #0f0c24;
        }

        .pdf-preview-iframe {
          width: 100%;
          height: 320px;
          border: none;
          pointer-events: none;
          transform: scale(1.05);
          transform-origin: top center;
          filter: contrast(1.05) brightness(0.95);
          transition: transform 0.4s ease, filter 0.4s ease;
        }

        .cert-card:hover .pdf-preview-iframe {
          transform: scale(1.09);
          filter: contrast(1.1) brightness(1.05);
        }

        .pdf-preview-overlay {
          position: absolute;
          inset: 0;
          z-index: 10;
          cursor: pointer;
          background: linear-gradient(180deg, rgba(10, 8, 22, 0.15) 0%, rgba(10, 8, 22, 0.75) 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 14px;
          transition: background 0.3s ease;
        }

        .cert-card:hover .pdf-preview-overlay {
          background: linear-gradient(180deg, rgba(10, 8, 22, 0.05) 0%, rgba(10, 8, 22, 0.5) 100%);
        }

        .pdf-overlay-badge {
          align-self: flex-start;
          font-size: 0.7rem;
          font-weight: 700;
          color: white;
          background: rgba(139, 92, 246, 0.85);
          backdrop-filter: blur(8px);
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        .pdf-single-badge {
          background: rgba(6, 182, 212, 0.85);
        }

        .pdf-overlay-hint {
          align-self: flex-end;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.15);
          border: 1px solid rgba(6, 182, 212, 0.35);
          backdrop-filter: blur(8px);
          padding: 4px 12px;
          border-radius: 999px;
          transition: all 0.25s ease;
        }

        .cert-card:hover .pdf-overlay-hint {
          background: var(--accent-cyan);
          color: #000000;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(6, 182, 212, 0.4);
        }

        .cert-image-wrapper.clickable {
          cursor: pointer;
        }

        .cert-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        
        .cert-image-wrapper.clickable:hover .cert-image {
          transform: scale(1.06);
        }

        .cert-content {
          padding: var(--gap-md);
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .cert-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: var(--gap-xs);
          line-height: 1.35;
          color: var(--text-primary);
        }

        .cert-issuer {
          font-size: 0.92rem;
          color: var(--text-secondary);
          margin-bottom: var(--gap-2xs);
        }

        .bundle-count-pill {
          display: inline-flex;
          align-items: center;
          gap: var(--gap-xs);
          font-size: 0.8rem;
          color: var(--accent-pink);
          font-weight: 600;
          margin-bottom: var(--gap-md);
          padding: 4px 10px;
          background: rgba(217, 70, 239, 0.1);
          border: 1px solid rgba(217, 70, 239, 0.2);
          border-radius: 6px;
          width: fit-content;
        }

        .cert-link {
          margin-top: auto;
          width: 100%;
        }

        .btn-sm {
          padding: 10px 18px;
          font-size: 0.85rem;
          border-radius: 8px;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(3, 2, 11, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          backdrop-filter: blur(12px);
          animation: fadeIn 0.25s ease;
        }
        
        .standard-modal-content {
          position: relative;
          width: 90vw;
          max-width: 1100px;
          height: 85vh;
          background: #0d0b1a;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
        }

        .pdf-modal-wrapper {
          width: 100%;
          height: 100%;
        }

        .bundle-modal-content {
          width: 92vw;
          max-width: 1240px;
          height: 88vh;
          background: #0b0918;
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.85), 0 0 30px rgba(139, 92, 246, 0.2);
          position: relative;
        }

        .bundle-modal-layout {
          display: flex;
          width: 100%;
          height: 100%;
        }

        .bundle-modal-sidebar {
          width: 360px;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(14, 11, 30, 0.95);
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          height: 100%;
        }

        .bundle-sidebar-header {
          padding: var(--gap-lg) var(--gap-md);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(139, 92, 246, 0.05);
        }

        .bundle-header-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--gap-xs);
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--accent-purple);
          margin-bottom: var(--gap-xs);
        }

        .bundle-sidebar-header h4 {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .issuer-sub {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .bundle-sidebar-list {
          flex-grow: 1;
          overflow-y: auto;
          padding: var(--gap-sm);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .bundle-sidebar-item {
          display: flex;
          align-items: center;
          gap: var(--gap-2xs);
          padding: 14px var(--gap-sm);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          text-align: left;
          cursor: pointer;
          transition: all 0.25s ease;
          font-family: inherit;
          width: 100%;
          position: relative;
        }

        .bundle-sidebar-item:hover {
          background: rgba(255, 255, 255, 0.06);
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .bundle-sidebar-item.active {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.15));
          border-color: var(--accent-purple);
          color: #ffffff;
        }

        .item-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          font-size: 0.78rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .bundle-sidebar-item.active .item-number {
          background: var(--accent-purple);
          color: white;
        }

        .item-title {
          font-size: 0.88rem;
          font-weight: 600;
          line-height: 1.35;
          flex-grow: 1;
        }

        .item-active-check {
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .bundle-modal-viewer {
          flex-grow: 1;
          height: 100%;
          background: #05040b;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .modal-document {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        .modal-image {
          max-width: 100%;
          max-height: 85vh;
          object-fit: contain;
          margin: auto;
          display: block;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          z-index: 1000;
        }

        .modal-close:hover {
          background: var(--accent-purple);
          border-color: var(--accent-purple);
          transform: rotate(90deg) scale(1.1);
        }

        .page-header-icon {
          color: var(--accent-purple);
        }

        @media (max-width: 900px) {
          .bundle-modal-content {
            height: 92vh;
            display: flex;
            flex-direction: column;
          }
          
          .bundle-modal-layout {
            flex-direction: column;
          }

          .bundle-modal-sidebar {
            width: 100%;
            height: auto;
            max-height: 240px;
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }

          .bundle-sidebar-header {
            padding: 16px;
          }

          .bundle-sidebar-list {
            flex-direction: row;
            overflow-x: auto;
            overflow-y: hidden;
            padding: 12px;
            white-space: nowrap;
          }

          .bundle-sidebar-item {
            width: 240px;
            flex-shrink: 0;
            white-space: normal;
          }

          .bundle-modal-viewer {
            flex-grow: 1;
            height: calc(100% - 240px);
          }
        }
      `}</style>
    </>
  );
};

export default CertificationsSections;
