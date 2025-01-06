import { ButtonLink } from "@/src/shared/components/buttons/buttonLink";
import { Col, Flex, Row } from "antd";
import Image from "next/image";
import React, { FC } from "react";
import OnlineImage from "@/public/images/about/online-image.webp";

const OnlineSection: FC = () => {
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
              <h2 className="text-3xl sm:text-5xl">Онлайн консультация с врачом</h2>
              <p className="w-11/12 font-normal leading-6 sm:text-2xl">
                Получите квалифицированную медицинскую помощь не выходя из дома. Наши специалисты
                готовы провести консультацию по видеосвязи, ответить на все вопросы и предложить
                рекомендации по вашему здоровью. Удобно, быстро и безопасно.
              </p>
            </Flex>
            <ButtonLink className="w-full sm:w-56" href="https://proanalizy.ru/">
              Задать вопрос врачу
            </ButtonLink>
          </Flex>
        </Col>
        <Col xs={24} lg={13}>
          <div className="relative min-h-64 w-full md:h-full">
            <Image
              src={OnlineImage.src}
              fill
              alt="Женщина в медицинской одежде сидит за столом с ноутбуком и микрофоном, участвуя в видеоконференции. На столе также видны очки и небольшое устройство, а за окном — светлый фон."
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

export default OnlineSection;
