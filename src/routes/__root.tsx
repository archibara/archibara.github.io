import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { PageTemplate } from '../ui/templates/Page.template.tsx';

export const Route = createRootRoute({
  component: () => (
    <>
      <PageTemplate>
        <Outlet/>
      </PageTemplate>
      <TanStackRouterDevtools/>
    </>
  ),
})