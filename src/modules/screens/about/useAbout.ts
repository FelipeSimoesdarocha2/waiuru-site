// React
import { useState, useEffect, useCallback } from 'react';

// Contants
import { our_solutions } from './About.constants';

export const useAbout = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 560 ?? false);
  }, [setIsMobile]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return {
    isMobile,
    our_solutions,
  };
};
