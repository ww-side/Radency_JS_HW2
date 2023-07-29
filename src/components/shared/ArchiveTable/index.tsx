import { FC } from 'react';
import Table from '../../common/Table';
import Thead from '../../common/Thead';
import Tbody from '../../common/Tbody';
import { notesTitle } from '../../common/Thead/data.ts';

const ArchiveTable: FC = () => {
  return (
    <>
      <h2 className="text-3xl">Archive</h2>
      <Table>
        <Thead data={notesTitle} />
        <Tbody template="archive" />
      </Table>
    </>
  );
};

export default ArchiveTable;
