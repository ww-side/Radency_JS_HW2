import Table from '../../common/Table';
import Thead from '../../common/Thead';
import Tbody from '../../common/Tbody';
import { notesTitle } from '../../common/Thead/data.ts';

const ArchiveTable = () => {
  return (
    <div>
      <Table>
        <Thead data={notesTitle} />
        <Tbody template="archive" />
      </Table>
    </div>
  );
};

export default ArchiveTable;
