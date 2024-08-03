import type { Meta, StoryObj } from '@storybook/react';
import { Statistic as Component } from './index.tsx';

const meta = {
  title: 'components',
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Statistic: Story = {
  args: {
    friends: 30,
    followers: 100,
    photos: 150,
  },
};
