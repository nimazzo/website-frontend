import i18n from 'i18next';
import {initReactI18next} from "react-i18next";

import en from './en/translation.json';
import de from './de/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {translation: en},
      de: {translation: de},
    },
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {
    console.log('i18n initialized');
  })
  .catch((error) => {
    console.error('i18n init failed:', error);
  });