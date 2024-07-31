// Styles
import * as S from './Nav.styles';

// Models
import { NavProps } from './models';

// i18n
import useTranslations from 'i18n';

const Nav = ({ name, tabScreenKey, defaultSelectedKeys, onClick }: NavProps) => {
  const t = useTranslations();

  return (
    <S.Component onClick={onClick} className={`${defaultSelectedKeys === tabScreenKey && 'active'}`}>
      <p>{t(name)}</p>
    </S.Component>
  );
};

export default Nav;
