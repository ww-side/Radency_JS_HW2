import { FC, useState } from 'react';
import NoteTable from '../../components/shared/NoteTable';
import Button from '../../components/common/Button';
import Layout from '../../components/common/Layout';
import ModalAddNote from '../../components/shared/ModalAddNote';
import SummaryTable from '../../components/shared/SummaryTable';
import ArchiveTable from '../../components/shared/ArchiveTable';

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
