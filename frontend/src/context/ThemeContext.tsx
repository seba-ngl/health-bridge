import { createContext, useEffect, useState } from 'react';

export enum Themes {
    Light = 'light',
    Dark = 'dark'
}

type ThemeContextProps = {
    theme: Themes | undefined;
    setTheme: (theme: Themes) => void;
};
export const ThemeContext = createContext<ThemeContextProps>({
    theme: undefined,
    setTheme: () => {}
});

type ThemeProviderProps = {
    children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [internalTheme, setInternalTheme] = useState<Themes | undefined>();

    useEffect(() => {
        const theme = localStorage.getItem('theme');

        // theme can technically be any string so chose to
        // make a double check instead of casting as Themes
        if (theme && (theme === Themes.Dark || theme === Themes.Light)) {
            document.documentElement.setAttribute('data-theme', theme);
            setInternalTheme(theme);
            return;
        }

        const result = window.matchMedia('(prefers-color-scheme: dark)');
        const defaultTheme = result.matches ? Themes.Dark : Themes.Light;
        document.documentElement.setAttribute('data-theme', defaultTheme);
        localStorage.setItem('theme', defaultTheme);
        setInternalTheme(defaultTheme);
    }, []);

    function handleThemeSwitch(theme: Themes) {
        setInternalTheme(theme);
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    return (
        <ThemeContext.Provider value={{ theme: internalTheme, setTheme: handleThemeSwitch }}>
            {children}
        </ThemeContext.Provider>
    );
};
