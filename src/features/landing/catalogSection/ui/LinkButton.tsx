"use client";

import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface ILinkButtonProps {
  toUrl: string;
}

const LinkButton: FC<ILinkButtonProps> = ({ toUrl }) => {
  const router = useRouter();
  return (
    <span className="absolute right-4 top-4 z-10">
      <Button
        icon={<ArrowRightOutlined style={{ transform: "rotate(-45deg)" }} />}
        shape="circle"
        onClick={() => router.push(toUrl)}
      />
    </span>
  );
};

export default LinkButton;
