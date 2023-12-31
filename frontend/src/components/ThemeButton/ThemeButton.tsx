import { CiDark, CiLight } from 'react-icons/ci';

import { Themes } from 'context/ThemeContext';
import { useTheme } from 'hooks/context/useTheme';
import { Button } from 'shadcn/ui/button';

export function ThemeButton() {
    const { theme, setTheme } = useTheme();

    function handleClick() {
        if (theme === Themes.Light) {
            setTheme(Themes.Dark);
            return;
        }

        if (theme === Themes.Dark) setTheme(Themes.Light);
    }

    if (!theme) return null;

    return (
        <Button onClick={handleClick} className="bg-transparent hover:bg-transparent">
            {theme === Themes.Dark ? (
                <CiDark size={32} className="text-accent-foreground" />
            ) : (
                <CiLight size={32} className="text-accent-foreground" />
            )}
        </Button>
    );
}
