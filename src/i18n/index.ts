import { useTranslations as useInternationalization } from 'next-intl';

export default function useTranslations() {
  const t = useInternationalization();

  return t;
}
