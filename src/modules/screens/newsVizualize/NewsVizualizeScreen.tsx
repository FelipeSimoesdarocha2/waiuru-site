// Next
import { StaticImageData } from 'next/image';

// Styles
import * as S from './News.styles';

// Componets
import { AppsInStoresSection } from 'components/appsInStores';
import { LatestNewsSection } from 'components/latestNews';
import { NewsLetterForm } from 'components/newsletterForm';

import { listProps } from '../home/sections/news/News.constants';
import { ContentContainer } from './sections/content';
import HeaderContainer from './sections/hero/HeaderContainerSection';

import { useNewsVizualize } from './useNewsVizualize';

export interface NewsVizualizeScreenProps {
  news?: listProps;
}

const NewsVizualizeScreen = ({ news }: NewsVizualizeScreenProps) => {
  const { isMobile } = useNewsVizualize();

  return (
    <S.Container>
      <HeaderContainer imageSrc={news?.srcFull as StaticImageData} alt={news?.title || ''} />
      <S.Spacer />
      <ContentContainer
        mobile={isMobile}
        title={news?.title}
        body={news?.body}
        other={news?.other}
        create_at={news?.create_at}
      />
      <S.Spacer />
      <LatestNewsSection />
      <NewsLetterForm detail={true} />
      <AppsInStoresSection />
    </S.Container>
  );
};

export default NewsVizualizeScreen;
