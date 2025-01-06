"use client";

import { secondaryThemeAntd } from "@/src/shared/antd/theme";
import { useWindowWidth } from "@/src/shared/utils/useWindowWidth";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, ConfigProvider } from "antd";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface ILinkButtonProps {
  toUrl: string;
}

const LinkButton: FC<ILinkButtonProps> = ({ toUrl }) => {
  const router = useRouter();
  const width = useWindowWidth();

  return (
    <ConfigProvider theme={secondaryThemeAntd}>
      <span className="absolute right-2 top-2 z-10 sm:right-4 sm:top-4">
        <Button
          icon={<ArrowRightOutlined style={{ transform: "rotate(-45deg)" }} />}
          shape="circle"
          onClick={() => router.push(toUrl)}
          size={`${width && width < 640 ? "small" : "middle"}`}
        />
      </span>
    </ConfigProvider>
  );
};

export default LinkButton;
