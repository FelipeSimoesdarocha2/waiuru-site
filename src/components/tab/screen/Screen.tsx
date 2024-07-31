// Styles
import * as S from './Screen.styles';

// Models
import { ScreenProps } from './models';

// i18n
import useTranslations from 'i18n';

const Screen = ({ name, tabScreenKey, defaultSelectedKeys, onClick }: ScreenProps) => {
  const isActive = defaultSelectedKeys === tabScreenKey;

  const t = useTranslations();

  return (
    <S.Component onClick={onClick} className={`${isActive && 'active'}`}>
      <p>{t(name)}</p>
    </S.Component>
  );
};

export default Screen;
