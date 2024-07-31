// React
import { useRouter } from 'next/router';

// React
import { useCallback, useEffect, useState } from 'react';

// i18n
import useTranslations from 'i18n';

// Constants
import { links, screen, our_solutions, list_benefits, dataAdministrators } from './Administrators.constants';

export const useAdministrators = () => {
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
    locale,
    links,
    screen,
    isMobile,
    our_solutions,
    list_benefits,
    selectedScreen,
    dataAdministrators,
    setSelectedScreen,
  };
};
