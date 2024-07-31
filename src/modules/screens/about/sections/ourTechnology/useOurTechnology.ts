// Constants
import useTranslations from 'i18n';

// i18n
import { list } from './OurTechnology.constants';

export const useOurTechnology = () => {
    const t = useTranslations();

    return { t, list };
};
