import { Button, Flex } from "antd";
import Image from "next/image";
import React, { FC } from "react";
import PreviewImage from "@/public/images/landing/preview-image.png";
import FlaskIcon from "@/public/icons/flask-icon-2.svg";
import HeardIcon from "@/public/icons/heard-icon-2.svg";
import InfoCard from "./InfoCard";
import { TagSpan } from "@/src/shared/components/tagSpan";

const PreviewSection: FC = () => {
  return (
    <section className="flex w-full flex-col rounded-3xl bg-white sm:h-vh80 sm:flex-row">
      <Flex vertical justify="space-between" className="h-full w-full p-4 sm:w-1/2 sm:p-9">
        <div className="mb-11 flex flex-col gap-5 sm:gap-7">
          <TagSpan className="py-1">Сервис</TagSpan>
          <h2 className="text-3xl font-semibold sm:text-5xl">Какие анализы сдать?</h2>
          <h3 className="font-normal sm:text-2xl sm:font-medium">
            Сервис по подготовке перечня необходимых анализов
          </h3>
          <Button className="w-full sm:max-w-56" type="primary" shape="round" size="large">
            Список анализов
          </Button>
        </div>
        <div className="grid grid-cols-6 gap-2">
          <InfoCard
            text="Сократите количество визитов к врачу"
            Icon={HeardIcon}
            className="col-span-5 sm:col-span-3"
            color="bg-primaryRed"
          />
          <InfoCard
            text="Подбор анализов в одном месте"
            Icon={FlaskIcon}
            className="col-span-5 sm:col-span-3"
            color="bg-primaryBlue"
          />
        </div>
      </Flex>
      <Image
        src={PreviewImage.src}
        width={2000}
        height={2500}
        alt="Рука складывает пробирки"
        className="h-96 w-full rounded-3xl object-cover sm:h-auto sm:w-1/2"
        priority={true}
        loading="eager"
      />
    </section>
  );
};

export default PreviewSection;
