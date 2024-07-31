// Next
import Image from 'next/image';
import { useRouter } from 'next/router';

// Assets
import bg_wave from 'assets/images/home/bgWave.svg';
import bannerLarge from 'assets/images/home/necessaryTechnology.svg';
import wave_bottom from 'assets/images/home/wave_bottom.svg';
import wave_top from 'assets/images/home/wave.svg';

// Styles
import * as S from './NecessaryTechnology.styles';

// i18n
import useTranslations from 'i18n';

// Components
import { VideoHome } from 'components/videoHome';

// Hook
import { useNecessaryTechnology } from './useNecessaryTechnology';

const NecessaryTechnologySection = () => {
    const { list_problems, list_solutions } = useNecessaryTechnology();
    const { locale } = useRouter();
    const t = useTranslations();

    const renderSelectedScreen = () => {
        switch (locale) {
            case 'en':
                return 'https://storage.googleapis.com/waiuru-site-assets/en/Waiuru-Eng.mp4';
            case 'es':
                return 'https://storage.googleapis.com/waiuru-site-assets/es/Waiuru-Esp.mp4';
            case 'pt':
                return 'https://storage.googleapis.com/waiuru-site-assets/pt/Waiuru-port.mp4';
            default:
                return null;
        }
    };

    return (
        <S.Container>
            <S.Content>
                <S.Typography>
                    <h2>{t('home.necessaryTechnology.title')}</h2>
                    <p>{t('home.necessaryTechnology.sub_title')}</p>
                </S.Typography>
                <S.Cards>
                    <S.Problems>
                        <div className="typography">
                            <h2>{t('home.necessaryTechnology.title_problems')}</h2>
                            <span />
                        </div>
                        <S.List_Problems>
                            {list_problems.map(item => (
                                <S.Item_Problems key={item.id}>
                                    <span>
                                        <p>{t(item.text)}</p>
                                    </span>
                                </S.Item_Problems>
                            ))}
                        </S.List_Problems>
                    </S.Problems>
                    <S.Solutions>
                        <div className="last_child_content">
                            <div className="last_child_typography">
                                <h2>{t('home.necessaryTechnology.title_solutions')}</h2>
                                <span />
                            </div>
                            {list_solutions.map(item => (
                                <div className="list_solutions" key={item.id}>
                                    <div className="item_paragraf">
                                        <p>{t(item.text)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Image src={bannerLarge} alt="banner" draggable="false" />
                    </S.Solutions>
                </S.Cards>
            </S.Content>

            <S.Video_Container>
                <Image src={bg_wave} className="bg_wave" alt="bg_wave" draggable="false" />
                <Image src={wave_top} className="wave_top" alt="wave_top" draggable="false" />
                <Image src={wave_bottom} className="wave_bottom" alt="wave_top" draggable="false" />
                <div className="play">
                    <VideoHome src={renderSelectedScreen() ?? ''} lng={locale} />
                </div>
                <S.Video_Typography>
                    <h2>{t('home.necessaryTechnology.video.title')}</h2>
                    <p>{t('home.necessaryTechnology.video.sub_title')}</p>
                </S.Video_Typography>
            </S.Video_Container>
        </S.Container>
    );
};

export default NecessaryTechnologySection;
