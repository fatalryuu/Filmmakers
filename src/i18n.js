import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    supportedLngs: ['en', 'ru'],
    fallbackLng: 'en',
    detection: {
        order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
        caches: ['cookie']
    },
    backend: {
        loadPath: "/locales/{{lng}}/translation.json"
    },
    react: {
        useSuspense: true
    }
});

export default i18n;