import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { I18nLocale, i18n } from '../src/i18n';

beforeAll(() => {
    i18n.changeLanguage(I18nLocale.EN);
});

afterEach(() => {
    cleanup();
});
