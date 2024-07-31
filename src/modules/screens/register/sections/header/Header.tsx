// Next
import Image from 'next/image';

// Assets
import ilustra from 'assets/images/register/ilustra.svg';

// Styles
import * as S from './Header.styles';

// i18n
import useTranslations from 'i18n';

const Header = () => {
    const t = useTranslations();

    return (
        <S.Container>
            <Image src={ilustra} alt="ilustra" priority draggable="false" />
            <S.Content>
                <S.Typography>
                    <strong>{t('register.header.sub_title')}</strong>
                    <h2>{t('register.header.title')}</h2>
                </S.Typography>
                <p>{t('register.header.text')}</p>
            </S.Content>
        </S.Container>
    );
};

export default Header;
