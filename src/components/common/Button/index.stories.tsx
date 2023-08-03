import { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './index.tsx';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: ['blue', 'black', 'white'],
    },
    onClick: {
      action: 'clicked',
      table: {
        disable: false,
      },
    },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = (args: ButtonProps) => (
  <Button {...args}>{args.children}</Button>
);

Default.args = {
  color: 'blue',
  children: 'Click me',
  onClick: e => console.log(e.target),
};
