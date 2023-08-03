import React, { FC } from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className="m-8">{children}</div>;
};

export default Layout;
