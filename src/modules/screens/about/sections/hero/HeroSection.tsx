// Next
import Image from 'next/image';
import { useRouter } from 'next/router';

// Assets
import community from 'assets/icons/community.svg';
import love from 'assets/icons/love.svg';
import technology from 'assets/icons/technology.svg';
import ilustra from 'assets/images/about/whoAreWe/banner.svg';
import bg_hero from 'assets/images/about/whoAreWe/decore.svg';

// Styles
import * as S from './HeroSection.styles';

// Models
import { SectionProps } from 'models';

// i18n
import useTranslations from 'i18n';

const HeroSection = ({ mobile }: SectionProps) => {
  const t = useTranslations();
  const { locale } = useRouter();

  return (
    <S.Container>
      <Image src={bg_hero} className="bg_hero" alt="bg_hero" priority draggable="false" />
      <S.Figure>
        <Image src={ilustra} alt="ilustra" className="ilustra" priority draggable="false" />
        <div className="technology">
          <Image src={technology} alt="technology" draggable="false" />
          <p>{t('about.whoAreWe.technology')}</p>
        </div>
        <div className="community">
          <Image src={community} alt="community" draggable="false" />
          <p>{t('about.whoAreWe.community')}</p>
        </div>
        <div className="love">
          <Image src={love} alt="love" draggable="false" />
          <p>{t('about.whoAreWe.love')}</p>
        </div>
      </S.Figure>
      <S.Content>
        <S.Typography>
          <p>{t('about.whoAreWe.sub_title')}</p>
          <h2>{t('about.whoAreWe.title')}</h2>
        </S.Typography>
        {mobile ? (
          <p>{t('about.whoAreWe.text_mobile')}</p>
        ) : (
          <p style={locale === 'es' ? { gap: '1rem' } : {}}>
            <span>{t('about.whoAreWe.text')}</span>
            <span>{t('about.whoAreWe.text_l2')}</span>
          </p>
        )}
      </S.Content>
    </S.Container>
  );
};

export default HeroSection;
