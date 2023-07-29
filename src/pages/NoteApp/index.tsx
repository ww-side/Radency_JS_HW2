import { useState } from 'react';
import NoteTable from '../../components/shared/NoteTable';
import Button from '../../components/common/Button';
import ModalAddNote from '../../components/shared/ModalAddNote';
import SummaryTable from '../../components/shared/SummaryTable';

const NoteApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <NoteTable />
      <Button color="blue" onClick={() => setIsModalOpen(!isModalOpen)}>
        Add a new note
      </Button>
      <ModalAddNote isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <SummaryTable />
    </>
  );
};

export default NoteApp;
