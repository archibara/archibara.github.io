import type { Meta, StoryObj } from '@storybook/react';
import { ProfileHeader as Component } from './index.tsx';

const meta = {
  title: 'components',
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileHeader: Story = {
  args: {
    name: 'John Doe',
    isOnline: true,
    status: 'Looking for a job',
  }
};