// Next
import router from 'next/router';

// Assets
import AboutIcon from 'assets/icons/about';
import HomeIcon from 'assets/icons/home';
import NewsIcon from 'assets/icons/news';
import SolutionsIcon from 'assets/icons/solutions';

// Styles
import * as S from './MenuMobile.styles';

// Models
import { MenuMobileProps } from './models';

// i18n
import useTranslations from 'i18n';

// Components
import { Button } from 'components/button';
import { Internationalization } from 'components/internationalization';
import Menu from 'components/menu/Menu';

const MenuMobile = ({ data, isActive, defaultSelectedKeys }: MenuMobileProps) => {
  const t = useTranslations();
  const linkAccess = (url: string) => {
    const externalUrl = url;
    window.location.href = externalUrl;
  };

  return (
    <S.Container className={`menu-content ${isActive ? 'open' : ''} ${isActive ? '' : 'close'}`}>
      <S.Actions>
        <Button label={`${t('menu.actions.register')}`} type="ghost" onClick={() => router.push('/register')} />
        <Button label={`${t('menu.actions.access')}`} type="primary" onClick={() => linkAccess('https://admin-condo.waiuru.com/')} />
      </S.Actions>
      <S.Content>
        <S.Menus>
          <div onClick={() => router.push('/')} className={`iten_menu ${defaultSelectedKeys === '1' ? 'active' : ''}`}>
            <div className="iten_content">
              <HomeIcon />
              <p>{t('menu.home_page')}</p>
            </div>
          </div>

          <div className={`iten_menu ${defaultSelectedKeys === '2' ? 'active' : ''}`}>
            <div className="iten_content">
              <SolutionsIcon />
              <Menu.Itens
                menuItemKey="2"
                name={t(`menu.solutions`)}
                defaultSelectedKeys={defaultSelectedKeys}
                data={data}
              />
            </div>
          </div>

          <div
            onClick={() => router.push('/about')}
            className={`iten_menu ${defaultSelectedKeys === '3' ? 'active' : ''}`}
          >
            <div className="iten_content">
              <AboutIcon />
              <p>{t('menu.about')}</p>
            </div>
          </div>

          <div
            onClick={() => router.push('/news')}
            className={`iten_menu ${defaultSelectedKeys === '4' ? 'active' : ''}`}
          >
            <div className="iten_content">
              <NewsIcon />
              <p>{t('menu.news')}</p>
            </div>
          </div>
          <Internationalization />
        </S.Menus>
      </S.Content>
    </S.Container>
  );
};

export default MenuMobile;
