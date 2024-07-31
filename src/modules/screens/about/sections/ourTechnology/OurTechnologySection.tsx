// Next
import Image from 'next/image';

// Styles
import * as S from './OurTechnology.styles';

// Models
import { SectionProps } from 'models';

// Hook
import { useOurTechnology } from './useOurTechnology';

const OurTechnologySection = ({ mobile }: SectionProps) => {
    const { t, list } = useOurTechnology();

    return (
        <S.Container>
            <S.Typography>
                <h2>{t('about.ourTechnologySection.title')}</h2>
                {!mobile && <p>{t('about.ourTechnologySection.sub_title')}</p>}
            </S.Typography>
            <S.Content>
                <S.List>
                    {list.map(item => (
                        <S.Item key={item.id}>
                            <figure>
                                <Image src={item.photo} alt={item.name} draggable="false" />
                            </figure>
                            <div className="typography">
                                <h3>{t(item.name)}</h3>
                                <p> {t(item.description)}</p>
                            </div>
                        </S.Item>
                    ))}
                </S.List>
            </S.Content>
        </S.Container>
    );
};

export default OurTechnologySection;
