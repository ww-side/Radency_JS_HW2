import { ChangeEvent, FC } from 'react';

export interface InputProps {
  type: string;
  value: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ type, value, placeholder, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      className="appearance-none border rounded w-full py-2 px-3
      text-gray-700 leading-tight focus:outline-none
      focus:shadow-outline"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
