"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";

interface ILogoProps {
  className?: string;
}

const Logo: FC<ILogoProps> = ({ className }) => {
  const router = useRouter();

  return (
    <h2
      onClick={() => router.push("/")}
      className={`font-bold text-primaryRed hover:cursor-pointer ${className}`}
    >
      Про
      <span className="text-primaryBlue">анализы</span>
    </h2>
  );
};

export default Logo;
