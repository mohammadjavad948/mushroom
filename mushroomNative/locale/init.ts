import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './en/default.json';
import fa from './fa/default.json';

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    fa: {
      translation: fa,
    },
  },
  lng: 'fa', // if you're using a language detector, do not define the lng option
  fallbackLng: 'fa',
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});
