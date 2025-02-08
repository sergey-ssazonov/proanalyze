import Image from "next/image";
import React, { FC } from "react";
import FounderImage from "@/public/images/about/founder-image.webp";

const AboutClinicSection: FC = () => {
  return (
    <section className="flex w-full flex-col rounded-2xl bg-white sm:h-vh80 sm:flex-row sm:justify-between">
      <div className="flex w-full flex-col gap-4 p-4 sm:w-1/2 sm:p-11 lg:gap-5">
        <h2 className="text-2xl font-semibold sm:text-4xl">О клинике</h2>

        <p className="font-normal leading-6 lg:text-xl lg:leading-8">
          <span className="text-primaryBlue">Аймед</span> — социально ориентированная медицинская
          компания из Екатеринбурга с клиниками рядом с домом. Мы стремимся сделать медицинскую
          помощь доступной для каждого, используя передовые технологии и индивидуальный подход.
        </p>
        <p className="font-normal leading-6 lg:text-xl lg:leading-8">
          В наших клиниках работают высококвалифицированные специалисты, а пациенты чувствуют заботу
          и поддержку. Мы активно внедряем цифровые решения, в том числе онлайн-консультации, чтобы
          обеспечить удобство и эффективность взаимодействия с врачами.
        </p>
      </div>
      <div className="relative h-96 w-full sm:h-full sm:w-156">
        <Image
          src={FounderImage.src}
          fill
          alt="Founder, Главный врач-Максим Евгеньевич Поткин"
          className="rounded-2xl object-cover object-[50%_20%]"
          priority
          loading="eager"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <span className="absolute bottom-3 left-3 flex w-2/3 items-center justify-center rounded-xl bg-white bg-opacity-70 px-3 py-1 text-sm sm:bottom-5 sm:left-5 sm:w-fit sm:rounded-2xl sm:px-5 sm:py-2 sm:text-base">
          Главный врач - Максим Евгеньевич Поткин
        </span>
      </div>
    </section>
  );
};

export default AboutClinicSection;
