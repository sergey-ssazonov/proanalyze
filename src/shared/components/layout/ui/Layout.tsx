import { Header } from '@/src/features/header';
import React, { FC } from 'react';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <body className="px-10 py-4">
      <Header />
      <main>{children}</main>
    </body>
  );
};

export default Layout;
