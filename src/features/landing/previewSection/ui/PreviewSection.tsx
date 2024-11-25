import { Button, Flex } from 'antd';
import Image from 'next/image';
import React, { FC } from 'react';
import PreviewImage from '@/public/images/preview-image.png';
import FlaskIcon from '@/public/icons/flask-icon.svg';
import HeardIcon from '@/public/icons/heard-icon.svg';
import InfoCard from './InfoCard';
import { TagSpan } from '@/src/shared/components/tagSpan';

const PreviewSection: FC = () => {
  return (
    <section className="w-full h-vh80 bg-white  rounded-3xl flex ">
      <Flex vertical justify="space-between" className="p-9 h-full  w-1/2">
        <Flex vertical gap={28}>
          <TagSpan className="py-2">Сервис</TagSpan>
          <h2 className="font-semibold text-5xl">Какие анализы сдать?</h2>
          <h3 className="text-2xl">
            Сервис по подготовке перечня необходимых анализов
          </h3>
          <Button className="max-w-56" type="primary" shape="round" size="large" >
            Список анализов
          </Button>
        </Flex>
        <div className="grid grid-cols-2 gap-2">
          <InfoCard
            text="Сократите количество визитов к врачу"
            iconUrl={HeardIcon.src}
            className="bg-primaryRed"
          />
          <InfoCard
            text="Подбор анализов в одном месте"
            iconUrl={FlaskIcon.src}
            className="bg-primaryBlue"
          />
        </div>
      </Flex>
      <Image
        src={PreviewImage.src}
        width={2000}
        height={2500}
        alt="Рука складывает пробирки"
        className="rounded-3xl object-cover w-1/2 h-auto"
        priority={true}
        loading="eager"
      />
    </section>
  );
};

export default PreviewSection;
