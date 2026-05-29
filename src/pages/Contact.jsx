import React, { useState } from 'react';
import { Mail, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { Github, Linkedin, Instagram } from '../components/SocialIcons';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [usedMailto, setUsedMailto] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState('');

  // Real-time validation checks
  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 3) {
      tempErrors.name = 'Name must be at least 3 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email address';
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear validation error when typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const bodyContent = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const fallbackUrl = `mailto:jishnuvardhankancharla2005@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(bodyContent)}`;

      if (!serviceId || !templateId || !publicKey) {
        console.warn('EmailJS environment variables are not defined. Falling back to default mail client.');
        setMailtoUrl(fallbackUrl);
        setUsedMailto(true);
        setIsSubmitting(false);
        setIsSuccess(true);

        // Open the mail client
        window.location.href = fallbackUrl;

        setFormData({
          name: '',
          email: '',
          message: ''
        });
        return;
      }

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log('SUCCESS EmailJS dispatch:', response.status, response.text);
          setIsSubmitting(false);
          setIsSuccess(true);
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        })
        .catch((err) => {
          console.error('FAILED EmailJS dispatch:', err);
          setIsSubmitting(false);
          setMailtoUrl(fallbackUrl);
          setUsedMailto(true);
          setIsSuccess(true);

          window.location.href = fallbackUrl;
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        });
    }
  };

  return (
    <div className="contact-container animate-fade-in">
      <header className="contact-header">
        <h1 className="text-gradient">Get In Touch</h1>
        <p className="subtitle">Let's connect! I am open to technical roles, AI collaborations, Data Science research, or DevOps automation consults.</p>
      </header>

      <div className="contact-grid">
        {/* Left Side: Contact Channels details */}
        <section className="contact-info-panel" aria-labelledby="connect-title">
          <div className="glass-panel contact-details-card">
            <h2 id="connect-title" className="contact-subtitle">Connection Channels</h2>
            <p className="contact-desc">Feel free to reach out via email or connect across social channels. I usually respond within 24 hours.</p>

            <div className="contact-links-list">
              <a href="mailto:jishnuvardhankancharla2005@gmail.com" className="contact-item-link">
                <div className="contact-icon-box mail">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="contact-label">Direct Mail</span>
                  <span className="contact-val">jishnuvardhan558@gmail.com</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/jishnu-vardhan-kancharla-90170032b" target="_blank" rel="noopener noreferrer" className="contact-item-link">
                <div className="contact-icon-box linkedin">
                  <Linkedin size={18} />
                </div>
                <div>
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-val">linkedin.com/in/jishnu-vardhan-kancharla-90170032b</span>
                </div>
              </a>

              <a href="https://github.com/jishnuvardhankancharla2005" target="_blank" rel="noopener noreferrer" className="contact-item-link">
                <div className="contact-icon-box github">
                  <Github size={18} />
                </div>
                <div>
                  <span className="contact-label">GitHub</span>
                  <span className="contact-val">github.com/jishnuvardhankancharla2005</span>
                </div>
              </a>

              <a href="https://www.instagram.com/hey_itz_mr.jishnu" target="_blank" rel="noopener noreferrer" className="contact-item-link">
                <div className="contact-icon-box instagram">
                  <Instagram size={18} />
                </div>
                <div>
                  <span className="contact-label">Instagram</span>
                  <span className="contact-val">@hey_itz_mr.jishnu</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Right Side: Message Submission Form */}
        <section className="contact-form-panel" aria-label="Message Submission Form">
          <div className="glass-panel form-card">
            {isSuccess ? (
              <div className="success-state animate-fade-in">
                <CheckCircle size={56} className="success-icon animate-pulse" />
                <h2>{usedMailto ? 'Ready to Send!' : 'Message Dispatched!'}</h2>
                <p>
                  {usedMailto
                    ? 'Since direct form submission keys are not configured, we prepared the message in your default email client. Please send the email inside your mail client.'
                    : 'Thank you for reaching out. Jishnu has received your message and will be in contact with you shortly.'
                  }
                </p>
                {usedMailto && (
                  <a
                    href={mailtoUrl}
                    className="btn btn-primary"
                    style={{ marginTop: '24px', textDecoration: 'none', display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}
                  >
                    Open Mail Client Again
                  </a>
                )}
                <button
                  className={`btn ${usedMailto ? 'btn-secondary' : 'btn-primary'}`}
                  onClick={() => { setIsSuccess(false); setUsedMailto(false); setMailtoUrl(''); }}
                  style={{ marginTop: usedMailto ? '12px' : '24px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-title-row">
                  <MessageSquare size={20} className="form-title-icon" />
                  <h2>Send a Message</h2>
                </div>

                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className={`form-control ${errors.name ? 'input-error' : ''}`}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    className={`form-control ${errors.email ? 'input-error' : ''}`}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>



                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your role requirements or project proposals..."
                    className={`form-control ${errors.message ? 'input-error' : ''}`}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      <span>Delivering...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </section>
      </div>

      <style>{`
        .contact-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 30px;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Detail card styling */
        .contact-details-card {
          padding: 30px 24px;
          text-align: left;
        }

        .contact-subtitle {
          font-size: 1.3rem;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .contact-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 30px;
          line-height: 1.5;
        }

        .contact-links-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-item-link {
          display: flex;
          align-items: center;
          gap: 16px;
          color: var(--text-primary);
          text-decoration: none;
          padding: 12px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.03);
          transition: all 0.2s ease;
        }

        .contact-item-link:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.08);
          transform: translateX(4px);
        }

        .contact-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid transparent;
        }

        .contact-icon-box.mail {
          background: rgba(248, 113, 113, 0.1);
          border-color: rgba(248, 113, 113, 0.2);
          color: #f87171;
        }

        .contact-icon-box.linkedin {
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.2);
          color: #60a5fa;
        }

        .contact-icon-box.github {
          background: rgba(139, 92, 246, 0.1);
          border-color: rgba(139, 92, 246, 0.2);
          color: #c084fc;
        }

        .contact-icon-box.instagram {
          background: rgba(236, 72, 153, 0.1);
          border-color: rgba(236, 72, 153, 0.2);
          color: #f472b6;
        }

        .contact-label {
          display: block;
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 2px;
        }

        .contact-val {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
          word-break: break-all;
        }

        /* Form card styling */
        .form-card {
          padding: 36px 30px;
          text-align: left;
        }

        .form-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 16px;
        }

        .form-title-icon {
          color: var(--accent-cyan);
        }

        .form-title-row h2 {
          font-size: 1.3rem;
          font-weight: 700;
        }

        .input-error {
          border-color: #f87171 !important;
          box-shadow: 0 0 10px rgba(248, 113, 113, 0.1) !important;
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          border-radius: 10px;
          margin-top: 10px;
        }

        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: #ffffff;
          animation: spin 0.8s linear infinite;
          display: inline-block;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Success screen styling */
        .success-state {
          padding: 40px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .success-icon {
          color: #34d399;
          margin-bottom: 24px;
        }

        .success-state h2 {
          font-size: 1.6rem;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .success-state p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
          max-width: 400px;
        }
      `}</style>
    </div>
  );
};

export default Contact;
