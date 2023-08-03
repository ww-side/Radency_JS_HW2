import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CustomModal, { CustomModalProps } from './index.tsx';
import Button from '../Button';

const meta: Meta<typeof CustomModal> = {
  component: CustomModal,
};

export default meta;

type Story = StoryObj<CustomModalProps>;

export const Default: Story = (args: CustomModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Button color="blue" onClick={handleOpenModal}>
        Open modal
      </Button>
      <CustomModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {args.children}
      </CustomModal>
    </>
  );
};

Default.args = {
  children: 'Hello',
};
