import { useTranslation } from 'react-i18next';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'shadcn/ui/select';

import { handleChange, languages } from './LanguageSelect.utils';

export function LanguageSelect() {
    const { i18n } = useTranslation();

    return (
        <Select onValueChange={handleChange} defaultValue={i18n.language}>
            <SelectTrigger>
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {languages.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                        {item.display}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
