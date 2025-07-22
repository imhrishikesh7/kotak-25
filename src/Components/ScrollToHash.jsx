import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const hash = location.hash;
    let attempts = 0;

    const scrollToTarget = () => {
      const target = document.querySelector(hash);
      if (target) {
        const yOffset = -80; // Adjust based on fixed header height
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
      } else if (attempts < 20) {
        attempts++;
        setTimeout(scrollToTarget, 100); // Try again in 100ms
      }
    };

    scrollToTarget();
  }, [location]);

  return null;
};

export default ScrollToHash;
