// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from 'path'
export default defineNuxtConfig({
  alias: {
    'n3-components': resolve(__dirname, 'components'),
    'n3-layouts': resolve(__dirname, 'layouts'),
    // '@shared': resolve(__dirname, '../shared'),
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  devServer: {
    port: 3001,
  }
})
