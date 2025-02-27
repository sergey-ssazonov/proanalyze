import { Flex } from "antd";
import Image from "next/image";
import React, { FC } from "react";
import PreviewImage from "@/public/images/landing/preview-image.webp";
import FlaskIcon from "@/public/icons/flask-icon-sm.svg";
import HeardIcon from "@/public/icons/heard-icon-sm.svg";
import TabletIcon from "@/public/icons/tablet-icon-sm.svg";
import YogaIcon from "@/public/icons/yoga-icon-sm.svg";
import InfoCard from "./InfoCard";
import { TagSpan } from "@/src/shared/components/tagSpan";
import { ButtonLink } from "@/src/shared/components/buttons/buttonLink";

const PreviewSection: FC = () => {
  return (
    <section className="flex w-full flex-col rounded-2xl bg-white sm:h-vh80 sm:flex-row">
      <Flex vertical justify="space-between" className="h-full w-full p-4 sm:w-1/2 sm:p-9">
        <div className="mb-11 flex flex-col gap-5 sm:gap-7">
          <TagSpan className="py-1">Сервис - конфигуратор анализов</TagSpan>
          <h2 className="text-3xl font-semibold sm:text-5xl">Какие анализы сдать?</h2>
          <h3 className="font-normal sm:text-2xl sm:font-medium">
            Сервис по подготовке перечня необходимых анализов
          </h3>
          <ButtonLink href="#catalog_section" className="w-full sm:max-w-56">
            Список анализов
          </ButtonLink>
        </div>
        <div className="grid grid-cols-6 gap-2">
          <InfoCard
            text="Сократите количество визитов к врачу"
            Icon={HeardIcon}
            classNameIcon="sm:scale-125"
            className="col-span-3"
            color="bg-primaryRed"
          />
          <InfoCard
            text="Подбор анализов в одном месте"
            Icon={FlaskIcon}
            classNameIcon="sm:scale-125"
            className="col-span-3"
            color="bg-primaryBlue"
          />
          <InfoCard
            text="Чек-апы всего организма"
            Icon={TabletIcon}
            className="col-span-3"
            color="bg-primaryBlue"
          />
          <InfoCard
            text="Для всей семьи"
            Icon={YogaIcon}
            className="col-span-3"
            color="bg-primaryRed"
          />
        </div>
      </Flex>
      <Image
        src={PreviewImage.src}
        width={2000}
        height={2500}
        alt="Рука складывает пробирки"
        className="h-64 w-full rounded-2xl object-cover sm:h-auto sm:w-1/2"
        priority={true}
        loading="eager"
      />
    </section>
  );
};

export default PreviewSection;
