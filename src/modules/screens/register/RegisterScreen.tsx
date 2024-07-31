// Next
import Image from 'next/image';

// Assets
import bg_hero from 'assets/images/register/bg@hero.svg';

// Styles
import * as S from './RegisterScreen.styles';

// Components
import OurSolutions from 'components/OurSolutions/OurSolutions';

// Sections
import { Carousel } from './sections/carousel';
import { FormSection } from './sections/form';
import { Header } from './sections/header';

// Hook
import { useRegister } from './useRegister';

const RegisterScreen = () => {
  const { t, isMobile, our_solutions } = useRegister();

  return (
    <S.Container>
      <Image src={bg_hero} alt="bg_hero" className="bg_hero" draggable="false" />
      <Header />
      <FormSection />
      <Carousel />
      <OurSolutions
        data={our_solutions.map(e => ({
          ...e,
          action: {
            ...e.action,
            label: isMobile ? `${t('register.ourSolutions.view_more')}` : e.action.label,
          },
        }))}
        title={'register.ourSolutions.title'}
      />
    </S.Container>
  );
};

export default RegisterScreen;
