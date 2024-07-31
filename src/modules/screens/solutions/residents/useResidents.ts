// Next
import router, { useRouter } from 'next/router';

// React
import { useState, useCallback, useEffect } from 'react';

// i18n
import useTranslations from 'i18n';

// Constants
import { links, screen, our_solutions, list_benefits, dataResidents } from './Residents.constants';

export const useResidents = () => {
  const t = useTranslations();
  const { locale } = useRouter();
  const [selectedScreen, setSelectedScreen] = useState(1);
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
    links,
    locale,
    screen,
    router,
    isMobile,
    dataResidents,
    our_solutions,
    list_benefits,
    selectedScreen,
    setSelectedScreen,
  };
};
