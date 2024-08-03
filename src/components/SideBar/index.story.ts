import type { Meta, StoryObj } from '@storybook/react';
import { SideBar as Component } from './index.tsx';

const meta = {
  title: 'components',
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SideBar: Story = {
  args: {},
};
