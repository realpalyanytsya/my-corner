import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator';
import { Button } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    theme: { control: 'select', options: ['clear', 'primary'] }
  },
  parameters: {
    chromatic: { disableSnapshot: true }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryDark: Story = {
  args: {
    children: 'Click me',
    theme: 'primary'
  },
  decorators: [ThemeDecorator('dark-theme')]
};

export const PrimaryLight: Story = {
  args: {
    children: 'Click me',
    theme: 'primary'
  },
  decorators: [ThemeDecorator('light-theme')]
};

export const ClearLight: Story = {
  args: {
    theme: 'clear',
    children: 'Click me'
  },
  decorators: [ThemeDecorator('light-theme')]
};

export const ClearDark: Story = {
  args: {
    theme: 'clear',
    children: 'Click me'
  },
  decorators: [ThemeDecorator('dark-theme')]
};
