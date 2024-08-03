import { initReactDom } from 'src/integrations/react-dom/initReactDom.tsx';
import 'src/integrations/tailwindcss/index.css';
import { routerProvider } from 'src/integrations/tanstack/routerProvider.tsx';

initReactDom(routerProvider);
