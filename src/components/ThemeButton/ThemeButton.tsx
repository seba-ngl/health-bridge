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

        setTheme(Themes.Light);
    }

    return (
        <Button onClick={handleClick} className="bg-transparent hover:bg-transparent">
            {theme === Themes.Dark ? (
                <CiDark size={32} className="text-gray-700" data-testid="dark-icon" />
            ) : (
                <CiLight size={32} className="text-gray-700" data-testid="light-icon" />
            )}
        </Button>
    );
}
