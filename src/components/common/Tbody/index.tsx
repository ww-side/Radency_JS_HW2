import { FC } from 'react';
import TbodyRow from './TbodyRow';
import TbodyRowSummary from './TbodyRowSummary';
import { useAppSelector } from '../../../hooks/redux.ts';
import { Category } from '../../../models/category.ts';

export interface TbodyProps {
  template: string;
}

const Tbody: FC<TbodyProps> = ({ template }) => {
  const { notes, archive } = useAppSelector(state => state.table);

  if (template === 'main') {
    return (
      <tbody>
        {notes.map(note => (
          <TbodyRow
            key={note.id}
            note={note}
            editAction={true}
            archiveAction={true}
            deleteAction={true}
          />
        ))}
      </tbody>
    );
  }

  if (template === 'archive') {
    return (
      <tbody>
        {archive.map(note => (
          <TbodyRow
            key={note.id}
            note={note}
            editAction={false}
            archiveAction={false}
            deleteAction={true}
          />
        ))}
      </tbody>
    );
  }

  if (template === 'summary') {
    return (
      <tbody>
        {Object.values(Category).map((category, index) => (
          <TbodyRowSummary key={index} category={category} index={index} />
        ))}
      </tbody>
    );
  }
};

export default Tbody;
