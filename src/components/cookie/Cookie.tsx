// Next
import Image from 'next/image';
import Link from 'next/link';

// React
import { useState, useEffect } from 'react';

// Assets
import cookie_img from 'assets/icons/cookie.svg';
import crumbs from 'assets/icons/crumbs.svg';

// Styles
import * as S from './Cookie.styles';

// i18n
import useTranslations from 'i18n';

// Universal-cookie
import Cookie from 'universal-cookie';

const ICookie = () => {
  const [showCookie, setShowCookie] = useState(false);

  const t = useTranslations();

  const accept = () => {
    const cookies = new Cookie();
    cookies.set('cookies', 'true');
    setShowCookie(false);
  };

  useEffect(() => {
    const cookies = new Cookie();
    const userCookie = cookies.get('cookies');

    if (!userCookie) {
      setShowCookie(true);
    }
  }, []);

  return (
    showCookie && (
      <S.Container>
        <Image src={cookie_img} className="cookie" alt="cookie" draggable="false" />
        <S.Typography>
          <Image src={crumbs} alt="cookie" draggable="false" />
          <Link href={'/privacy-policy'} draggable="false">
            {t('cookie.paragraph')}
          </Link>
        </S.Typography>
        <button onClick={accept}>
          <p>{t('cookie.action.label')}</p>
        </button>
      </S.Container>
    )
  );
};

export default ICookie;
