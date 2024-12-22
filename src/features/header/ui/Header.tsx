"use client";

import { Logo } from "@/src/shared/components/logo";
import { CloseOutlined, MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";

import React, { FC, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Navigation from "./NavItem";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
      document.body.style.position = "fixed";
    } else {
      document.body.style.overflowY = "auto";
      document.body.style.position = "static";
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className="relative z-20 mb-4 flex h-16 w-full items-center justify-between rounded-3xl bg-white px-4 sm:px-9">
        <Logo className="text-2xl" />
        <nav className="hidden lg:block">
          <Navigation />
        </nav>
        <Flex gap={10}>
          <Button shape="circle" className="hidden lg:block" icon={<ShoppingCartOutlined />} />
          <span className="lg:hidden">
            <Button
              shape="circle"
              icon={isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
              onClick={toggleMenu}
            />
          </span>
        </Flex>
      </header>

      <div
        className={`absolute left-0 top-0 z-10 h-screen w-full bg-black bg-opacity-50 px-4 pt-24 shadow-lg transition-opacity duration-300 ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          className={`rounded-3xl bg-white px-9 py-5 transition-transform duration-500 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <Navigation className="flex-col" />
        </nav>
      </div>
    </>
  );
};

export default Header;
