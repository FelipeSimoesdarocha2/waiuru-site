// Next
import { useRouter } from 'next/router';

// React
import { useState, useEffect, useCallback } from 'react';

// i18n
import useTranslations from 'i18n';

// Constants
import { sub_menus } from './Layout.constants';

export const useLayout = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isMidle, setIsMidle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const router = useRouter();
  const { asPath } = useRouter();

  const t = useTranslations();

  const handleOpenMenu = () => {
    setIsMenu(!isMenu);
  };

  const linkAccess = (url: string) => {
    const externalUrl = url;
    window.location.href = externalUrl;
  };

  const handleResize = useCallback(() => {
    setIsMidle(window.innerWidth < 1101 ?? false);
    setIsMobile(window.innerWidth < 560 ?? false);

    if (isMidle) {
      setIsMenu(false);
    }
  }, [setIsMobile, setIsMidle, isMidle]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return {
    t,
    router,
    isMenu,
    asPath,
    isMidle,
    isMobile,
    sub_menus,
    linkAccess,
    handleOpenMenu,
  };
};
