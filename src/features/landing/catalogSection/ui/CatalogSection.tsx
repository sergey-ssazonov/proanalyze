import { Col, Row } from "antd";
import React, { FC } from "react";
import ProductCard from "./ProductCard";
import { IProduct } from "@/src/features/landing/catalogSection/interfaces/product.interface";

import Product1Image from "@/public/images/landing/product1-image.png";
import { TitleSection } from "@/src/shared/components/titleSection";

const mockProduct: IProduct = {
  imageSrc: Product1Image.src,
  toUrl: "https://proanalizy.ru/",
  type: "Беременность",
  title: "Подготовиться к беременности",
  price: 5000,
};

const CatalogSection: FC = () => {
  return (
    <section className="w-full bg-transparent">
      <TitleSection
        title="Готовые перечни анализов"
        subTitle="Узнайте, какие именно анализы помогут вам"
      />

      <Row
        className="w-full"
        gutter={[
          { xs: 4, md: 16 },
          { xs: 4, md: 16 },
        ]}
        justify="center"
      >
        <Col xs={12} md={8} lg={6}>
          <ProductCard {...mockProduct} />
        </Col>
        <Col xs={12} md={8} lg={6}>
          <ProductCard {...mockProduct} />
        </Col>
        <Col xs={12} md={8} lg={6}>
          <ProductCard {...mockProduct} />
        </Col>
        <Col xs={12} md={8} lg={6}>
          <ProductCard {...mockProduct} />
        </Col>
        <Col xs={12} md={8} lg={6}>
          <ProductCard {...mockProduct} />
        </Col>
      </Row>
    </section>
  );
};

export default CatalogSection;
