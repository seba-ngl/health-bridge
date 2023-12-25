import { useTranslation } from 'react-i18next';

import { LanguageSelect } from 'components/LanguageSelect';
import { ThemeButton } from 'components/ThemeButton';
import { Button } from 'shadcn/ui/button';

export function Main() {
    const { t } = useTranslation();

    return (
        <div className="flex gap-4">
            <Button>{t('web.test')}</Button>
            <LanguageSelect />
            <ThemeButton />
        </div>
    );
}
