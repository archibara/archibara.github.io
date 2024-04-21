import { createLazyFileRoute } from '@tanstack/react-router'
import { ProfilePage } from '../ui/pages/Profile.page.tsx';

export const Route = createLazyFileRoute('/')({
  component: ProfilePage,
})