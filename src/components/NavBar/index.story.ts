import type { Meta, StoryObj } from '@storybook/react';
import { NavBar as Component } from './index.tsx';

const meta = {
  title: 'components',
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavBar: Story = {
  args: {},
};
