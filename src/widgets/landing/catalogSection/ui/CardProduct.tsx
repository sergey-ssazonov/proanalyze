import { Button, ConfigProvider, Flex } from "antd";
import Image from "next/image";
import React, { FC } from "react";
import LinkButton from "./LinkButton";
import { TagSpan } from "@/src/shared/components/tagSpan";
import { IProduct } from "@/src/shared/interfaces/product.interface";
import { secondaryThemeAntd } from "@/src/shared/antd/theme";

interface ICardProductProps extends IProduct {}

const CardProduct: FC<ICardProductProps> = ({
  imageUrl,
  toUrl,
  type,
  title,
  price,
}) => {
  return (
    <article className="rounded-3xl bg-white relative w-full ">
      <LinkButton toUrl={toUrl} />
      <div className="w-full h-80 relative">
        <Image
          src={imageUrl}
          fill
          objectFit="cover"
          alt={title}
          className="rounded-3xl"
        />
      </div>

      <div className="py-6 px-5">
        <Flex justify="space-between" align="center">
          <TagSpan>{type}</TagSpan>
          <span className="text-2xl font-semibold">{price}₽</span>
        </Flex>
        <Flex justify="space-between" align="center">
          <h3 className="text-xl text-left">{title}</h3>
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

export default CardProduct;
