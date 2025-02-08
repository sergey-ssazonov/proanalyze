import React, { FC } from "react";
import DecryptionImage from "@/public/images/about/decryption-image.webp";
import { ButtonLink } from "@/src/shared/components/buttons/buttonLink";
import { Col, Flex, Row } from "antd";
import Image from "next/image";

const DecryptionSection: FC = () => {
  return (
    <section>
      <Row gutter={[20, 15]}>
        <Col xs={24} lg={11}>
          <Flex
            vertical
            justify="space-between"
            className="w-full gap-11 rounded-2xl bg-white p-4 sm:p-11"
          >
            <Flex vertical className="gap-5 sm:gap-8">
              <h2 className="text-2xl sm:text-4xl">Расшифровка анализов</h2>
              <p className="w-11/12 font-normal leading-6 sm:text-2xl">
                Получите профессиональную расшифровку результатов анализов. Мы объясним значения
                показателей и подскажем, что делать дальше для поддержания здоровья.
              </p>
            </Flex>
            <ButtonLink className="w-full sm:w-56" href="https://proanalizy.ru/">
              Расшифровать
            </ButtonLink>
          </Flex>
        </Col>
        <Col xs={24} lg={13}>
          <div className="relative min-h-64 w-full md:h-full">
            <Image
              src={DecryptionImage.src}
              fill
              alt="Руки в синих медицинских перчатках работают с микроскопом, изучая образец."
              className="rounded-2xl object-cover"
              priority
              loading="eager"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default DecryptionSection;
