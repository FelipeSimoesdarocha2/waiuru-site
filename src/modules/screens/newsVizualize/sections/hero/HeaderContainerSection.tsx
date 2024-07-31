import Image, { StaticImageData } from 'next/image';

import * as S from './HeaderContainerSection.styles';

interface HeaderContainerProps {
  imageSrc: StaticImageData
  alt: string
}

const HeaderContainer = ({ imageSrc, alt }: HeaderContainerProps) => {
  return (
    <S.Container>
      <Image src={imageSrc} alt={alt} className="bg_news" draggable="false" />
    </S.Container>
  );
};

export default HeaderContainer;
