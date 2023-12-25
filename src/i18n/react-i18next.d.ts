import 'i18next';

import { I18nLocale } from './locale';
// import all namespaces (for the default language, only)
import en from './locale/en_US.json';

declare module 'i18next' {
    // Extend CustomTypeOptions
    interface CustomTypeOptions {
        defaultNS: I18nLocale.EN;
        resources: {
            [I18nLocale.EN]: typeof en;
        };
    }
}
