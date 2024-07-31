// Next
import Image from 'next/image';
import router from 'next/router';

// Assets
import ilustra from 'assets/images/home/everything.svg';

// Styles
import * as S from './EverythingDo.styles';

// Components
import { Button } from 'components/button';

// Hook
import { useEverythingDo } from './useEverythingDo';

const EverythingDoSection = () => {
    const { t, list } = useEverythingDo();

    return (
        <S.Container>
            <h2 className="title">{t('home.everything.title')}</h2>
            <S.Content>
                <Image src={ilustra} alt="ilustra" draggable="false" />
                <S.Inner>
                    <h2>{t('home.everything.sub_title')}</h2>
                    <S.List>
                        {list.map((item, index) => (
                            <div key={index} className="item">
                                <p>{t(item.name)}</p>
                            </div>
                        ))}
                    </S.List>
                    <p className="description">{t('home.everything.description')}</p>
                    <Button
                        label={t('home.everything.action.label')}
                        type="primary"
                        onClick={() => router.push('/about')}
                    />
                </S.Inner>
            </S.Content>
        </S.Container>
    );
};

export default EverythingDoSection;
