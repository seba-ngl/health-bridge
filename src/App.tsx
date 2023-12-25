import { useTranslation } from 'react-i18next';

import { LanguageSelect } from 'components/LanguageSelect';
import { Button } from 'shadcn/ui/button';

export function App() {
    const { t } = useTranslation();

    return (
        <div className="text-3xl">
            <Button>{t('web.test')}</Button>
            <LanguageSelect />
        </div>
    );
}
