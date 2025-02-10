"use client";

import Image from "next/image";
import React, { useState } from "react";
import AlfaBankLogo from "@/public/images/landing/alfa-bank-logo.webp";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button } from "antd";

const AlfaBank = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <article>
      <div className="flex w-60 items-center gap-4">
        <Image
          src={AlfaBankLogo.src}
          width={115}
          height={40}
          alt="Альфа банк"
          className="h-10"
          loading="lazy"
        />

        <Button
          type="text"
          onClick={handleToggle}
          icon={isExpanded ? <UpOutlined /> : <DownOutlined />}
          style={{ color: "#9ea6b5" }}
        />
      </div>
      {isExpanded && (
        <div className="mt-2 text-sm font-normal text-lightGray2 sm:text-base">
          р/с: 40702810738230007184
          <br />
          БИК: 046577964
          <br />
          к/с: 30101810100000000964
        </div>
      )}
    </article>
  );
};

export default AlfaBank;
