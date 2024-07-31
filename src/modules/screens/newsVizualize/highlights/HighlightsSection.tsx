// Next
import { useRouter } from 'next/router';

// Styles
import * as S from './Highlights.styles';

// Models
import { SectionProps } from 'models';

// Components
import { CardNews } from 'components/cardNews';

// Hook
import { useNews } from '../../home/sections/news/useNews';

const HighlightsSection = ({ mobile }: SectionProps) => {
  const { t, list } = useNews();
  const { asPath } = useRouter();

  return (
    <S.Container>
      <div className="highlights">
        <p className="title">{t('newsVisualize.highlights.title')}</p>
        <div className="list">
          {list
            .filter(item => !asPath.includes('/' + item.slug))
            .map((item, index) => (
              <div key={index}>
                {index < 2 && (
                  <CardNews
                    id={item.slug}
                    key={item.id}
                    title={item.title}
                    paragraph={item.paragraph}
                    alt={item.alt}
                    src={mobile ? item.src : undefined}
                    create_at={item.create_at}
                  />
                )}
              </div>
            ))}
        </div>
      </div>
    </S.Container>
  );
};

export default HighlightsSection;
