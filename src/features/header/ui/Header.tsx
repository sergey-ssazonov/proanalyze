import { Logo } from "@/src/shared/components/logo";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import React, { FC } from "react";
import HEADER_ITEMS from "../data/HEADER.data";

const Header: FC = () => {
  return (
    <header className="mb-7 flex h-16 w-full items-center justify-between rounded-3xl bg-white px-9">
      <Logo className="text-3xl" />
      <nav>
        <ul className="flex gap-6">
          {HEADER_ITEMS.map((navEl, index) => (
            <li className="text-black hover:cursor-pointer hover:text-primaryBlue" key={index}>
              <Link href={navEl.url}>{navEl.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button shape="circle" icon={<ShoppingCartOutlined />} />
    </header>
  );
};

export default Header;

