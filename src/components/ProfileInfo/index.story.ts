import type { Meta, StoryObj } from '@storybook/react';
import { ProfileInfo as Component } from './index.tsx';

const meta = {
  title: 'components',
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileInfo: Story = {
  args: {
    dob: new Date(0),
    location: {
      city: 'Carretera Tulum',
      coords: {
        lat: 20.395914,
        long: -87.312324
      }
    }
  }
};