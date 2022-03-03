import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    build: {
        transpile: [],
    },
    css: ['@/assets/scss/app.scss'],
    // builder: 'vite',
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/variables.scss";',
                },
            },
        },
        build: {
            sourcemap: true,
        },
    },
})
