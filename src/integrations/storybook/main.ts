import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: [`${process.cwd()}/src/**/*.story.@(ts|tsx)`],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) =>
    mergeConfig(config, {
      // use aliases from tsconfig
      plugins: [tsconfigPaths()],
      // mock tanstack router link by pure <a> tag for storybook:
      resolve: {
        alias: {
          'src/components/Link': `${process.cwd()}/src/components/Link/index.mock.tsx`,
        },
      },
    }),
};
export default config;
