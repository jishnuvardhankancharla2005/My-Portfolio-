import { Link } from 'react-router-dom';
import { Home, ArrowRight, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="not-found-container animate-fade-in">
      <div className="not-found-visual">
        <div className="not-found-code">
          <span className="nf-digit" style={{ animationDelay: '0s' }}>4</span>
          <div className="nf-orb">
            <AlertTriangle size={36} className="nf-orb-icon" />
          </div>
          <span className="nf-digit" style={{ animationDelay: '0.15s' }}>4</span>
        </div>
        <div className="not-found-glow" />
      </div>

      <h1 className="not-found-title text-gradient text-3d">Page Not Found</h1>
      <p className="not-found-desc">
        The page you are looking for does not exist, has been moved, or is temporarily unavailable.
      </p>

      <div className="not-found-actions">
        <Link to="/" className="btn btn-primary magnetic-btn-3d">
          <Home size={18} />
          <span>Return Home</span>
        </Link>
        <Link to="/" className="btn btn-secondary magnetic-btn-3d">
          <span>Back to Home</span>
        </Link>
      </div>

      <style>{`
        .not-found-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 70vh;
          text-align: center;
          gap: 24px;
          perspective: 1000px;
        }

        .not-found-visual {
          position: relative;
          margin-bottom: 16px;
        }

        .not-found-code {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .nf-digit {
          font-family: var(--font-heading);
          font-size: clamp(5rem, 14vw, 10rem);
          font-weight: 800;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: nfDigitFloat 3s ease-in-out infinite;
          text-shadow: none;
        }

        .nf-orb {
          width: clamp(80px, 12vw, 120px);
          height: clamp(80px, 12vw, 120px);
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-purple), var(--accent-pink));
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 50px rgba(139, 92, 246, 0.4), 0 0 100px rgba(217, 70, 239, 0.2);
          animation: nfOrbPulse 2.5s ease-in-out infinite;
          position: relative;
        }

        .nf-orb-icon {
          color: #ffffff;
          animation: nfIconSpin 4s ease-in-out infinite;
        }

        .not-found-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
          pointer-events: none;
          animation: glowPulse 3s ease-in-out infinite;
        }

        .not-found-title {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 800;
        }

        .not-found-desc {
          color: var(--text-secondary);
          font-size: 1.05rem;
          max-width: 480px;
          line-height: 1.6;
        }

        .not-found-actions {
          display: flex;
          gap: 16px;
          margin-top: 8px;
          flex-wrap: wrap;
          justify-content: center;
        }

        @keyframes nfDigitFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes nfOrbPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 50px rgba(139, 92, 246, 0.4), 0 0 100px rgba(217, 70, 239, 0.2);
          }
          50% {
            transform: scale(1.08);
            box-shadow: 0 0 70px rgba(139, 92, 246, 0.6), 0 0 140px rgba(217, 70, 239, 0.3);
          }
        }

        @keyframes nfIconSpin {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(10deg) scale(1.1); }
          75% { transform: rotate(-10deg) scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
