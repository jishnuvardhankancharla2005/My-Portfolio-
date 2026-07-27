import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedBg from './components/AnimatedBg';
import ResumeModal from './components/ResumeModal';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

// Scroll to top of window automatically whenever route pathway changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openResume = () => setIsResumeOpen(true);
  const closeResume = () => setIsResumeOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedBg />
      
      <Navbar onOpenResume={openResume} />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home onOpenResume={openResume} />} />
          <Route path="/about" element={<About onOpenResume={openResume} />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Home onOpenResume={openResume} />} />
        </Routes>
      </main>
      
      <Footer onOpenResume={openResume} />

      {/* Interactive Resume Modal Viewer & Downloader */}
      <ResumeModal isOpen={isResumeOpen} onClose={closeResume} />
    </BrowserRouter>
  );
};

export default App;
