import type { NuxtConfig } from '@nuxt/types'
import path from 'path'
import { Configuration, RuleSetRule } from 'webpack'

const config: NuxtConfig = {
    telemetry: false, //https://github.com/nuxt/telemetry

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxt-bootstrap',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/scss/index.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/composition-api/module',
        '@nuxt/typescript-build',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    ],
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extend(config: Configuration) {
            config.resolve = config.resolve || {}
            config.resolve.alias = config.resolve.alias || {}
            config.resolve.alias['n3-layouts'] = path.resolve(__dirname, '../frontend/apps/web-app/layouts')
            config.resolve.alias['n3-components'] = path.resolve(__dirname, '../frontend/apps/web-app/components')
        },
        loaders: {
            scss: {
                additionalData: `
              @import "~@/assets/scss/variables"; // override bootstrap variables and load to vue components
              @import "~bootstrap/scss/functions";
              @import "~bootstrap/scss/variables";
             `,
                sassOptions: {
                    // indentedSyntax: true,
                },
            }
        },

    }
}

export default config
