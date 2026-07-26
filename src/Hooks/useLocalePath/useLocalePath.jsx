import { useLocale } from '../../i18n/LocaleContext';

/**
 * Build a locale-prefixed path, e.g. /about → /bn/about
 */
export const useLocalePath = () => {
  const { localizedPath, locale } = useLocale();
  return { localizedPath, locale };
};

export default useLocalePath;
