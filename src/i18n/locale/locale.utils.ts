import english from './en_US.json';
import spanish from './es_ES.json';

export enum I18nLocale {
    EN = 'en',
    ES = 'es'
}

export const resources = {
    es: {
        translation: {
            ...spanish
        }
    },
    en: {
        translation: {
            ...english
        }
    }
};
