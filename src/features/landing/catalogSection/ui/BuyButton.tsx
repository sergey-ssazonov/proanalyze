"use client";

import { secondaryThemeAntd } from "@/src/shared/antd/theme";
import { useWindowWidth } from "@/src/shared/utils/useWindowWidth";
import { Button, ConfigProvider } from "antd";
import React from "react";

const BuyButton = () => {
  const width = useWindowWidth();
  return (
    <ConfigProvider theme={secondaryThemeAntd}>
      <Button
        className="sm:w-32"
        shape="round"
        type="primary"
        size={`${width && width < 640 ? "small" : "middle"}`}
      >
        Купить
      </Button>
    </ConfigProvider>
  );
};

export default BuyButton;
