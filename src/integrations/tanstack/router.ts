import { createRouter } from '@tanstack/react-router';
import { routeTree } from 'src/integrations/tanstack/routeTree.gen.ts';

export const router = createRouter({
  routeTree,
});
