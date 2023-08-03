import React, { FC } from 'react';

export interface IconBtnProps {
  onClick: () => void;
  icon: React.ReactNode;
}

const IconBtn: FC<IconBtnProps> = ({ icon, onClick }) => {
  return <button onClick={onClick}>{icon}</button>;
};

export default IconBtn;
