import { Meta, StoryObj } from '@storybook/react';
import Table, { TableProps } from './index.tsx';
import Thead from '../Thead';
import { summaryTitles } from '../Thead/data.ts';

const meta: Meta<typeof Table> = {
  component: Table,
};

export default meta;

type Story = StoryObj<TableProps>;

export const Default: Story = (args: TableProps) => (
  <Table>{args.children}</Table>
);

Default.args = {
  children: <Thead data={summaryTitles} />,
};
