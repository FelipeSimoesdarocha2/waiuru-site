// React
import useTranslations from 'i18n';

// Constants
import { appData } from './AppsInStores.constants';

export const useAppsStores = () => {
  const t = useTranslations();

  return {
    t,
    appData,
  };
};
