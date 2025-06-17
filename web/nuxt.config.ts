// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      templateParams: {
        title: 'My Nuxt App', // Default title for the application
        separator: '|', // Separator used in the title template
        siteName: 'My Nuxt Site', // Name of the site for the title template
      },
      titleTemplate: '%s %separator %siteName', // Template for the title',
      htmlAttrs: {
        lang: 'en', // Set the language of the document
      },
      meta: [
        { name: 'description', content: 'A Nuxt.js application' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      STRAPI_URL: process.env.STRAPI_URL || 'http://localhost:1337',
    }
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/eslint',
  ],
})