import { i18n } from 'i18n';
import { I18nLocale } from 'i18n/locale';

export const languages = [
    {
        value: I18nLocale.EN,
        display: i18n.t('web.language.en')
    },
    {
        value: I18nLocale.ES,
        display: i18n.t('web.language.es')
    }
];

export function handleChange(value: I18nLocale) {
    i18n.changeLanguage(value);
}
