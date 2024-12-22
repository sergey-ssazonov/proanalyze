import { Col, Flex, Row } from "antd";
import Image from "next/image";
import React, { FC } from "react";
import ADVATAGES_DATA from "../data/Advatages.data";
import OnlineImage from "@/public/images/about/online-image.jpg";
import { TitleSection } from "@/src/shared/components/titleSection";

const AdvantagesSection: FC = () => {
  return (
    <section>
      <TitleSection title="Сочетаем лучшие медицинские практики с инновациями" />

      <Row gutter={[20, 20]}>
        <Col lg={8} xs={24}>
          <div className="relative min-h-64 w-full md:h-full">
            <Image
              src={OnlineImage.src}
              fill
              alt=""
              className="rounded-3xl object-cover"
              priority={true}
              loading="eager"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </Col>
        <Col lg={16} xs={24}>
          <Row
            className="rounded-3xl bg-white p-4 sm:px-16 sm:py-11"
            gutter={[0, { xs: 25, lg: 36 }]}
          >
            {ADVATAGES_DATA.map((advantage, index) => (
              <Col key={index} xs={24} sm={12} lg={8}>
                <Flex vertical align="center" gap={10} className="w-full">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primaryBlue">
                    <advantage.Icon />
                  </div>
                  <h3 className="w-52 text-center text-xl leading-6">{advantage.title}</h3>
                  <p className="w-52 text-center font-normal leading-5">{advantage.subTitle}</p>
                </Flex>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default AdvantagesSection;
