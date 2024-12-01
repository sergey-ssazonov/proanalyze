"use client";

import { Col, Flex, Row } from "antd";
// import Image from "next/image";
import React, { FC } from "react";
import ADVATAGES_DATA from "../data/Advatages.data";

const AdvantagesSection: FC = () => {
  return (
    <section>
      <h2 className="mb-9 w-2/3 text-5xl">Сочетаем лучшие медицинские практики с инновациями </h2>

      {/* <Image
        src={PreviewImage.src}
        width={2000}
        height={2500}
        alt="Рука складывает пробирки"
        className="rounded-3xl object-cover w-1/2 h-auto"
        priority={true}
        loading="eager"
      /> */}
      <Flex gap={20}>
        <div className="h-full w-1/3 rounded-3xl bg-primaryBlue" />
        <Row className="w-2/3 rounded-3xl bg-white px-16 py-11" gutter={[20, 40]}>
          {ADVATAGES_DATA.map((advantage, index) => (
            <Col key={index} span={8}>
              <Flex vertical align="center" gap={10} className="w-52">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primaryBlue">
                  <advantage.Icon />
                </div>
                <h3 className="text-center text-xl leading-6">{advantage.title}</h3>
                <p className="text-center font-normal leading-5">{advantage.subTitle}</p>
              </Flex>
            </Col>
          ))}
        </Row>
      </Flex>
    </section>
  );
};

export default AdvantagesSection;
