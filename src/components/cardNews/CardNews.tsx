// Next
import Image from 'next/image';
import router from 'next/router';

// Styles
import * as S from './CardNews.styles';

// Models
import { CardNewsProps } from './models';

// i18n
import useTranslations from 'i18n';

// date-fns
import { differenceInDays } from 'date-fns';

const CardNews = ({ id, title, paragraph, className, src, alt, create_at }: CardNewsProps) => {
  const t = useTranslations();
  const today = new Date();
  const differenceDays = differenceInDays(today, new Date(create_at));
  return (
    <S.Component
      key={id}
      className={className}
      onMouseDown={e => e.preventDefault()}
      onClick={() => router.push(`/news/${id}`)}
    >
      {src && <Image src={src} width={286} alt={alt} draggable="false" />}
      <S.Content>
        <span>
          <p>
            {differenceDays === 0
              ? t('news.list.create_at.today')
              : `${differenceDays} ${t('news.list.create_at.day')}`}
          </p>
        </span>
        <h2>{t(title)}</h2>
        <p className="paragraph">{t(paragraph)}</p>
      </S.Content>
    </S.Component>
  );
};

export default CardNews;
