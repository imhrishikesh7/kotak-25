import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const hash = location.hash;
    let attempts = 0;
    const maxAttempts = 50; // Increased attempts
    
    const scrollToTarget = () => {
      const target = document.querySelector(hash);
      if (target) {
        // Wait a bit more to ensure images are rendered
        setTimeout(() => {
          const yOffset = -80;
          const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(scrollToTarget, 200); // Increased interval
      }
    };

    // Add a small delay before starting
    setTimeout(scrollToTarget, 300);
    
    // Also listen for window load event
    const handleWindowLoad = () => {
      setTimeout(scrollToTarget, 100);
    };
    
    window.addEventListener('load', handleWindowLoad);
    
    return () => {
      window.removeEventListener('load', handleWindowLoad);
    };
  }, [location]);

  return null;
};

export default ScrollToHash;