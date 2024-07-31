// Next
import Image from 'next/image';

// React
import { Fragment } from 'react';

// Styles
import * as S from './OurTeam.styles';

// Models
import { SectionProps } from 'models';

// Hook
import { useOurTeam } from './useOurTeam';

const OurTeamSection = ({ mobile }: SectionProps) => {
    const { t, list } = useOurTeam();

    return (
        <S.Container>
            <S.Typography>
                <h2>{t('about.ourTeamSection.title')}</h2>
                {!mobile && (
                    <p>
                        {t('about.ourTeamSection.paragraph')
                            .split('\n')
                            .map((line, index, arr) => (
                                <Fragment key={index}>
                                    {line}
                                    {index < arr.length - 1 && <br />}
                                </Fragment>
                            ))}
                    </p>
                )}
            </S.Typography>
            <S.Content>
                <S.List>
                    {list.map((item, index) => (
                        <S.Item key={index}>
                            <div className="border_radius">
                                <Image
                                    src={`https://storage.googleapis.com/waiuru-site/${item.photo}`}
                                    width={244.19}
                                    height={244.19}
                                    alt={item.name}
                                    draggable="false"
                                />
                            </div>
                            <S.Item_Typography>
                                <strong>{item.name}</strong>
                                <p>{item.function}</p>
                            </S.Item_Typography>
                        </S.Item>
                    ))}
                </S.List>
            </S.Content>
        </S.Container>
    );
};

export default OurTeamSection;
