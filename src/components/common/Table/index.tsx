import React, { FC } from 'react';

export interface TableProps {
  children: React.ReactNode;
}

const Table: FC<TableProps> = ({ children }) => {
  return (
    <table className="table w-full border-collapse border border-gray-400 mb-5">
      {children}
    </table>
  );
};

export default Table;
