import 'i18next';
// import all namespaces (for the default language, only)
import en from './locale/en_US.json';

declare module 'i18next' {
    // Extend CustomTypeOptions
    interface CustomTypeOptions {
        defaultNS: 'en';
        resources: {
            en: typeof en;
        };
    }
}
