import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { ThemeProvider } from 'context/ThemeContext';

import { ThemeButton } from './ThemeButton';

describe('ThemeButton', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should return the dark theme if the system preferences are dark', () => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            configurable: true,
            value: vi.fn().mockImplementation((query) => ({
                matches: true,
                media: query
            }))
        });

        render(
            <ThemeProvider>
                <ThemeButton />
            </ThemeProvider>
        );

        expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    });

    it('should switch the theme when clicking on the button', () => {
        render(
            <ThemeProvider>
                <ThemeButton />
            </ThemeProvider>
        );

        expect(document.documentElement.getAttribute('data-theme')).toBe('dark');

        const themeButton = screen.getByRole('button');
        fireEvent.click(themeButton);
        expect(document.documentElement.getAttribute('data-theme')).toBe('light');
        fireEvent.click(themeButton);
        expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    });
});
