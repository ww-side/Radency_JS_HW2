import { ChangeEvent, FC } from 'react';
import { Category } from '../../../models/category.ts';

export interface SelectProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<SelectProps> = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="block text-gray-700 appearance-none w-full
      bg-white border border-gray-300 rounded py-2 px-3
      leading-tight focus:outline-none focus:shadow-outline"
    >
      {Object.values(Category).map(categoryValue => (
        <option key={categoryValue} value={categoryValue}>
          {categoryValue}
        </option>
      ))}
    </select>
  );
};

export default Select;
