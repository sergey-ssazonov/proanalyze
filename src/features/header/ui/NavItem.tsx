import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import INavigationItem from "@/src/shared/types/navigation";

interface INavigationProps {
  className?: string;
  navItems: INavigationItem[];
}

const Navigation: FC<INavigationProps> = ({ className, navItems }) => {
  const router = useRouter();

  return (
    <ul className={`flex gap-6 ${className}`}>
      {navItems.map((navEl, index) => (
        <li className="text-black hover:cursor-pointer hover:text-primaryBlue" key={index}>
          <Link onClick={() => router.push(navEl.url)} href={navEl.url}>
            {navEl.label}{" "}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
