import { FC } from 'react';
import { useAppSelector } from '../../../../hooks/redux.ts';
import { Category } from '../../../../models/category.ts';
import { Note } from '../../../../models/note.ts';

interface TbodyRowSummaryProps {
  category: Category;
  index: number;
}

const TbodyRowSummary: FC<TbodyRowSummaryProps> = ({ category, index }) => {
  const { notes, archive } = useAppSelector(state => state.table);

  const getCategoryCount = (category: Category, items: Note[]) => {
    return items.filter(item => item.category === category).length;
  };

  return (
    <tr key={index}>
      <td className="border border-gray-400 px-4 py-2">{category}</td>
      <td className="border border-gray-400 px-4 py-2">
        {getCategoryCount(category, notes)}
      </td>
      <td className="border border-gray-400 px-4 py-2">
        {getCategoryCount(category, archive)}
      </td>
    </tr>
  );
};

export default TbodyRowSummary;
