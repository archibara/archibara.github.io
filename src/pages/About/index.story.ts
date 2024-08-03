import type { Meta, StoryObj } from '@storybook/react';
import { About as Component } from './index.tsx';

const meta = {
  title: 'pages',
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const About: Story = {
  args: {},
};
