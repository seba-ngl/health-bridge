import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { I18nLocale, resources } from './locale.utils';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: I18nLocale.EN,
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        },
        resources
    });

export { i18n };
