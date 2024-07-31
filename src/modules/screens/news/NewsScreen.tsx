// Next
import Image from 'next/image';

// Assets
import type2 from 'assets/details/type2.svg';
import type3 from 'assets/details/type3.svg';
import bg_hero from 'assets/images/news/decore4.svg';

// Styles
import * as S from './News.styles';

// Components
import { AppsInStoresSection } from 'components/appsInStores';
import { LatestNewsSection } from 'components/latestNews';
import { NewsLetterForm } from 'components/newsletterForm';

// Sections
import { HeroSection } from './sections/hero';
import { HighlightsSection } from './sections/highlights';

// Hook
import { useNews } from './useNews';

const NewsScreen = () => {
  const { onScrollToNews } = useNews();

  return (
    <S.Container>
      <div className="container_bg">
        <Image src={bg_hero} alt="bg_hero" draggable="false" />
      </div>
      <div className="container_bg2">
        <Image src={type2} alt="detail" draggable="false" />
      </div>
      <div className="container_bg3">
        <Image src={type3} alt="detail" className="detail" draggable="false" />
      </div>
      <HeroSection onGoToNews={onScrollToNews} />
      <HighlightsSection />
      <LatestNewsSection />
      <NewsLetterForm detail={true} />
      <AppsInStoresSection />
    </S.Container>
  );
};

export default NewsScreen;
