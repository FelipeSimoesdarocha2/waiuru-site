// Next
import { StaticImageData } from 'next/image';

// React
import { useState } from 'react';

// Styles
import * as S from './LatestNews.styles';

// Hook
import { useNews } from 'modules/screens/home/sections/news/useNews';

// Components
import { CardNews } from 'components/cardNews';
import { Input } from 'components/input';

export interface listProps {
  id: number;
  title: string;
  body?: { [key: string]: string[] } | string[];
  other?: {
    [key: string]: {
      [subKey: string]: string[];
    };
  };
  paragraph: string;
  src: StaticImageData;
  srcFull: StaticImageData;
  alt: string;
  create_at: string;
  slug: string;
  emphasis?: boolean;
}

const LatestNewsSection = () => {
  const { t, list } = useNews();

  const [searchValue, setSearchValue] = useState('');

  let filteredData: listProps[] = [];

  if (list && list.length > 0) {
    filteredData = list.filter(item => t(item.title).toLowerCase().includes(searchValue.toLowerCase()));
  }

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <S.Container id="element_id">
      <div className="header">
        <h2 className="title">{t('news.latestNewsSection.title')}</h2>
        <Input
          id="name"
          key="input-name"
          type="text"
          placeholder={t('news.latestNewsSection.input.name')}
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>

      <div className="list">
        {filteredData.map(item => (
          <CardNews
            id={item.slug}
            key={item.id}
            title={item.title}
            paragraph={item.paragraph}
            src={item.src}
            alt={item.alt}
            create_at={item.create_at}
          />
        ))}
      </div>
    </S.Container>
  );
};

export default LatestNewsSection;
