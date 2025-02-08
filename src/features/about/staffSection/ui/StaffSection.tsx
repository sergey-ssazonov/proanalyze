"use client";

import { Button, Col, Flex, Row } from "antd";
import React, { FC, useRef, useState } from "react";
import STAFF_ITEMS from "../data/Staff.data";
import PersonCard from "./PersonCard";
import { TitleSection } from "@/src/shared/components/titleSection";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const StaffSection: FC = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const [isBeginningSlide, setIsBeginningSlide] = useState<boolean>(true);
  const [isEndSlide, setIsEndSlide] = useState<boolean>(false);

  const handleSlideChange = (swiper: SwiperCore) => {
    setIsBeginningSlide(swiper.isBeginning);
    setIsEndSlide(swiper.isEnd);
  };
  return (
    <>
      <section className="hidden h-auto sm:block">
        <TitleSection title="Коллектив" />

        <Row gutter={[20, 20]}>
          {STAFF_ITEMS.map((person, index) => (
            <Col key={index} xs={24} sm={12} lg={8} xl={6}>
              <PersonCard {...person} />
            </Col>
          ))}
        </Row>
      </section>
      <section className="block h-auto sm:hidden">
        <div className="mb-6 flex justify-between">
          <h2 className="text-2xl sm:text-4xl">Коллектив</h2>
          {/* <TitleSection title="Коллектив" /> */}

          <Flex gap={10}>
            <Button
              icon={<LeftOutlined />}
              shape="circle"
              type="primary"
              disabled={isBeginningSlide}
              onClick={() => swiperRef.current?.slidePrev()}
            />
            <Button
              icon={<RightOutlined />}
              shape="circle"
              type="primary"
              disabled={isEndSlide}
              onClick={() => swiperRef.current?.slideNext()}
            />
          </Flex>
        </div>
        <Swiper
          onSwiper={(swiperInstance) => (swiperRef.current = swiperInstance)}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {STAFF_ITEMS.map((person, index) => (
            <SwiperSlide key={index}>
              <div className="h-124">
                <PersonCard {...person} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default StaffSection;
