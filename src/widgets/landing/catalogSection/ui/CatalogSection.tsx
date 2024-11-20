import { Col, Flex, Row } from "antd";
import React, { FC } from "react";
import CardProduct from "./CardProduct";
import { IProduct } from "@/src/shared/interfaces/product.interface";

import Product1Image from "@/public/images/product1-image.png";

const mockProduct: IProduct = {
  imageUrl: Product1Image.src,
  toUrl: "https://proanalizy.ru/",
  type: "Беременность",
  title: "Подготовиться к беременности",
  price: 5000,
};

const CatalogSection: FC = () => {
  return (
    <section className="w-full bg-transparent">
      <Flex justify="space-between" className="mb-9">
        <h2 className="text-5xl">Рекомендации по анализам</h2>
        <h3 className="text-xl font-normal w-80">
          Узнайте, какие именно анализы помогут вам
        </h3>
      </Flex>
      <Row className="w-full h-vh80" gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} lg={8}>
          <CardProduct {...mockProduct} />
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <CardProduct {...mockProduct} />
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <CardProduct {...mockProduct} />
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <CardProduct {...mockProduct} />
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <CardProduct {...mockProduct} />
        </Col>
      </Row>
    </section>
  );
};

export default CatalogSection;
