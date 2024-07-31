// Next
import Image from 'next/image';

// Styles
import * as S from './CardMaterial.styles';

// Models
import { CardMaterialProps } from './models';

// i18n
import useTranslations from 'i18n';

const CardMaterial = ({ id, paragraph, src, name, profession }: CardMaterialProps) => {
  const t = useTranslations();

  return (
    <S.Component key={id}>
      <S.Content>
        <figure>{src && <Image src={src} alt={''} draggable="false" />}</figure>
        <div className="info">
          <h2>{name}</h2>
          <p>{t(profession)}</p>
        </div>
      </S.Content>
      <p>{t(paragraph)}</p>
    </S.Component>
  );
};

export default CardMaterial;
