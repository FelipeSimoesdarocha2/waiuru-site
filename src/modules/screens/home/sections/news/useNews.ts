// Next
import useTranslations from 'i18n';

// Constants
import { list as originalList } from './News.constants';

export const useNews = () => {
  const t = useTranslations();

  const list = originalList.slice().sort((a, b) => {
    const dateA = new Date(a.create_at).getTime();
    const dateB = new Date(b.create_at).getTime();

    return dateB - dateA;
  });

  return {
    t,
    list,
  };
};
