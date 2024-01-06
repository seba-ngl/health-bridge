import english from './locale/en_US.json';
import spanish from './locale/es_ES.json';
import romanian from './locale/ro_RO.json';

export enum I18nLocale {
    EN = 'en-US',
    ES = 'es-ES',
    RO = 'ro-RO'
}

export const resources = {
    [I18nLocale.EN]: {
        translation: {
            ...english
        }
    },
    [I18nLocale.ES]: {
        translation: {
            ...spanish
        }
    },
    [I18nLocale.RO]: {
        translation: {
            ...romanian
        }
    }
};
