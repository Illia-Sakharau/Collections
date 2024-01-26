import { useTranslation } from 'react-i18next';

export default () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language.split('-')[0] as 'en' | 'ru';

  return currentLang;
};
