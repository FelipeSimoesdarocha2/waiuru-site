// Next
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';

// React
import { useCallback, useEffect } from 'react';

// Assets
import exit from 'assets/icons/exit_menu.svg';
import menu from 'assets/icons/menu.svg';
import { logo } from 'assets/lottie';

// Styles
import * as S from './Layout.styles';

// Models
import { LayoutProps } from './models';

// Components
import { Button } from 'components/button';
import { ICookie } from 'components/cookie';
import { Footer } from 'components/footer';
import { Internationalization } from 'components/internationalization';
import { Menu } from 'components/menu';
import { MenuMobile } from 'components/menuMobile';
import { Navbar } from 'components/navbar';

// Hook
import { useLayout } from './useLayout';

// Lottie
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const Layout = ({ selectedKey, children }: LayoutProps) => {
  const { t, router, isMenu, asPath, isMidle, isMobile, sub_menus, handleOpenMenu, linkAccess } = useLayout();

  // Leva até o topo após F5
  const handleResize = useCallback(() => {
    const currentHash = window.location.hash;
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = currentHash;
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('load', handleResize);

    return () => {
      window.removeEventListener('load', handleResize);
    };
  }, [handleResize]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{t('app.title')}</title>
        <link rel="canonical" href={`https://waiuru.com${asPath}`} />
        <meta name="description" content="Waiuru - Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:type" content="article"></meta>
        <meta property="og:url" content="https://waiuru.com/"></meta>
        <meta property="og:title" content={t('app.og_title')}></meta>
        <meta property="og:site_name" content={t('app.og_site_name')}></meta>
        <meta property="og:description" content={t('app.og_description')}></meta>
        <meta property="og:image" content=""></meta>
      </Head>
      <S.Container>
        <Navbar className={isMenu ? 'active_menu' : ''}>
          <S.Logo
            className={isMenu ? 'logo_icon' : ''}
            onClick={() => {
              if (asPath === '/') {
                linkAccess('#');
              } else {
                router.push('/');
              }
            }}
          >
            <Lottie animationData={logo} />
          </S.Logo>
          {!isMidle && (
            <Menu>
              <Menu.ItemGroup>
                <Menu.Item
                  menuItemKey="1"
                  name={`${t('menu.home_page')}`}
                  defaultSelectedKeys={selectedKey}
                  onClick={() => {
                    if (asPath === '/') {
                      linkAccess('#');
                    } else {
                      router.push('/');
                    }
                  }}
                />
                <Menu.Itens
                  menuItemKey="2"
                  name={`${t('menu.solutions')}`}
                  defaultSelectedKeys={selectedKey}
                  data={sub_menus}
                />
                <Menu.Item
                  menuItemKey="3"
                  name={`${t('menu.about')}`}
                  defaultSelectedKeys={selectedKey}
                  onClick={() => {
                    if ('/about' !== asPath) {
                      router.push('/about');
                    }
                  }}
                />
                <Menu.Item
                  menuItemKey="4"
                  name={`${t('menu.news')}`}
                  defaultSelectedKeys={selectedKey}
                  onClick={() => {
                    if ('/news' !== asPath) {
                      router.push('/news');
                    }
                  }}
                />
              </Menu.ItemGroup>
            </Menu>
          )}
          {!isMidle && (
            <S.Actions>
              <Button label={`${t('menu.actions.register')}`} type="ghost" onClick={() => router.push('/register')} />
              <Button label={`${t('menu.actions.access')}`} type="primary" onClick={() => linkAccess('https://admin-condo.waiuru.com/')} />
              <Internationalization />
            </S.Actions>
          )}
          {isMidle && (
            <S.MenuMobile onClick={handleOpenMenu}>
              <Image
                src={!isMenu ? menu : exit}
                width={26}
                height={26}
                className={!isMenu ? 'menu_icon' : 'exit_icon'}
                priority
                alt="img"
                draggable="false"
              />
            </S.MenuMobile>
          )}
        </Navbar>
        {isMenu && (
          <>{isMidle && <MenuMobile data={sub_menus} defaultSelectedKeys={selectedKey} isActive={isMenu} />}</>
        )}
        {children}
        <Footer mobile={isMobile} />
        <ICookie />
      </S.Container>
    </>
  );
};

export default Layout;
