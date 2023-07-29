import { FC, useState } from 'react';
import NoteTable from '../../shared/NoteTable';
import Button from '../../common/Button';
import Layout from '../../common/Layout';
import ModalAddNote from '../../shared/ModalAddNote';
import SummaryTable from '../../shared/SummaryTable';
import ArchiveTable from '../../shared/ArchiveTable';

const NoteApp: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Layout>
      <NoteTable />
      <span className="flex justify-end">
        <Button color="blue" onClick={() => setIsModalOpen(!isModalOpen)}>
          Add a new note
        </Button>
      </span>
      <ModalAddNote isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <SummaryTable />
      <ArchiveTable />
    </Layout>
  );
};

export default NoteApp;
