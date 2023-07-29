import { FC } from 'react';
import Table from '../../common/Table';
import Thead from '../../common/Thead';
import Tbody from '../../common/Tbody';
import { summaryTitles } from '../../common/Thead/data.ts';

const SummaryTable: FC = () => {
  return (
    <Table>
      <Thead data={summaryTitles} />
      <Tbody template="summary" />
    </Table>
  );
};

export default SummaryTable;
