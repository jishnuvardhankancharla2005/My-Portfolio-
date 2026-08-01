import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('enter');
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    if (location.pathname !== prevPath.current) {
      setTransitionStage('exit');
      prevPath.current = location.pathname;
    }
  }, [location.pathname]);

  useEffect(() => {
    if (transitionStage === 'exit') {
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setTransitionStage('enter');
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [transitionStage, children]);

  useEffect(() => {
    setDisplayChildren(children);
  }, [children]);

  return (
    <div className={`page-transition-wrapper page-${transitionStage}`}>
      {displayChildren}
    </div>
  );
};

export default PageTransition;
