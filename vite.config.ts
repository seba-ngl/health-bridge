import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            shadcn: '/src/shadcn',
            components: '/src/components',
            hooks: '/src/hooks',
            i18n: '/src/i18n'
        }
    },
    plugins: [react()]
});
