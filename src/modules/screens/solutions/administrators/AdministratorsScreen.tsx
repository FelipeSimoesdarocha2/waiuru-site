// Next
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import router from 'next/router';

// React
import { Fragment } from 'react';

// Assets
import check from 'assets/icons/check.svg';
import app_store from 'assets/icons/download/app_store.svg';
import play_store from 'assets/icons/download/play_store.svg';
import decore_content from 'assets/images/solutions/decore_trail.svg';
import decore_left from 'assets/images/solutions/decore@left.svg';
import { admin_c_spot, admin_spot } from 'assets/lottie';

// Styles
import * as S from './Administrators.styles';

// Components
import { AppsInStoresSection } from 'components/appsInStores';
import { Button } from 'components/button';
import { CardSolutions } from 'components/cardSolutions';
import { FormSection } from 'components/form';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import { Presentation } from 'components/presentation';
import { Tab } from 'components/tab';

// Hook
import { useAdministrators } from './useAdministrators';

// Lootie
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const AdministratorsScreen = () => {
  const {
    t,
    links,
    locale,
    screen,
    isMobile,
    our_solutions,
    list_benefits,
    selectedScreen,
    dataAdministrators,
    setSelectedScreen,
  } = useAdministrators();

  const renderSelectedScreen = () => {
    switch (selectedScreen) {
      case 1:
        return <Presentation />;
      case 2:
        return <CardSolutions data={dataAdministrators} />;
      default:
        return null;
    }
  };

  return (
    <S.Container>
      <div className="hero">
        <div className="link_url">
          <p className="title">{t('solutions.control.title')}</p>
          <div className="tab_link">
            {links.map((item, index) => (
              <Tab.Link key={index} name={item.name} link={item.value} />
            ))}
          </div>
        </div>
        <figure className="screen">
          <Lottie loop={true} autoPlay={true} animationData={admin_spot} className="lottie" />
        </figure>
        <div className="inner">
          <div className="typography">
            <strong>{t(isMobile ? 'solutions.administrators.label_mobile' : 'solutions.administrators.label')}</strong>
            <h2>
              {t(isMobile ? 'solutions.administrators.title_mobile' : 'solutions.administrators.title')
                .split('\n')
                .map((line, index, arr) => (
                  <Fragment key={index}>
                    {line}
                    {index < arr.length - 1 && <br />}
                  </Fragment>
                ))}
            </h2>
            <p>
              {t(isMobile ? 'solutions.administrators.sub_title_mobile' : 'solutions.administrators.sub_title')
                .split('\n')
                .map((line, index, arr) => (
                  <Fragment key={index}>
                    {line}
                    {index < arr.length - 1 && <br />}
                  </Fragment>
                ))}
            </p>
            {!isMobile && <p>{t('solutions.administrators.sub_title_secondaty')}</p>}
            {locale === 'es' ? <p>{t('solutions.administrators.sub_title_tertiary')}</p> : null}
          </div>
          <div className="link">
            <div className="actions">
              <Button
                label={t('solutions.administrators.action.label')}
                type="primary"
                onClick={() => router.push('/register')}
              />
            </div>
            <div className="link_typography">
              <strong>{t('solutions.link.available')}</strong>
              <p>{t('solutions.link.on_the')}</p>
              <Link
                href={'https://play.google.com/store/apps/details?id=com.waiuru.myCondominium'}
                draggable="false"
                target="blank"
              >
                Apple
              </Link>
              <p>{t('solutions.link.and')}</p>
              <Link
                href={'https://play.google.com/store/apps/details?id=com.waiuru.myHome'}
                draggable="false"
                target="blank"
              >
                Play Store
              </Link>
            </div>
            <div className="download">
              <Link href={'https://play.google.com/store/apps/details?id=com.waiuru.myHome'} draggable="false" target="blank">
                <Image src={play_store} alt="play_store" draggable="false" />
              </Link>
              <Link href={'https://apps.apple.com/us/app/my-waiuru-home/id6467805565'} draggable="false" target="blank">
                <Image src={app_store} alt="app_store" draggable="false" />
              </Link>
            </div>
          </div>
        </div>
        <figure className="screen_mobile">
          <Lottie loop={true} autoPlay={true} animationData={admin_c_spot} className="lottie" />
        </figure>
      </div>
      <div className="content_screen">
        {selectedScreen !== 1 && <Image src={decore_left} className="decore" alt="decore" draggable="false" />}
        <div className="inner">
          <Image src={decore_content} alt="decore" className="decore_content" />
          <h2 className="title">
            <text>{t('solutions.config.title_one')}</text>
            <strong>{t('solutions.config.title_bold_one')}</strong>
            <text>{t('solutions.config.title_two')}</text>
            <strong>{t('solutions.config.title_bold_two')}</strong>
          </h2>
          <div className="set_screen">
            <p className="title_action">{t('solutions.config.sub_title')}</p>
            <div className="tabs">
              {screen.map(item => (
                <Tab.Screen
                  key={item.id}
                  name={item.name}
                  tabScreenKey={item.id}
                  defaultSelectedKeys={selectedScreen}
                  onClick={() => setSelectedScreen(item.id)}
                />
              ))}
            </div>
          </div>
        </div>
        {renderSelectedScreen()}
      </div>

      <div className="benefits">
        <h2>{t('solutions.administrators.benefits.title')}</h2>
        <div className="grid_list">
          {list_benefits.map((item, index) => (
            <div className="itens" key={index}>
              <Image src={check} alt="check" draggable="false" />
              <p>{t(item.name)}</p>
            </div>
          ))}
        </div>
      </div>

      <OurSolutions
        data={our_solutions.map(e => ({
          ...e,
          action: {
            ...e.action,
            label: isMobile ? `${t('solutions.administrators.ourSolutions.view_more')}` : e.action.label,
          },
        }))}
        title={
          isMobile
            ? 'solutions.administrators.ourSolutions.title_mobile'
            : 'solutions.administrators.ourSolutions.title'
        }
        sub_title={'solutions.administrators.ourSolutions.sub_title'}
      />
      <FormSection sub_title={true} />
      {!isMobile && <AppsInStoresSection />}
    </S.Container>
  );
};

export default AdministratorsScreen;
