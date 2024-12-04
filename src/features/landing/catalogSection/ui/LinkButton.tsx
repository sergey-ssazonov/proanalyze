"use client";

import { useWindowWidth } from "@/src/shared/utils/useWindowWidth";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface ILinkButtonProps {
  toUrl: string;
}

const LinkButton: FC<ILinkButtonProps> = ({ toUrl }) => {
  const router = useRouter();
  const width = useWindowWidth();

  return (
    <span className="absolute right-2 top-2 z-10 sm:right-4 sm:top-4">
      <Button
        icon={<ArrowRightOutlined style={{ transform: "rotate(-45deg)" }} />}
        shape="circle"
        onClick={() => router.push(toUrl)}
        size={`${width && width < 640 ? "small" : "middle"}`}
      />
    </span>
  );
};

export default LinkButton;
