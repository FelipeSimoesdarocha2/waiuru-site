// Next
import Image from 'next/image';

// Assets
import type1 from 'assets/details/type1.svg';

// Styles
import * as S from './Highlights.styles';

// Components
import { CardNews } from 'components/cardNews';

// Hook
import { useNews } from '../../../home/sections/news/useNews';

const HighlightsSection = () => {
  const { t, list: data } = useNews();

  const filteredData = data.filter(item => item.emphasis === true);

  return (
    <S.Container>
      <div className="container_bg">
        <Image src={type1} alt="detail" className="detail" draggable="false" />
      </div>
      <S.Content>
        <h2 className="title">
          {t('news.highlights.title')}
          <strong> {t('news.highlights.title_bold')}</strong>
        </h2>
        <div className="carrousel_inner">
          {filteredData.map((item, index) => (
            <CardNews
              id={item.slug}
              key={index}
              src={item.src}
              alt={item.alt}
              title={item.title}
              create_at={item.create_at}
              paragraph={item.paragraph}
            />
          ))}
        </div>
      </S.Content>
    </S.Container>
  );
};

export default HighlightsSection;
