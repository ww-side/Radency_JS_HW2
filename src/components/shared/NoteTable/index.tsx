import { FC } from 'react';
import Table from '../../common/Table';
import Thead from '../../common/Thead';
import Tbody from '../../common/Tbody';
import { notesTitle } from '../../common/Thead/data.ts';

const NoteTable: FC = () => {
  return (
    <Table>
      <Thead data={notesTitle} />
      <Tbody template="main" />
    </Table>
  );
};

export default NoteTable;
