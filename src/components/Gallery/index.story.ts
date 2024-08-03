import type { Meta, StoryObj } from '@storybook/react';
import { Gallery as Component } from './index.tsx';

const meta = {
  title: 'components',
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gallery: Story = {
  args: {
    items: new Array(20).fill(null).map((_, i) => ({
      src: `https://cataas.com/cat?key=${i}`,
      label: `Placeholder ${i}`,
    }))
  }
};