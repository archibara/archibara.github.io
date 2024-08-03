import type { Meta, StoryObj } from '@storybook/react';
// used alias path to mock this import
import { Link as Component } from 'src/components/Link';

const meta = {
  title: 'components',
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Link: Story = {
  args: {
    children: 'children',
    href: 'https://www.google.com',
  },
};
