// i18n
import useTranslations from 'i18n';

// Constants
import { list } from './OurSolutions.constants';

export const useOurSolutions = () => {
    const t = useTranslations();

    return { t, list };
};
