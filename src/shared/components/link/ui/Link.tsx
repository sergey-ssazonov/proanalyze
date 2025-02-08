import React, { FC } from "react";
import Link from "next/link";
import { ILinkProps } from "../model/Link";

const BaseLink: FC<ILinkProps> = ({ href, children, className, ...props }) => {
  return (
    <Link href={href} {...props}>
      <span className={className}>{children}</span>
    </Link>
  );
};

export default BaseLink;
