import { Footer } from "@/src/features/footer";
import { Header } from "@/src/features/header";
import React, { FC } from "react";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <body className="px-4 py-4 sm:px-10">
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  );
};

export default Layout;
