import { Meta, StoryObj } from '@storybook/react';
import Thead, { TheadProps } from './index.tsx';
import { summaryTitles } from './data.ts';

const meta: Meta<typeof Thead> = {
  component: Thead,
};

export default meta;

type Story = StoryObj<TheadProps>;

export const Default: Story = (args: TheadProps) => {
  return <Thead {...args} />;
};

Default.args = {
  data: summaryTitles,
};
