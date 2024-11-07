import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    optimizeDeps: {
        include: ['highlight.js', 'highlight.js/lib/core'],
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern' // or "modern"
            },
            sass: {
                api: 'modern',
            },
        }
    },
};

export default config;