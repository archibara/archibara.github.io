import 'src/integrations/tailwindcss/index.css';
import { routerProvider } from 'src/integrations/tanstack/routerProvider.tsx';
import { initReactDom } from 'src/integrations/react-dom/initReactDom.tsx';

initReactDom(routerProvider)