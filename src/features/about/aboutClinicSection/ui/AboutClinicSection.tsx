import Image from 'next/image';
import React, { FC } from 'react';
import FounderImage from '@/public/images/about/founder-image.jpg';
import { Flex } from 'antd';

const AboutClinicSection: FC = () => {
  return (
    <section className="w-full h-vh80 bg-white  rounded-3xl flex ">
      <Flex vertical gap={20} className="p-11 w-1/2">
        <h2 className="text-5xl font-semibold">О клинике</h2>

        <p className="text-2xl font-normal leading-8">
          <span className="text-primaryBlue">Аймед</span> — социально
          ориентированная медицинская компания из Екатеринбурга с клиниками
          рядом с домом. Мы стремимся сделать медицинскую помощь доступной для
          каждого, используя передовые технологии и индивидуальный подход.
        </p>
        <p className="text-2xl font-normal leading-8">
          В наших клиниках работают высококвалифицированные специалисты, а
          пациенты чувствуют заботу и поддержку. Мы активно внедряем цифровые
          решения, в том числе онлайн-консультации, чтобы обеспечить удобство и
          эффективность взаимодействия с врачами.
        </p>
      </Flex>
      <div className="w-156 relative h-full">
        <Image
          src={FounderImage.src}
          fill
          alt="Founder, Главный врач-Максим Евгеньевич Поткин"
          className="rounded-3xl object-cover"
          priority={true}
          loading="eager"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="bg-white bg-opacity-70 rounded-3xl flex justify-center items-center absolute left-5 bottom-5 px-5 py-2">
          Founder, Главный врач - Максим Евгеньевич Поткин
        </span>
      </div>
    </section>
  );
};

export default AboutClinicSection;
