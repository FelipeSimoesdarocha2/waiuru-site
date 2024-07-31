// i18n
import useTranslations from 'i18n';

// Constants
import { list } from './OurTeam.constants';

export const useOurTeam = () => {
    const t = useTranslations();

    return { t, list };
};
