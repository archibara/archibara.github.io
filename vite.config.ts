import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths';
import { vitePluginPwa } from './src/integrations/pwa/vite-plugin-pwa.node';
import { tanstackRouterVitePlugin } from './src/integrations/tanstack/tanstack-router-vite-plugin.node';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tsconfigPaths(),
      vitePluginPwa,
      tanstackRouterVitePlugin,
    ],
  }
})
