// Next
import Image from 'next/image';

// Assets
import bg_hero from 'assets/images/home/bg@hero.svg';
import decore_carrossel from 'assets/images/home/decore@carrossel.svg';
import decore_left_news from 'assets/images/home/decore@news.svg';
import decore_solutions from 'assets/images/home/decore@solutions.svg';

// Styles
import * as S from './Home.styles';

// Components
import { AppsInStoresSection } from 'components/appsInStores';
import { FormSection } from 'components/form';
import { Item } from 'components/item';
import { NewsLetterForm } from 'components/newsletterForm';
import { Tab } from 'components/tab';

// Sections
import { AdminSection } from './sections/admin';
import { EmployeesSection } from './sections/employees';
import { EverythingDoSection } from './sections/everythingDo';
import { HeroSection } from './sections/hero';
import { NecessaryTechnologySection } from './sections/necessaryTechnology';
import { NewsSection } from './sections/news';
import { ResidentsSection } from './sections/residents';

// Hook
import { useHome } from './useHome';

const HomeScreen = () => {
  const { t, screen, isMidle, isMobile, selectedScreen, setSelectedScreen } = useHome();

  const renderSelectedScreen = () => {
    if (isMidle) {
      switch (selectedScreen) {
        case 1:
          return <AdminSection />;
        case 2:
          return <ResidentsSection />;
        case 3:
          return <EmployeesSection />;
        default:
          return null;
      }
    } else {
      return (
        <>
          <AdminSection />
          <ResidentsSection />
          <EmployeesSection />
        </>
      );
    }
  };

  return (
    <S.Container>
      {!isMidle && (
        <>
          <Image src={bg_hero} className="bg_hero" alt="bg_hero" draggable="false" />
          <Image src={decore_solutions} alt="decore_solutions" className="decore_solutions" draggable="false" />
          <Image src={decore_left_news} alt="decore_left_news" className="decore_left_news" draggable="false" />
          <Image src={decore_carrossel} alt="decore_carrossel" className="decore_carrossel" draggable="false" />
        </>
      )}
      <HeroSection mobile={isMobile} />
      <NecessaryTechnologySection />
      {isMidle && (
        <S.Nav>
          <p>{t('menu_screen.title')}</p>
          <S.Nav_Itens>
            {screen.map((item, index) => (
              <Tab.Nav
                key={index}
                name={item.name}
                tabScreenKey={item.id}
                defaultSelectedKeys={selectedScreen}
                onClick={() => setSelectedScreen(item.id)}
              />
            ))}
          </S.Nav_Itens>
        </S.Nav>
      )}
      {renderSelectedScreen()}
      <EverythingDoSection />
      <FormSection sub_title={false} />
      <Item />
      <NewsSection />
      <NewsLetterForm />
      <AppsInStoresSection />
    </S.Container>
  );
};

export default HomeScreen;
