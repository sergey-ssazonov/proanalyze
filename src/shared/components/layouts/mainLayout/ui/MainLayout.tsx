"use client";

import { Footer } from "@/src/features/footer";
import { Header } from "@/src/features/header";
import TLayout from "@/src/shared/types/layout";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

const MainLayout: FC<Readonly<TLayout>> = ({ children }) => {
  const pathname = usePathname();

  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <body className="px-4 py-4 sm:px-10">
      <Header />
      <main>{children}</main>
      {!isAdminRoute && <Footer />}
    </body>
  );
};

export default MainLayout;
