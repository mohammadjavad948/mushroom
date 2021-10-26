import i18next from "i18next";
import {initReactI18next} from "react-i18next";

import en from './en/default.json';

i18next
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en
            }
        },
        lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    })