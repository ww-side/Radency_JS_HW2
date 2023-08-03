import { FC } from 'react';
import { TheadItem } from '../../../models/thead.ts';

export interface TheadProps {
  data: TheadItem[];
}

const Thead: FC<TheadProps> = ({ data }) => {
  return (
    <thead>
      <tr>
        {data.map(item => (
          <th
            key={item.id}
            className="border border-gray-400 px-4 py-2 bg-blue-600 text-white"
          >
            {item.title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
