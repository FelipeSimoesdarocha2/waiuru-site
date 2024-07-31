// Next
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import router, { useRouter } from 'next/router';

// React
import { useMemo } from 'react';

// Assets
import check from 'assets/icons/check.svg';
import app_store from 'assets/icons/download/app_store.svg';
import play_store from 'assets/icons/download/play_store.svg';
import { employee_en, employee_es, employee_pt } from 'assets/lottie';

// Styles
import * as S from './Employees.styles';

// Components
import { Button } from 'components/button';

// Hook
import { useEmployees } from './useEmployees';

// Lottie
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const EmployeesSection = () => {
  const { locale } = useRouter();
  const { t, list } = useEmployees();

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

  return (
    <S.Container>
      <S.Typography>
        <h2> {t('home.employees.title')}</h2>
        <p>{t('home.employees.sub_title')}</p>
      </S.Typography>
      <S.Content>
        <S.Lottie>
          <Lottie loop={true} autoPlay={true} animationData={setLottie} className="lottie" />
        </S.Lottie>
        <div className="content">
          <div className="content_hero">
            <div className="inner">
              {list.map((item, index) => (
                <div key={index} className="item">
                  <Image src={check} alt="check" draggable="false" />
                  <p>{t(item.name)}</p>
                </div>
              ))}
            </div>
            <Button
              label={t('home.employees.action.label')}
              type="primary"
              onClick={() => router.push('/solutions/employees')}
            />
          </div>
          <S.Lottie>
            <Lottie loop={true} autoPlay={true} animationData={setLottie} className="lottie_mobile" />
          </S.Lottie>
          <div className="download">
            <p> {t('home.employees.download')}</p>
            <div className="link">
              <Link draggable="false" href={'https://play.google.com/store/apps/details?id=com.waiuru.myCondominium'} target="blank">
                <Image src={play_store} alt="play_store" draggable="false" />
              </Link>
              <Link href={'https://apps.apple.com/us/app/waiuru-for-employees/id6470291728'} draggable="false" target="blank">
                <Image src={app_store} alt="app_store" draggable="false" />
              </Link>
            </div>
          </div>
        </div>
      </S.Content>
    </S.Container>
  );
};

export default EmployeesSection;
