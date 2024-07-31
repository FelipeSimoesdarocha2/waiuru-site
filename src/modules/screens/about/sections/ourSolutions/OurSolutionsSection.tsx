// Next
import Image from 'next/image';

// React
import { Fragment } from 'react';

// Assets
import big_cloud from 'assets/images/about/ourSolutions/banner.svg';
import big_cloud_mobile from 'assets/images/about/ourSolutions/banner@mobile.svg';

// Styles
import * as S from './OurSolutions.styles';

// Models
import { SectionProps } from 'models';

// Hook
import { useOurSolutions } from './useOurSolutions';

const OurSolutionsSection = ({ mobile }: SectionProps) => {
    const { t, list } = useOurSolutions();

    return (
        <S.Container>
            <div className="first_child">
                <h2>
                    {t('about.solutionsSection.title')}
                    <span>{t('about.solutionsSection.title_bold')}</span>
                </h2>
                <div className="typography">
                    <div className="list">
                        {list.map(item => (
                            <div key={item.id} className="item">
                                <p>{t(item.name)}</p>
                            </div>
                        ))}
                    </div>
                    <p className="paragraph">
                        {t('about.solutionsSection.paragraph')
                            .split('\n')
                            .map((line, index, arr) => (
                                <Fragment key={index}>
                                    {line}
                                    {index < arr.length - 1 && <br />}
                                </Fragment>
                            ))}
                    </p>
                </div>
            </div>
            <div className="last_child">
                {!mobile && <Image src={big_cloud} className="big_cloud" alt="big_cloud" draggable="false" />}
                {mobile && (
                    <Image src={big_cloud_mobile} className="big_cloud_mobile" alt="big_cloud_mobile" draggable="false" />
                )}
            </div>
        </S.Container>
    );
};

export default OurSolutionsSection;
