import type { Meta, StoryObj } from '@storybook/react';
import { Avatar as Component } from './index.tsx';

const meta = {
  title: 'uikit',
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Avatar: Story = {
  args: {
    src: 'https://cataas.com/cat?width=200&height=100',
  },
};
