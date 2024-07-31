// i18n
import useTranslations from 'i18n';

// Constants
import { list } from './EverythingDo.constants';

export const useEverythingDo = () => {
    const t = useTranslations();

    return {
        t,
        list,
    };
};
