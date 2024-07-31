// React
import { useState, useEffect, useCallback } from 'react';

// i18n
import useTranslations from 'i18n';

export const useNewsVizualize = () => {
  const t = useTranslations();

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 1101 ?? false);
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
  };
};
