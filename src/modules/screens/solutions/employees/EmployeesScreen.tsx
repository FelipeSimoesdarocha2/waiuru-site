// Next
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import router from 'next/router';

// React
import { useMemo } from 'react';

// Assets
import check from 'assets/icons/check.svg';
import app_store from 'assets/icons/download/app_store.svg';
import play_store from 'assets/icons/download/play_store.svg';
import decore_trail from 'assets/images/solutions/decore_trail.svg';
import decore_left from 'assets/images/solutions/decore@left.svg';
import { employee_en, employee_es, employee_pt } from 'assets/lottie';

// Styles
import * as S from './Employees.styles';

// Components
import { AppsInStoresSection } from 'components/appsInStores';
import { Button } from 'components/button';
import { CardSolutions } from 'components/cardSolutions';
import { FormSection } from 'components/form';
import OurSolutions from 'components/OurSolutions/OurSolutions';
import { Presentation } from 'components/presentation';
import { Tab } from 'components/tab';

// Hooks
import { useEmployees } from './useEmployees';

// Lottie
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const EmployeesScreen = () => {
  const {
    t,
    links,
    locale,
    screen,
    isMidle,
    isMobile,
    our_solutions,
    list_benefits,
    dataEmployees,
    selectedScreen,
    setSelectedScreen,
  } = useEmployees();

  const setLottie = useMemo(() => {
    switch (locale) {
      case 'en':
        return employee_en;
      case 'es':
        return employee_es;
      case 'pt':
        return employee_pt;
      default:
        return null;
    }
  }, [locale]);

  const renderSelectedScreen = () => {
    switch (selectedScreen) {
      case 1:
        return <Presentation />;
      case 2:
        return <CardSolutions data={dataEmployees} />;
      default:
        return null;
    }
  };

  return (
    <S.Container>
      {!isMidle && (
        <>
          {selectedScreen === 2 && (
            <Image src={decore_left} className="decore_left" alt="decore_left" draggable="false" />
          )}
        </>
      )}
      <S.Hero>
        {isMobile && (
          <S.Control>
            <p>{t('solutions.control.title')}</p>
            <div className="row">
              {links.map((item, index) => (
                <Tab.Link key={index} name={item.name} link={item.value} />
              ))}
            </div>
          </S.Control>
        )}
        {!isMobile && (
          <figure className="screen">
            <Lottie loop={true} autoPlay={true} animationData={setLottie} className="lottie" />
          </figure>
        )}

        <S.Inner>
          <S.Typography>
            <strong>{t(isMobile ? 'solutions.employees.label_mobile' : 'solutions.employees.label')}</strong>
            <h2>{t(isMobile ? 'solutions.employees.title_mobile' : 'solutions.employees.title')}</h2>
            <p>{t(isMobile ? 'solutions.employees.sub_title_mobile' : 'solutions.employees.sub_title')}</p>
            {!isMidle && <p>{t('solutions.employees.sub_title_secondaty')}</p>}
          </S.Typography>
          <S.Link>
            {isMobile && (
              <Button
                label={t('solutions.employees.action.label')}
                type="primary"
                onClick={() => router.push('/register')}
              />
            )}
            {!isMobile && (
              <div className="link_typography">
                <strong>{t('solutions.link.available')}</strong>
                <p>{t('solutions.link.on_the')}</p>
                <Link
                  href={'https://apps.apple.com/us/app/waiuru-for-employees/id6470291728'}
                  draggable="false"
                  target="blank"
                >
                  Apple
                </Link>
                <p>{t('solutions.link.and')}</p>
                <Link
                  href={'https://play.google.com/store/apps/details?id=com.waiuru.myCondominium'}
                  draggable="false"
                  target="blank"
                >
                  Play Store
                </Link>
              </div>
            )}
            <div className="platform">
              <Link
                href={'https://play.google.com/store/apps/details?id=com.waiuru.myCondominium'}
                target="blank"
                draggable="false"
              >
                <Image src={play_store} alt="play_store" draggable="false" />
              </Link>
              <Link
                href={'https://apps.apple.com/us/app/waiuru-for-employees/id6470291728'}
                target="blank"
                draggable="false"
              >
                <Image src={app_store} alt="app_store" draggable="false" />
              </Link>
            </div>
          </S.Link>
        </S.Inner>
        {isMobile && (
          <figure className="screen_mobile">
            <Lottie loop={true} autoPlay={true} animationData={setLottie} className="lottie" />
          </figure>
        )}
      </S.Hero>
      <S.Content>
        <div className="inner">
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
          <Image src={decore_trail} alt="decore" className="decore_trail" draggable="false" />
        </div>
        {renderSelectedScreen()}
      </S.Content>
      <S.Benefits>
        <h2>{t('solutions.employees.benefits.title')}</h2>
        <div className="grid_list">
          {list_benefits.map((item, index) => (
            <div className="itens" key={index}>
              <Image src={check} alt="check" draggable="false" />
              <p>{t(item.name)}</p>
            </div>
          ))}
        </div>
      </S.Benefits>
      <OurSolutions
        data={our_solutions.map(e => ({
          ...e,
          action: {
            ...e.action,
            label: isMobile ? `${t('solutions.employees.ourSolutions.view_more')}` : e.action.label,
          },
        }))}
        title={isMobile ? 'solutions.employees.ourSolutions.title_mobile' : 'solutions.employees.ourSolutions.title'}
        sub_title={'solutions.employees.ourSolutions.sub_title'}
      />
      <FormSection sub_title={true} />
      {!isMobile && <AppsInStoresSection />}
    </S.Container>
  );
};

export default EmployeesScreen;
