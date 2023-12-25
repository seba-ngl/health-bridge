import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';

import { I18nLocale } from 'i18n';
import {
    Select,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectContent as ShadcnContent
} from 'shadcn/ui/select';

export function LanguageSelect() {
    const { i18n } = useTranslation();

    function handleChange(value: I18nLocale) {
        i18n.changeLanguage(value);
    }

    return (
        <div className="inline-flex">
            <Select onValueChange={handleChange} defaultValue={i18n.language}>
                <SelectTrigger className="inline-flex gap-8">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent />
            </Select>
        </div>
    );
}

function SelectContent() {
    const { t } = useTranslation();

    const languages = [
        {
            flag: (
                <ReactCountryFlag
                    countryCode="US"
                    style={{
                        fontSize: '32px'
                    }}
                />
            ),
            value: I18nLocale.EN,
            display: t('web.language.en')
        },
        {
            flag: (
                <ReactCountryFlag
                    countryCode="ES"
                    style={{
                        fontSize: '32px'
                    }}
                />
            ),
            value: I18nLocale.ES,
            display: t('web.language.es')
        },
        {
            flag: (
                <ReactCountryFlag
                    countryCode="RO"
                    style={{
                        fontSize: '32px'
                    }}
                />
            ),
            value: I18nLocale.RO,
            display: t('web.language.ro')
        }
    ];

    return (
        <ShadcnContent test-id="language-select">
            {languages.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                    <div className="flex items-center gap-2">
                        {item.flag}
                        {item.display}
                    </div>
                </SelectItem>
            ))}
        </ShadcnContent>
    );
}
