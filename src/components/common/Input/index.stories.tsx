import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Input, { InputProps } from './index.tsx';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;

type Story = StoryObj<InputProps>;

export const Default: Story = (args: InputProps) => {
  const [value, setValue] = useState(args.value || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <Input {...args} value={value} onChange={handleChange} />;
};

Default.args = {
  type: 'text',
  placeholder: 'Enter a text',
};
