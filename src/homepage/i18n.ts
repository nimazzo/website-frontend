import i18n from 'i18next';
import {initReactI18next} from "react-i18next";

import en from './locales/en/translation.json';
import de from './locales/de/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {translation: en},
      de: {translation: de},
    },
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  })
  .then(() => {
    console.log('i18n initialized');
  })
  .catch((error) => {
    console.error('i18n init failed:', error);
  });

export default i18n;