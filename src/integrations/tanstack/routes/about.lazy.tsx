import { createLazyFileRoute } from '@tanstack/react-router';
import { About } from 'src/pages/About';

export const Route = createLazyFileRoute('/about')({
  component: About,
});
