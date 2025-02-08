"use client";

import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { ILinkProps } from "../model/Link";

const AnchorLink: FC<ILinkProps> = ({ href, children, className }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    router.push(String(href));
  };
  return (
    <span className={className} onClick={handleClick}>
      {children}
    </span>
  );
};

export default AnchorLink;
