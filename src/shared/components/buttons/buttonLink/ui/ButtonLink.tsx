"use client";

import { Button } from "antd";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface IButtonLinkProps {
  href: string;
  children: string;
  clasName?: string;
}

const ButtonLink: FC<IButtonLinkProps> = ({ href, children, clasName }) => {
  const router = useRouter();
  return (
    <Button
      size="large"
      shape="round"
      type="primary"
      className={clasName}
      onClick={() => router.push(href)}
    >
      {children}
    </Button>
  );
};

export default ButtonLink;
