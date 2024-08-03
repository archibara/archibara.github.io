import { TanStackRouterVite } from '@tanstack/router-vite-plugin';

export const tanstackRouterVitePlugin = TanStackRouterVite({
  routesDirectory: 'src/integrations/tanstack/routes',
  generatedRouteTree: 'src/integrations/tanstack/routeTree.gen.ts',
});
