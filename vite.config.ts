/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
//@ts-expect-error for some reason the test setup errors out
export default defineConfig({
    resolve: {
        alias: {
            shadcn: '/src/shadcn',
            components: '/src/components',
            hooks: '/src/hooks',
            i18n: '/src/i18n'
        }
    },
    plugins: [react()],
    test: {
        environment: 'jsdom',
        setupFiles: ['./tests/setup.ts'],
        testMatch: ['./src/**/*.test.{ts,tsx}'],
        globals: true
    }
});
