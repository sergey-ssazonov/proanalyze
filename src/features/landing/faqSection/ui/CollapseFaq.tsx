"use client";

import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import React, { FC } from "react";
import FAQ_ITEMS from "../data/Faq.data";
import { useWindowWidth } from "@/src/shared/utils/useWindowWidth";

const CollapseFaq: FC = () => {
  const width = useWindowWidth();
  const itemsCollapseFaq = FAQ_ITEMS.map((el, index) => ({
    key: index.toString(),
    label: <h3 className="text-lg font-medium sm:text-xl">{el.question}</h3>,
    children: <p className="text-grayText">{el.answer}</p>,
    className: "bg-white mb-2 sm:p-4",
    style: { borderRadius: width && width < 640 ? 16 : 24 },
  }));

  return (
    <Collapse
      ghost
      accordion
      expandIcon={({ isActive }) =>
        isActive ? (
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primaryBlue sm:h-9 sm:w-9">
            <MinusOutlined style={{ fontSize: width && width < 640 ? 10 : 16, color: "#fff" }} />
          </div>
        ) : (
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primaryBlue sm:h-9 sm:w-9">
            <PlusOutlined style={{ fontSize: width && width < 640 ? 10 : 16, color: "#fff" }} />
          </div>
        )
      }
      expandIconPosition="end"
      style={{ border: "none" }}
      className="sm:oreder-2 order-1 w-full rounded-3xl"
      items={itemsCollapseFaq}
    />
  );
};

export default CollapseFaq;
