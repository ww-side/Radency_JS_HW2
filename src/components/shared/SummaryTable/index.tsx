import Table from '../../common/Table';
import Thead from '../../common/Thead';
import { summaryTitles } from '../../common/Thead/data.ts';
import Tbody from '../../common/Tbody';

const SummaryTable = () => {
  return (
    <Table>
      <Thead data={summaryTitles} />
      <Tbody template="summary" />
    </Table>
  );
};

export default SummaryTable;
