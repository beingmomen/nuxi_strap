// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Nuxi Strap'
        }
    },
    modules: [
        '@vueuse/nuxt',
        '@nuxt/image-edge',
        '@nuxtjs/tailwindcss',
        'nuxt-headlessui',
        '@pinia/nuxt',
    ],
    image: {
        // Options
    },
})
