// Next
import dynamic from 'next/dynamic';
import Image from 'next/image';
import router from 'next/router';

// React
import { Fragment } from 'react';

// Assets
import check from 'assets/icons/check.svg';
import { admin_c_spot } from 'assets/lottie';

// Styles
import * as S from './Admin.styles';

// Components
import { Button } from 'components/button';

// Hook
import { useAdmin } from './useAdmin';

// Lottie
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const AdminSection = () => {
  const { t, data_admin } = useAdmin();

  return (
    <S.Container>
      <S.Typography>
        <h2>{t('home.admin.title')}</h2>
        <p>{t('home.admin.sub_title')}</p>
      </S.Typography>
      <S.Content>
        <S.Lottie>
          <Lottie loop={true} autoPlay={true} animationData={admin_c_spot} className="lottie" />
        </S.Lottie>
        <S.Inner>
          <S.Itens>
            {data_admin.map((item, index) => (
              <S.Item key={index}>
                <Image src={check} alt="check" draggable="false" />
                <p>
                  {t(item.name)
                    .split('\n')
                    .map((line, index, arr) => (
                      <Fragment key={index}>
                        {line}
                        {index < arr.length - 1 && <br />}
                      </Fragment>
                    ))}
                </p>
              </S.Item>
            ))}
          </S.Itens>
          <Button
            type="primary"
            label={t('home.admin.action.label')}
            onClick={() => router.push('/solutions/administrators')}
          />
        </S.Inner>
      </S.Content>
    </S.Container>
  );
};

export default AdminSection;
