// React
import { useState, useEffect, useCallback } from 'react';

// i18n
import useTranslations from 'i18n';

// Constants
import { screen } from './Home.constants';

export const useHome = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMidle, setIsMidle] = useState(false);

  const [selectedScreen, setSelectedScreen] = useState(1);
  const t = useTranslations();

  const handleResize = useCallback(() => {
    setIsMidle(window.innerWidth < 1101 ?? false);
    setIsMobile(window.innerWidth < 560 ?? false);
  }, [setIsMobile, setIsMidle]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return {
    t,
    screen,
    isMidle,
    isMobile,
    selectedScreen,
    setSelectedScreen,
  };
};
