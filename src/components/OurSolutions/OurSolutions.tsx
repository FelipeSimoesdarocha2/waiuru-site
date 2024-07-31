// Next
import Image from 'next/image';
import router from 'next/router';

// React
import { Fragment } from 'react';

// Styles
import * as S from './OurSolutions.styles';

// Models
import { OurSolutionsProp } from './models';

// i18n
import useTranslations from 'i18n';

// Components
import { Button } from 'components/button';

const OurSolutions = ({ data, title, sub_title }: OurSolutionsProp) => {
  const t = useTranslations();

  return (
    <Fragment>
      <S.Component>
        <S.Typography>
          {title && (
            <h2>
              {t(`${title}`)
                .split('\n')
                .map((line, index, arr) => (
                  <Fragment key={index}>
                    {line}
                    {index < arr.length - 1 && <br />}
                  </Fragment>
                ))}
            </h2>
          )}
          {sub_title && (
            <p>
              {t(`${sub_title}`)
                .split('\n')
                .map((line, index, arr) => (
                  <Fragment key={index}>
                    {line}
                    {index < arr.length - 1 && <br />}
                  </Fragment>
                ))}
            </p>
          )}
        </S.Typography>
        <S.Content>
          {data.map((item, index) => (
            <S.Item key={index}>
              <S.ImageContainer>
                <Image src={item.src} width={item.width} alt={''} draggable="false" />
              </S.ImageContainer>
              <S.Inner>
                <S.Paragraph>{t(item.paragraph)}</S.Paragraph>
                <Button
                  label={t(item.action.label)}
                  type="primary"
                  onClick={() => {
                    router.push(item.action.link);
                  }}
                />
              </S.Inner>
            </S.Item>
          ))}
        </S.Content>
      </S.Component>
    </Fragment>
  );
};

export default OurSolutions;
