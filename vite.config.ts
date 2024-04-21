import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

import {
  minimal2023Preset,
} from '@vite-pwa/assets-generator/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      pwaAssets: {
        preset: {
          ...minimal2023Preset,
          apple: {
            ...minimal2023Preset.apple,
            resizeOptions: {
              background: '#00001A',
            }
          },
          maskable: {
            ...minimal2023Preset.maskable,
            resizeOptions: {
              background: '#00001A',
            }
          },
          transparent: {
            ...minimal2023Preset.transparent,
            resizeOptions: {
              background: '#00001A',
            }
          }

        },
        image: 'public/logo.png',
      },
      registerType: 'autoUpdate',
      includeAssets: ['**/*'],
      manifest: {
        'theme_color': '#00001A',
        'background_color': '#00001A',
        'scope': '/',
        'start_url': '/',
      },
    }),
    react(),
  ],
})
