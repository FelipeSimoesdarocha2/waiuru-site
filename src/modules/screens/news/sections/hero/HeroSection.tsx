// Next
import Image from 'next/image';

// Assets
import ilustra from 'assets/images/news/ilustra.svg';

// Styles
import * as S from './Hero.styles';

// Models
import { SectionProps } from 'models';

// i18n
import useTranslations from 'i18n';

// Components
import { Button } from 'components/button';

type HeroSectionProps = SectionProps & {
  onGoToNews: () => void;
};

const HeroSection = ({ onGoToNews }: HeroSectionProps) => {
  const t = useTranslations();

  return (
    <S.Container>
      <Image src={ilustra} alt="ilustra" className="ilustra" priority draggable="false" />
      <S.Content>
        <S.Typography>
          <h2>{t('news.hero.title')}</h2>
          <p>{t('news.hero.sub_title')}</p>
        </S.Typography>
        <div className="inner">
          <Button label={t('news.hero.action.label')} type="primary" onClick={onGoToNews} />
        </div>
      </S.Content>
    </S.Container>
  );
};

export default HeroSection;
