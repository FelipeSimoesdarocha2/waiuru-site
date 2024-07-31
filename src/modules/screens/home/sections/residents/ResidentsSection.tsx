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
import { resident_en, resident_es, resident_pt } from 'assets/lottie';

// Styles
import * as S from './Residents.styles';

// Components
import { Button } from 'components/button';

// Hook
import { useResidents } from './useResidents';

// Lottie
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const ResidentsSection = () => {
  const { locale } = useRouter();
  const { t, list } = useResidents();

  const setLottie = useMemo(() => {
    switch (locale) {
      case 'en':
        return resident_en;
      case 'es':
        return resident_es;
      case 'pt':
        return resident_pt;
      default:
        return null;
    }
  }, [locale]);

  return (
    <S.Container>
      <S.Typography>
        <h2> {t('home.residents.title')}</h2>
        <p>{t('home.residents.sub_title')}</p>
      </S.Typography>
      <div className="last_child">
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
              onClick={() => router.push('/solutions/residents')}
            />
          </div>
          <S.Lottie>
            <Lottie loop={true} autoPlay={true} animationData={setLottie} className="lottie_mobile" />
          </S.Lottie>
          <div className="download">
            <p> {t('home.employees.download')}</p>
            <div className="link">
              <Link
                href={'https://play.google.com/store/apps/details?id=com.waiuru.myHome'}
                draggable="false"
                target="blank"
              >
                <Image src={play_store} alt="play_store" draggable="false" />
              </Link>
              <Link href={'https://apps.apple.com/us/app/my-waiuru-home/id6467805565'} draggable="false" target="blank">
                <Image src={app_store} alt="app_store" draggable="false" />
              </Link>
            </div>
          </div>
        </div>
        <S.Lottie>
          <Lottie loop={true} autoPlay={true} animationData={setLottie} className="lottie" />
        </S.Lottie>
      </div>
    </S.Container>
  );
};

export default ResidentsSection;
