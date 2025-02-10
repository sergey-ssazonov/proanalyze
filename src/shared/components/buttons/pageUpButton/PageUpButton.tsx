"use client";

import { UpOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import React, { FC, useEffect, useState } from "react";

const PageUpButton: FC = () => {
  const [pageDown, setPageDown] = useState<boolean>(false);

  // Кнопка скрола наверх
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setPageDown(true);
      } else if (scrolled <= 300) {
        setPageDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePageUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setPageDown(false);
  };
  return (
    <>
      {pageDown && (
        <FloatButton icon={<UpOutlined style={{ color: "#3981F1" }} />} onClick={handlePageUp} />
      )}
    </>
  );
};

export default PageUpButton;
