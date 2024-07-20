import type { Meta, StoryObj } from '@storybook/react';
import { Typography as Component } from './index';
import { VARIANT_CLASSNAME } from './constants.ts';
import { TypographyTags } from './types.ts';

const meta = {
  title: 'uikit',
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Typography: Story = {
  args: {
    children: 'text',
  },
  render: ({ children }) => <>
    {Object.entries(VARIANT_CLASSNAME)
      .map(([key, className]) =>
        <Component variant={key as TypographyTags}>
          {key}:{className}:{children}
        </Component>)}
  </>
};