import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
import BackToTop from './components/BackToTop';
import AnimatedBg from './components/AnimatedBg';
import ResumeModal from './components/ResumeModal';
import SplashScreen from './components/SplashScreen';
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Certifications from './pages/Certifications';
import NotFound from './pages/NotFound';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <PageTransition key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
};

const App = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [appReady, setAppReady] = useState(false);

  const openResume = () => setIsResumeOpen(true);
  const closeResume = () => setIsResumeOpen(false);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
    setTimeout(() => setAppReady(true), 100);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showSplash ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showSplash]);

  useEffect(() => {
    if (appReady) window.scrollTo(0, 0);
  }, [appReady]);

  return (
    <BrowserRouter>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <CustomCursor />
      <AnimatedBg />

      <ScrollProgressBar />
      <Navbar />

      <div className={`app-content ${appReady ? 'app-ready' : ''}`}>
        <ScrollToTop />

        <main className="main-content">
          <AnimatedRoutes />
        </main>

        <Footer />
        <ResumeModal isOpen={isResumeOpen} onClose={closeResume} />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
};

export default App;
