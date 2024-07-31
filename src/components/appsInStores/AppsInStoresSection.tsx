// Next
import Image from 'next/image';
import Link from 'next/link';

// Assets
import arrow_large from 'assets/icons/arrow_large.svg';
import app_store from 'assets/icons/download/app_store.svg';
import play_store from 'assets/icons/download/play_store.svg';

// Styles
import * as S from './AppsInStores.styles';

// Hook
import { useAppsStores } from './useAppsStores';

const AppsInStoresSection = () => {
    const { t, appData } = useAppsStores();

    return (
        <S.Container>
            <S.Header>
                <h2>{t('appsStores.title')}</h2>
                <S.Header_Col>
                    <S.Header_Content>
                        <Link
                            href={'https://play.google.com/store/apps/details?id=com.waiuru.myHome'}
                            draggable="false"
                            target="blank"
                        >
                            <Image src={play_store} alt="Download on the Play Store" draggable="false" />
                        </Link>
                        <Link href={'https://apps.apple.com/us/app/my-waiuru-home/id6467805565'} draggable="false" target="blank">
                            <Image src={app_store} alt="Download on the App Store" draggable="false" />
                        </Link>
                    </S.Header_Content>
                    <p>{t('appsStores.sub_title')}</p>
                </S.Header_Col>
            </S.Header>
            <S.Cards>
                {appData.map((item, index) => (
                    <S.Card key={index}>
                        <Image
                            className="qrCode"
                            draggable="false"
                            width={154}
                            height={154}
                            alt={`QR Code for ${t(item.title)}`}
                            src={`https://storage.googleapis.com/waiuru-site/about/${item.src}`}
                        />
                        <S.Card_Content>
                            <h2>{t(item.title)}</h2>
                            <Image src={arrow_large} className="arrow_down" alt="arrow_down" draggable="false" />
                            <S.Action>
                                <Link href={item.link} draggable="false" target="_blank">
                                    {t(item.action)}
                                </Link>
                            </S.Action>
                            <S.Typography>
                                <p>{t(item.paragraph)}</p>
                                <Image src={arrow_large} alt="arrow_large" draggable="false" />
                            </S.Typography>
                        </S.Card_Content>
                    </S.Card>
                ))}
            </S.Cards>
        </S.Container>
    );
};

export default AppsInStoresSection;
