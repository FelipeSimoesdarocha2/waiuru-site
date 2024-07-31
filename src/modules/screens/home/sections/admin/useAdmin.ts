// i18n
import useTranslations from 'i18n';

// Constants
import { data_admin } from './Admin.constants';

export const useAdmin = () => {
  const t = useTranslations();

  return {
    t,
    data_admin,
  };
};
