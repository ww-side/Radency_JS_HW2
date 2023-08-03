import { Meta, StoryObj } from '@storybook/react';
import IconBtn, { IconBtnProps } from './index.tsx';
import { BiSolidMessageError } from 'react-icons/bi';

const meta: Meta<typeof IconBtn> = {
  component: IconBtn,
};

export default meta;

type Story = StoryObj<IconBtnProps>;

export const Default: Story = (args: IconBtnProps) => (
  <IconBtn {...args}>{args.icon}</IconBtn>
);

Default.args = {
  icon: <BiSolidMessageError size={50} />,
  onClick: () => console.log('Icon btn'),
};
