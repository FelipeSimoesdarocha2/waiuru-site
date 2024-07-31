// i18n
import useTranslations from 'i18n';

// Constants
import { list } from './Employees.constants';

export const useEmployees = () => {
  const t = useTranslations();

  return {
    t,
    list,
  };
};
