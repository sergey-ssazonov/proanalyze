import { FC } from "react";
import Link from "next/link";
import HEADER_ITEMS from "../data/Header.data";

interface INavigationProps {
  className?: string
}

const Navigation: FC<INavigationProps> = ({className}) => (
  <ul className={`flex gap-6 ${className}`}>
  {HEADER_ITEMS.map((navEl, index) => (
    <li className="text-black hover:cursor-pointer hover:text-primaryBlue" key={index}>
      <Link href={navEl.url}>{navEl.label}</Link>
    </li>
  ))}
</ul>
);

export default Navigation;
