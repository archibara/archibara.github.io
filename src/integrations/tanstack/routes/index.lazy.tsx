import { createLazyFileRoute } from '@tanstack/react-router'
import { Profile } from 'src/pages/Profile';

export const Route = createLazyFileRoute('/')({
  component: Profile,
})