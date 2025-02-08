import { ButtonLink } from "@/src/shared/components/buttons/buttonLink";
import { Col, Row } from "antd";
import Image from "next/image";
import React, { FC } from "react";
import OnlineImage from "@/public/images/about/online-image.webp";

const OnlineSection: FC = () => {
  return (
    <section>
      <Row gutter={[20, 15]}>
        <Col xs={24} lg={11}>
          <div className="flex w-full flex-col justify-between gap-11 rounded-2xl bg-white p-4 sm:p-11">
            <div className="flex flex-col gap-5 sm:gap-8">
              <h2 className="text-2xl sm:text-4xl">Онлайн консультация с врачом</h2>
              <p className="w-11/12 font-normal leading-6 sm:text-2xl">
                Получите квалифицированную медицинскую помощь не выходя из дома. Наши специалисты
                готовы провести консультацию по видеосвязи, ответить на все вопросы и предложить
                рекомендации по вашему здоровью. Удобно, быстро и безопасно.
              </p>
            </div>
            <ButtonLink
              className="w-full sm:w-56"
              href="https://imedsvetliy.ru/telemedicine"
              target="_blank"
            >
              Задать вопрос врачу
            </ButtonLink>
          </div>
        </Col>
        <Col xs={24} lg={13}>
          <div className="relative min-h-64 w-full md:h-full">
            <Image
              src={OnlineImage.src}
              fill
              alt="Женщина в медицинской одежде сидит за столом с ноутбуком и микрофоном, участвуя в видеоконференции. На столе также видны очки и небольшое устройство, а за окном — светлый фон."
              className="rounded-2xl object-cover"
              loading="lazy"
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default OnlineSection;
