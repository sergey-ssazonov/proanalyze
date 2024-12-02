"use client";

import { Logo } from "@/src/shared/components/logo";
import { CloseOutlined, MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import React, { FC, useState } from "react";
import HEADER_ITEMS from "../data/Header.data";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <header className="mb-7 flex h-16 w-full items-center justify-between rounded-3xl bg-white px-9">
      <Logo className="text-3xl" />
      <nav className="hidden lg:block">
        <ul className="flex gap-6">
          {HEADER_ITEMS.map((navEl, index) => (
            <li className="text-black hover:cursor-pointer hover:text-primaryBlue" key={index}>
              <Link href={navEl.url}>{navEl.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button shape="circle" className="hidden lg:block" icon={<ShoppingCartOutlined />} />

      {/* <Button
        className="lg:hidden"
        shape="circle"
        icon={isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
        onClick={toggleMenu}
      />

      {isMenuOpen && (
        <div className="absolute left-0 top-0 z-50 h-screen w-full bg-white bg-opacity-90 p-6 shadow-lg">
          <nav>
            <ul className="flex flex-col gap-4">
              {HEADER_ITEMS.map((navEl, index) => (
                <li
                  className="text-lg text-black hover:cursor-pointer hover:text-primaryBlue"
                  key={index}
                >
                  <Link href={navEl.url} onClick={toggleMenu}>
                    {navEl.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )} */}
    </header>
  );
};

export default Header;
