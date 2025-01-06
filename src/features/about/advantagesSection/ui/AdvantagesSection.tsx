import { Col, Row } from "antd";
import Image from "next/image";
import React, { FC } from "react";
import ADVATAGES_DATA from "../data/Advatages.data";
import OnlineImage from "@/public/images/about/online-image.webp";
import { TitleSection } from "@/src/shared/components/titleSection";

const AdvantagesSection: FC = () => {
  return (
    <section>
      <TitleSection title="Сочетаем лучшие медицинские практики с инновациями" />

      <Row gutter={[20, 20]}>
        <Col lg={8} xs={24}>
          <div className="relative hidden min-h-64 w-full sm:block md:h-full">
            <Image
              src={OnlineImage.src}
              fill
              alt=""
              className="rounded-2xl object-cover"
              priority={true}
              loading="eager"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </Col>
        <Col lg={16} xs={24}>
          <Row
            className="px- rounded-2xl bg-white py-6 sm:px-16 sm:py-11"
            gutter={[0, { xs: 25, lg: 36 }]}
          >
            {ADVATAGES_DATA.map((advantage, index) => (
              <Col key={index} xs={12} sm={12} lg={8}>
                <div className="mx-auto flex w-5/6 flex-col items-center gap-1 sm:gap-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primaryBlue sm:h-24 sm:w-24">
                    <div className="scale-50 sm:scale-100">
                      <advantage.Icon />
                    </div>
                  </div>
                  <h3 className="text-center text-sm leading-6 sm:text-xl">{advantage.title}</h3>
                  <p className="text-center text-xs font-normal leading-5 sm:text-base">
                    {advantage.subTitle}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default AdvantagesSection;
