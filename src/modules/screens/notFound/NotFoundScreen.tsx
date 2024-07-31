// Next
import { useRouter } from 'next/router';

// Styles
import * as S from './404.styles';

import useTranslations from 'i18n';

const NotFoundScreen = () => {
  const router = useRouter();
  const t = useTranslations();

  return (
    <S.Container>
      <S.Content>
        <S.Typography>
          <h1>{t('404.title')}</h1>
          <h2>{t('404.sub_title')}</h2>
          <p>{t('404.paragraph')}</p>
          <strong>{t('404.sub_paragraph')}</strong>
        </S.Typography>
        <S.Button onClick={() => router.push('/')}>
          <p>{t('404.action.label')}</p>
        </S.Button>
      </S.Content>
    </S.Container>
  );
};

export default NotFoundScreen;
