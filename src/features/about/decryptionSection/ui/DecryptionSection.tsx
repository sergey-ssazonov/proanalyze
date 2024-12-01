import React, { FC } from "react";
import DecryptionImage from "@/public/images/about/decryption-image.png";
import { ButtonLink } from "@/src/shared/components/buttons/buttonLink";
import { Flex } from "antd";
import Image from "next/image";

const DecryptionSection: FC = () => {
  return (
    <section className="relative h-vh70 sm:h-fit">
      <div className="flex w-full flex-col justify-between overflow-visible rounded-3xl bg-white p-4 sm:mb-0 sm:flex-row sm:p-11">
        <Flex vertical justify="space-between" className="w-full gap-11 sm:w-1/2">
          <Flex vertical className="gap-5 sm:gap-8">
            <h2 className="text-3xl sm:text-5xl">Расшифровка анализов</h2>
            <p className="w-11/12 font-normal leading-6 sm:text-2xl">
              Получите профессиональную расшифровку результатов анализов. Мы объясним значения
              показателей и подскажем, что делать дальше для поддержания здоровья.
            </p>
          </Flex>
          <ButtonLink href="https://proanalizy.ru/">Расшифровать</ButtonLink>
        </Flex>

        <Image
          src={DecryptionImage.src}
          width={4000}
          height={4000}
          alt="Руки в синих медицинских перчатках работают с микроскопом, изучая образец."
          className="sm:h-100 absolute left-0 bottom-0 h-2/5 4 w-full rounded-3xl object-cover sm:static sm:w-2/5"
          priority 
        />
      </div>
    </section>
  );
};

export default DecryptionSection;
