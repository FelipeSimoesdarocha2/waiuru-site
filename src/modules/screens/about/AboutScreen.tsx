// Styles
import * as S from './About.styles';

// Components
import OurSolutions from 'components/OurSolutions/OurSolutions';

// Sections
import { HeroSection } from './sections/hero';
import { OurSolutionsSection } from './sections/ourSolutions';
import { OurTeamSection } from './sections/ourTeam';
import { OurTechnologySection } from './sections/ourTechnology';

// Hook
import { useAbout } from './useAbout';

const AboutScreen = () => {
    const { isMobile, our_solutions } = useAbout();

    return (
        <S.Container>
            <HeroSection mobile={isMobile} />
            <OurSolutionsSection mobile={isMobile} />
            <OurTeamSection mobile={isMobile} />
            <OurTechnologySection mobile={isMobile} />
            <OurSolutions
                data={our_solutions}
                title={'about.ourSolutions.title'}
                sub_title={'about.ourSolutions.sub_title'}
            />
        </S.Container>
    );
};

export default AboutScreen;
