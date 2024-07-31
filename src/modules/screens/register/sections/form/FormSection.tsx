// Next
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';

// React
import { useMemo } from 'react';

// Assets
import type5 from 'assets/details/type5.svg';
import bg_form from 'assets/images/register/bg@form.svg';
import build from 'assets/images/register/build.svg';
import { world_pt, world_es, world_en } from 'assets/lottie';

// Styles
import * as S from './Form.styles';

// i18n
import useTranslations from 'i18n';

// Components
import { FormRegisterSection } from 'components/formRegister';

// Lottie
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const FormSection = () => {
  const t = useTranslations();
  const { locale } = useRouter();

  const setLottie = useMemo(() => {
    switch (locale) {
      case 'en':
        return world_en;
      case 'es':
        return world_es;
      case 'pt':
        return world_pt;
      default:
        return null;
    }
  }, [locale]);

  return (
    <S.Container>
      <div className="container_bg">
        <Image src={bg_form} alt="bg_form" className="bg_form" draggable="false" />
      </div>
      <div className="container_detail">
        <Image src={type5} alt="detail" draggable="false" />
      </div>
      <div className="bar" />
      <div className="container_earth">
        <Lottie loop={true} autoPlay={true} animationData={setLottie} className="lottie" />
      </div>
      <div className="container_build">
        <Image src={build} alt="build" draggable="false" />
      </div>
      <div className="page_content">
        <div className="first_child_form">
          <div className="inner_typography">
            <h2>
              {t('register.form.title_p1')}
              <span>#WAIURU</span>
              {t('register.form.title_p2')}
            </h2>
            <div className="paragraph">
              <p>{t('register.form.text')}</p>
              <div className="spacer40" />
              <p>
                {t('register.form.text_p1')}
                <strong>{t('register.form.text_p2')}</strong> {t('register.form.text_p3')}
              </p>
            </div>
          </div>
        </div>
        <div className="container_earth_mobile">
          <Lottie loop={true} autoPlay={true} animationData={setLottie} className="lottie" />
        </div>
        <FormRegisterSection />
      </div>
    </S.Container>
  );
};

export default FormSection;
