"use client";

import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import React, { FC } from "react";
import FAQ_ITEMS from "../data/Faq.data";

const CollapseFaq: FC = () => {
  const itemsCollapseFaq = FAQ_ITEMS.map((el, index) => ({
    key: index.toString(),
    label: <h3 className="text-2xl font-medium">{el.question}</h3>,
    children: <p className="text-grayText">{el.answer}</p>,
    className: "bg-white rounded-3xl mb-2 p-4",
    style: { borderRadius: 24 },
  }));

  return (
    <Collapse
      ghost
      accordion
      expandIcon={({ isActive }) =>
        isActive ? (
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primaryBlue">
            <MinusOutlined style={{ fontSize: 16, color: "#fff" }} />
          </div>
        ) : (
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primaryBlue">
            <PlusOutlined style={{ fontSize: 16, color: "#fff" }} />
          </div>
        )
      }
      expandIconPosition="end"
      style={{ border: "none" }}
      className="w-full rounded-3xl"
      items={itemsCollapseFaq}
    />
  );
};

export default CollapseFaq;
