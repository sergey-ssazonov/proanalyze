import { Col, Flex, Row } from "antd";
import Image from "next/image";
import React, { FC } from "react";
import StaffImage from "@/public/images/about/staff-image.webp";
import { ButtonLink } from "@/src/shared/components/buttons/buttonLink";
import STATISTIC_ITEMS from "../data/Statistic.data";

const StatisticSection: FC = () => {
  return (
    <section>
      <Row gutter={[20, 15]}>
        <Col xs={24} lg={14} className="order-2 md:order-1">
          <div className="relative min-h-64 w-full md:h-full">
            <Image
              src={StaffImage.src}
              fill
              alt="Группа медицинских специалистов, позирующих в клинике. Они одеты в белые халаты или медицинскую форму. В группе четыре женщины и трое мужчин, один человек сидит."
              className="rounded-2xl object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 67vw"
            />
          </div>
        </Col>
        <Col xs={24} lg={10} className="md:oreder-2 order-1">
          <div className="flex w-full flex-col justify-between gap-14 rounded-2xl bg-white p-4 sm:p-11">
            <div className="flex flex-col gap-5 sm:gap-8">
              <h2 className="text-2xl sm:text-4xl">Врачи клиники</h2>

              <Row gutter={[0, { xs: 25, sm: 25, md: 25, lg: 36 }]}>
                {STATISTIC_ITEMS.map((el, index) => (
                  <Col span={12} key={index}>
                    <Flex vertical className="w-32">
                      <span className="text-2xl font-semibold text-primaryBlue sm:text-4xl">
                        {el.digit}
                      </span>
                      <span className="text-lg leading-5 sm:text-xl">{el.title}</span>
                    </Flex>
                  </Col>
                ))}
              </Row>
            </div>
            <ButtonLink
              className="w-full sm:w-56"
              href="https://imedsvetliy.ru/podrobno"
              target="_blank"
            >
              Выберите врача
            </ButtonLink>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default StatisticSection;
