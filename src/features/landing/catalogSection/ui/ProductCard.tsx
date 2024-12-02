import { Button, ConfigProvider, Flex } from "antd";
import Image from "next/image";
import React, { FC } from "react";
import LinkButton from "./LinkButton";
import { TagSpan } from "@/src/shared/components/tagSpan";
import { IProduct } from "@/src/features/landing/catalogSection/interfaces/product.interface";
import { secondaryThemeAntd } from "@/src/shared/antd/theme";

interface ICardProductProps extends IProduct {}

const ProductCard: FC<ICardProductProps> = ({ imageSrc: imageSrc, toUrl, type, title, price }) => {
  return (
    <article className="relative w-full rounded-3xl bg-white">
      <LinkButton toUrl={toUrl} />
      <Image
        src={imageSrc}
        width={4000}
        height={4000}
        alt={title}
        className="h-80 w-full rounded-3xl object-cover"
      />

      <div className="px-5 py-6">
        <Flex justify="space-between" align="center">
          <TagSpan>{type}</TagSpan>
          <span className="text-2xl font-semibold">{price}₽</span>
        </Flex>
        <Flex justify="space-between" align="center">
          <h3 className="text-left text-xl">{title}</h3>
          <ConfigProvider theme={secondaryThemeAntd}>
            <Button className="w-32" shape="round" type="primary">
              Купить
            </Button>
          </ConfigProvider>
        </Flex>
      </div>
    </article>
  );
};

export default ProductCard;
