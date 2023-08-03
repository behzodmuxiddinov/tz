import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import eng from './lng/eng.json'
import ru from './lng/ru.json'
import uz from './lng/uz.json'

i18n
.use(initReactI18next)
.init({
    resources : {
        uz : {
            translation : uz
        },
        eng : {
            translation : eng
        },
        ru : {
            translation : ru
        }
    },
    lng : "eng",
})

// import i18n from "i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';
// import { initReactI18next } from "react-i18next";
// import HttpApi from "i18next-http-backend";

// i18n.use(initReactI18next).use(LanguageDetector).use(HttpApi).init({
//   supportedLngs: ['eng', 'ru', 'uz'],
//     fallbackLng: "ru",
//     detection: {
//       order: ['htmlTag','cookie', 'localStorage', 'path', 'subdomain'],
//     },
//     backend: {
//       loadPath: `/public/lng/${fallbackLng}/translation.json`,
//     },
//     react: {useSuspense: false}
//   });

export default i18n