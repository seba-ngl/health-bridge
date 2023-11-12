import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            shadcn: '/src/shadcn',
            components: '/src/components',
            hooks: '/src/hooks'
        }
    },
    plugins: [react()]
});
