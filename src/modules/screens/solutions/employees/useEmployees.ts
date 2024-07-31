// Next
import { useRouter } from 'next/router';

// React
import { useState, useEffect, useCallback } from 'react';

// i18n
import useTranslations from 'i18n';

// Constants
import { links, screen, list_benefits, dataEmployees, our_solutions } from './Employees.constants';

export const useEmployees = () => {
  const t = useTranslations();
  const { locale } = useRouter();
  const [isMidle, setIsMidle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedScreen, setSelectedScreen] = useState(1);

  const handleResize = useCallback(() => {
    setIsMidle(window.innerWidth < 1101 || false);
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
    isMidle,
    isMobile,
    our_solutions,
    list_benefits,
    dataEmployees,
    selectedScreen,
    setSelectedScreen,
  };
};
