// React
import { useState, useCallback, useEffect } from 'react';

// i18n
import useTranslations from 'i18n';

// Contants
import { our_solutions } from './Registert.constants';

export const useRegister = () => {
  const t = useTranslations();
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 560 || false);
  }, [setIsMobile]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return {
    t,
    isMobile,
    our_solutions,
  };
};
