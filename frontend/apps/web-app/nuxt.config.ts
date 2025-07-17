// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  alias: {
    'n3-components': fileURLToPath(new URL('components', import.meta.url)),
    'n3-layouts': fileURLToPath(new URL('layouts', import.meta.url)),
    // '@shared': resolve(__dirname, '../shared'),
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    port: 3001,
  }
})
