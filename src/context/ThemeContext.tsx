import { createContext, useState } from 'react';

export enum Themes {
    Light = 'light',
    Dark = 'dark'
}

type ThemeContextProps = {
    theme: Themes;
    setTheme: (theme: Themes) => void;
};
export const ThemeContext = createContext<ThemeContextProps>({
    theme: Themes.Light,
    setTheme: () => {}
});

type ThemeProviderProps = {
    children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [internalTheme, setItermalTheme] = useState<Themes>(getInitialInternalTheme);

    function getInitialInternalTheme() {
        const theme = localStorage.getItem('theme');

        if (theme) {
            document.documentElement.setAttribute('data-theme', theme);
            return theme as Themes;
        }

        if (!theme) {
            const result = window.matchMedia('(prefers-color-scheme: dark)');
            const defaultTheme = result.matches ? Themes.Dark : Themes.Light;
            document.documentElement.setAttribute('data-theme', defaultTheme);
            localStorage.setItem('theme', defaultTheme);

            return defaultTheme;
        }

        // this shouldn't ever happen if the theme object from localStorage
        // is part of Themes
        return Themes.Light;
    }

    function handleThemeSwitch(theme: Themes) {
        setItermalTheme(theme);
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    return (
        <ThemeContext.Provider value={{ theme: internalTheme, setTheme: handleThemeSwitch }}>
            {children}
        </ThemeContext.Provider>
    );
};
