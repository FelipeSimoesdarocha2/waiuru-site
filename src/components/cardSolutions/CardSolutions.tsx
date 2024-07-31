// Next
import Image from 'next/image';
import router from 'next/router';

// React
import { useState } from 'react';

// Assets
import close from 'assets/icons/close.svg';
import open from 'assets/icons/open.svg';

// Styles
import * as S from './CardSolutions.styles';

// Models
import { CardSolutionsProps } from 'models';

// i18n
import useTranslations from 'i18n';

// Components
import { Button } from 'components/button';

const CardSolutions = ({ data }: CardSolutionsProps) => {
  const t = useTranslations();

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <S.Component>
      {data.map((item, index) => (
        <div
          key={index}
          className={`${openIndex === index ? 'item_open' : 'item_close'}`}
          onClick={() => toggleItem(index)}
        >
          <div className={`${openIndex === index ? 'outer_open' : 'outer_close'}`}>
            <figure>
              <Image src={item.image.src} alt={item.image.alt} draggable="false" />
            </figure>
            {openIndex !== index ? (
              <div className="typography">
                <div className="typography_content">
                  <h2>{t(item.title)}</h2>
                  <p> {t(item.paragraph)}</p>
                </div>

                <div className="actions">
                  <button
                    onClick={event => {
                      event.stopPropagation();
                      toggleItem(index);
                    }}
                  >
                    <Image src={open} alt="open" draggable="false" />
                  </button>
                </div>
              </div>
            ) : null}
          </div>

          {openIndex === index && (
            <div className="inner_card">
              <div className="content">
                <div className="typography">
                  <div className="typography_content">
                    <h2> {t(item.title)}</h2>
                    <p> {t(item.sub_title)}</p>
                  </div>
                  <p className="paragraph">{t(item.paragraph)}</p>
                </div>

                <div className="actions">
                  <Button label={t(item.action.label)} type="primary" onClick={() => router.push('/register')} />
                </div>
              </div>

              <div className="control">
                <button
                  onClick={event => {
                    event.stopPropagation();
                    toggleItem(index);
                  }}
                >
                  <Image src={close} alt="close" draggable="false" />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </S.Component>
  );
};

export default CardSolutions;
