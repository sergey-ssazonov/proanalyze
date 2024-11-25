'use client';

import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import React, { FC } from 'react';
import { FaqData } from '../data/Faq.data';

const CollapseFaq: FC = () => {
  const itemsCollapseFaq = FaqData.map((el, index) => ({
    key: index.toString(),
    label: <h3 className="text-2xl font-medium">{el.title}</h3>,
    children: <p className="text-grayText">{el.children}</p>,
    className: 'bg-white rounded-3xl mb-2 p-4',
    style: { borderRadius: 24 },
  }));

  return (
    <Collapse
      ghost
      accordion
      expandIcon={({ isActive }) =>
        isActive ? (
          <div className="h-9 w-9 flex justify-center items-center bg-primaryBlue rounded-full">
            <MinusOutlined style={{ fontSize: 16, color: '#fff' }} />
          </div>
        ) : (
          <div className="h-9 w-9 flex justify-center items-center bg-primaryBlue rounded-full">
            <PlusOutlined style={{ fontSize: 16, color: '#fff' }} />
          </div>
        )
      }
      expandIconPosition="end"
      style={{ border: 'none' }}
      className="w-full rounded-3xl"
      items={itemsCollapseFaq}
    />
  );
};

export default CollapseFaq;
