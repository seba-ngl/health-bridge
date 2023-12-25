import { useTranslation } from 'react-i18next';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'shadcn/ui/select';

import { I18nLocale } from 'i18n/locale';

export function LanguageSelect() {
    const { i18n, t } = useTranslation();

    const languages = [
        {
            value: I18nLocale.EN,
            display: t('web.language.en')
        },
        {
            value: I18nLocale.ES,
            display: t('web.language.es')
        },
        {
            value: I18nLocale.RO,
            display: t('web.language.ro')
        }
    ];

    function handleChange(value: I18nLocale) {
        i18n.changeLanguage(value);
    }

    return (
        <Select onValueChange={handleChange} defaultValue={i18n.language}>
            <SelectTrigger>
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {languages.map((item) => (
                    <SelectItem key={item.display} value={item.value}>
                        {item.display}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
