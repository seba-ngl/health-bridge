import { useTranslation } from 'react-i18next';

import { LanguageSelect } from 'components/LanguageSelect';
import { ThemeButton } from 'components/ThemeButton';

export function Main() {
    const { t } = useTranslation();

    return (
        <div className="flex gap-4">
            <LanguageSelect />
            <ThemeButton />
        </div>
    );
}
