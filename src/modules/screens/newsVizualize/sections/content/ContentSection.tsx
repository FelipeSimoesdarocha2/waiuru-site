// Next
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// React
import { Fragment } from 'react';

// Assets
import Share from 'assets/icons/share.svg';

// Styles
import * as S from './ContentSection.styles';

// Models
import { Months, SectionProps } from 'models';

// i18n
import useTranslations from 'i18n';

// Sections
import { HighlightsSection } from '../../highlights';
import { listLink_PT, listLink_EN, listLink_ES } from './link.constants';

// Common
import { format } from 'date-fns';

const ContentContainer = ({ mobile, title, body, other, create_at }: SectionProps) => {
  const monthNumberToEnum = (monthNumber: number): Months => {
    switch (monthNumber) {
      case 1:
        return Months.January;
      case 2:
        return Months.February;
      case 3:
        return Months.March;
      case 4:
        return Months.April;
      case 5:
        return Months.May;
      case 6:
        return Months.June;
      case 7:
        return Months.July;
      case 8:
        return Months.August;
      case 9:
        return Months.September;
      case 10:
        return Months.October;
      case 11:
        return Months.November;
      case 12:
        return Months.December;
      default:
        throw new Error(`Invalid month number: ${monthNumber}`);
    }
  };

  const { locale } = useRouter();
  const t = useTranslations();
  const { asPath } = useRouter();
  const day = parseInt(format(new Date(create_at || ''), 'dd'), 10).toString();
  const month = parseInt(format(new Date(create_at || ''), 'MM'));
  const year = parseInt(format(new Date(create_at || ''), 'yyyy'));
  const monthEnum: Months = monthNumberToEnum(month);

  const copyToClipboard = () => {
    const textToCopy = `https://waiuru.com/${asPath}`;

    try {
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    } catch (err) {
      console.error('Falha ao copiar o texto: ', err);
    }
  };

  return (
    <S.Container>
      <div className="first_child">
        <div className="typography">
          <h2>{t(`${title}`)}</h2>
          <S.Spacer40 />
          <S.ContainerShare>
            <p>
              {t('news.list.create_at.published')} {day} {t('news.list.create_at.the')} {t(`${monthEnum}`)}{' '}
              {t('news.list.create_at.the')} {t(year)}
            </p>
            <S.ContainerShareItem>
              {locale === 'pt' ? (
                <>
                  {listLink_PT.map((item, index) => (
                    <Fragment key={index}>
                      <Link href={item.url} draggable="false">
                        <Image src={item.src} alt={item.alt} draggable="false" />
                      </Link>
                    </Fragment>
                  ))}
                </>
              ) : null}

              {locale === 'en' ? (
                <>
                  {listLink_EN.map((item, index) => (
                    <Fragment key={index}>
                      <Link href={item.url} draggable="false">
                        <Image src={item.src} alt={item.alt} draggable="false" />
                      </Link>
                    </Fragment>
                  ))}
                </>
              ) : null}

              {locale === 'es' ? (
                <>
                  {listLink_ES.map((item, index) => (
                    <Fragment key={index}>
                      <Link href={item.url} draggable="false">
                        <Image src={item.src} alt={item.alt} draggable="false" />
                      </Link>
                    </Fragment>
                  ))}
                </>
              ) : null}
              <button onClick={copyToClipboard}>
                <Image src={Share} alt={'Share_Icon'} draggable="false" />
              </button>
            </S.ContainerShareItem>
          </S.ContainerShare>
          <S.Spacer60 />
          {body && (
            <>
              {Array.isArray(body) ? (
                <div>
                  <ul>
                    {body.map((item, itemIndex) => (
                      <>
                        <li key={itemIndex}>{t(item)}</li>
                        <S.Spacer20 />
                      </>
                    ))}
                  </ul>
                </div>
              ) : (
                Object.keys(body).map((key, index) => (
                  <div key={index} className="body_content">
                    <h3>{t(key)}</h3>
                    <ul>
                      {body[key].map((item, itemIndex) => (
                        <>
                          <li key={itemIndex}>{t(item)}</li>
                          <S.Spacer20 />
                        </>
                      ))}
                    </ul>
                  </div>
                ))
              )}
            </>
          )}
          {other &&
            Object.keys(other).map((outerKey, index) => (
              <div key={index} className='other'>
                <p>{t(outerKey)}</p>
                <ul>
                  {other[outerKey] &&
                    Object.keys(other[outerKey]).map((innerKey, innerIndex) => (
                      <div className='other_innner' key={innerKey}>
                        <p>{t(innerKey)}</p>
                        <li key={innerIndex}>
                          {other[outerKey][innerKey].map((item, itemIndex) => (
                            <span key={itemIndex}>{t(item)}</span>
                          ))}
                        </li>
                      </div>
                    ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
      <S.ContainerSeeMore>
        <HighlightsSection mobile={mobile} />
      </S.ContainerSeeMore>
    </S.Container>
  );
};

export default ContentContainer;
