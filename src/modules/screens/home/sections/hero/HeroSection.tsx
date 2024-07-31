// Next
import Image from 'next/image';
import router from 'next/router';

// Assets
import ilustra from 'assets/images/home/ilustra.svg';

// Styles
import * as S from './Hero.styles';

// Models
import { SectionProps } from 'models';

// i18n
import useTranslations from 'i18n';

// Components
import { Button } from 'components/button';

const HeroSection = ({ mobile }: SectionProps) => {
  const t = useTranslations();

  return (
    <S.Container>
      <S.Content>
        <S.Typography>
          <strong>{t('home.hero.title')}</strong>
          <h2>{t('home.hero.sub_title')}</h2>
          <p>{t('home.hero.text')}</p>
        </S.Typography>
        <Button
          type="primary"
          onClick={() => router.push('/register')}
          label={t(mobile ? 'home.hero.action.label_mobile' : 'home.hero.action.label')}
        />
      </S.Content>
      <Image src={ilustra} className="ilustra" alt="ilustra" priority draggable="false" />
    </S.Container>
  );
};

export default HeroSection;
