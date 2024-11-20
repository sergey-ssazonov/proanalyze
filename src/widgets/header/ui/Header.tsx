import { Logo } from "@/src/shared/components/logo";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { FC } from "react";

interface INavData {
  title: string;
  url: string;
}

const NavData: INavData[] = [
  { title: "Каталог анализов", url: "" },
  { title: "Подбор анализов", url: "" },
  { title: "О нас", url: "" },
  { title: "Отзывы", url: "" },
  { title: "Контакты", url: "" },
];

const Header: FC = () => {
  return (
    <header className="bg-white w-full h-16 flex justify-between items-center px-9 rounded-3xl mb-7">
      <Logo className="text-3xl" />
      <nav>
        <ul className="flex gap-6">
          {NavData.map((navEl, index) => (
            <li
              className="text-black hover:text-primaryBlue hover:cursor-pointer"
              key={index}
            >
              {navEl.title}
            </li>
          ))}
        </ul>
      </nav>
      <Button shape="circle" size="large" icon={<ShoppingCartOutlined />} />
    </header>
  );
};

export default Header;
