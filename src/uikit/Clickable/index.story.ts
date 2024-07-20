import type { Meta, StoryObj } from '@storybook/react';
import { Clickable as Component } from './index.tsx';

const meta = {
  title: 'uikit',
  component: Component,
  argTypes: {
    children: {
      control: 'text',
      description: 'children',
    }
  }
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clickable: Story = {
  args: {
    children: 'children',
  },
};