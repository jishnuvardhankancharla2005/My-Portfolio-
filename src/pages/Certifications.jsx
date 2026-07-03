import React, { useState } from 'react';
import { Award, ExternalLink, X } from 'lucide-react';

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
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
      title: "Introduction to Data Science",
      issuer: "Infosys Springboard",
      link: "",
      image: "/images/introduction to data science (infosys).pdf",
      isModal: true
    }
  ];

  return (
    <div className="certifications-page-container animate-fade-in">
      <header className="certifications-header-main">
        <h1 className="text-gradient">Licenses & Certifications</h1>
        <p className="subtitle">Verified credentials and professional badges showcasing my expertise.</p>
      </header>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="glass-panel cert-card">
            <div 
              className={`cert-image-wrapper ${cert.isModal ? 'clickable' : ''}`}
              onClick={() => cert.isModal && setSelectedImage(cert.image)}
            >
              {cert.image.endsWith('.pdf') ? (
                <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
                  <iframe 
                    src={`${cert.image}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} 
                    title={cert.title}
                    style={{ width: '100%', height: '200%', border: 'none', pointerEvents: 'none', transform: 'scale(1)', transformOrigin: 'top center' }}
                    scrolling="no"
                  />
                  <div style={{ position: 'absolute', inset: 0, zIndex: 10, cursor: 'pointer' }} />
                </div>
              ) : (
                <img src={cert.image} alt={cert.title} className="cert-image" onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200/1e1e2e/8b5cf6?text=Certificate'; }} />
              )}
            </div>
            <div className="cert-content">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              {cert.link ? (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                  <span>Verify Credential</span>
                  <ExternalLink size={14} />
                </a>
              ) : (
                <button 
                  onClick={() => cert.isModal && setSelectedImage(cert.image)} 
                  className="cert-link btn-link"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={14} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>
              <X size={24} />
            </button>
            {selectedImage.endsWith('.pdf') ? (
              <object data={selectedImage} type="application/pdf" className="modal-document">
                <p>Unable to display PDF file. <a href={selectedImage} target="_blank" rel="noopener noreferrer" style={{color: 'white', textDecoration: 'underline'}}>Download instead</a>.</p>
              </object>
            ) : (
              <img src={selectedImage} alt="Certificate view" className="modal-image" />
            )}
          </div>
        </div>
      )}

      <style>{`
        .certifications-page-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
          padding-bottom: 60px;
        }

        .certifications-header-main {
          text-align: center;
          margin-bottom: 20px;
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        .cert-card {
          padding: 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .cert-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .cert-image-wrapper {
          height: 160px;
          background: rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .cert-image-wrapper.clickable {
          cursor: pointer;
        }

        .cert-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .cert-image-wrapper.clickable:hover .cert-image {
          transform: scale(1.05);
        }

        .cert-content {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .cert-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 8px;
          line-height: 1.3;
          color: var(--text-primary);
        }

        .cert-issuer {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }

        .cert-link {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-cyan);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .btn-link {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font-family: inherit;
        }

        .cert-link:hover {
          color: var(--accent-purple);
        }
        
        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          backdrop-filter: blur(8px);
          animation: fadeIn 0.2s ease;
        }
        
        .modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90vh;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .modal-image {
          display: block;
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
        }

        .modal-document {
          width: 80vw;
          height: 85vh;
          max-width: 1000px;
          display: block;
          background: #333;
          border: none;
        }
        
        .cert-pdf-preview {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(139, 92, 246, 0.1);
          color: var(--accent-purple);
          font-weight: 600;
          font-size: 1.1rem;
        }
        
        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
        }
        
        .modal-close:hover {
          background: var(--accent-purple);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Certifications;
