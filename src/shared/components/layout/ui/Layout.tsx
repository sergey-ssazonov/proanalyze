import { Footer } from "@/src/features/footer";
import { Header } from "@/src/features/header";
import React, { FC } from "react";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <body className="px-10 pt-4 pb-20">
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  );
};

export default Layout;
