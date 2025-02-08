"use client";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Flex, Rate } from "antd";
import React, { FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { RIVIEW_ITEMS } from "../data/Review.data";
import { useWindowWidth } from "@/src/shared/utils/useWindowWidth";

const ReviewSection: FC = () => {
  const width = useWindowWidth();

  const swiperRef = useRef<SwiperCore | null>(null);

  const [isBeginningSlide, setIsBeginningSlide] = useState<boolean>(true);
  const [isEndSlide, setIsEndSlide] = useState<boolean>(false);

  const handleSlideChange = (swiper: SwiperCore) => {
    setIsBeginningSlide(swiper.isBeginning);
    setIsEndSlide(swiper.isEnd);
  };

  return (
    <section id="review_section" className="h-auto">
      <Flex gap={10} className="mb-6" justify="space-between">
        <h2 className="text-2xl sm:text-4xl">Отзывы пользователей сайта</h2>
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
      </Flex>
      <Swiper
        onSwiper={(swiperInstance) => (swiperRef.current = swiperInstance)}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        slidesPerView={width && width < 900 ? 1 : 3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper mb-11"
      >
        {RIVIEW_ITEMS.map((review, index) => (
          <SwiperSlide key={index}>
            <Flex
              vertical
              className="h-72 rounded-2xl bg-white px-4 pb-7 pt-3 sm:h-85 sm:px-6 sm:pt-5"
            >
              <h5 className="mb-1 text-xl sm:text-2xl">{review.name}</h5>
              <Rate
                allowHalf
                defaultValue={review.rate}
                disabled
                style={{ color: "#2976EC", fontSize: 16, marginRight: 4 }}
              />
              <p className="custom-scrollbar mt-4 overflow-y-auto text-sm font-normal sm:text-lg">
                {review.text}
              </p>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>

      <Button type="primary" shape="round" size="large">
        Оставить отзыв
      </Button>
    </section>
  );
};

export default ReviewSection;
