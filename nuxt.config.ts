// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Nuxi Strap'
        }
    },
    css: [
        // '@fortawesome/fontawesome-svg-core/styles.css',
        '~/assets/style.scss'
    ],

    imports: {
        dirs: ['stores'],
    },


    modules: [

        '@vueuse/nuxt',
        '@nuxt/image-edge',
        '@nuxtjs/tailwindcss',
        'nuxt-headlessui',
        '@pinia/nuxt',
        // '@nuxthq/ui',

        // '@tailvue/nuxt',
        // 'nuxt-windicss',
        // '@sidebase/nuxt-auth',
        'nuxt-icons',
        'nuxt-icon',
        ['@nuxtjs/google-fonts', {
            families: {
                'Nunito': true,
                download: true,
                inject: true
            }
        }]
    ],
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
    image: {
        // Options
        // dir: 'public'
    },

    runtimeConfig: {
        jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
        jwtRefreshSecret: process.env.JWT_ACCESS_REFRESH_TOKEN_SECRET,
        jwtExpiresIn: process.env.JWT_EXPIRES_IN,
        jwtCookieExpiresIn: process.env.JWT_COOKIE_EXPIRES_IN,
        //         JWT_EXPIRES_IN
        // JWT_COOKIE_EXPIRES_IN

        // Cloudinary
        // cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
        // cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
        // cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
    }
})
