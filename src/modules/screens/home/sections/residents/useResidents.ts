// i18n
import useTranslations from 'i18n';

// Constants
import { list } from './Residents.constants';

export const useResidents = () => {
  const t = useTranslations();

  return {
    t,
    list,
  };
};
