import { Flex } from "antd";
import Image from "next/image";
import React, { FC } from "react";
import LinkButton from "./LinkButton";
import { TagSpan } from "@/src/shared/components/tagSpan";
import { IProduct } from "@/src/features/landing/catalogSection/interfaces/product.interface";
import BuyButton from "./BuyButton";

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
        className="h-40 w-full rounded-3xl object-cover sm:h-80"
      />

      <div className="p-4 sm:p-5">
        <Flex justify="space-between" align="center" className="mb-1 sm:mb-0">
          <TagSpan className="text-xxs px-2 sm:px-5 sm:text-base">{type}</TagSpan>
          <span className="text-xs font-semibold sm:text-2xl">{price}₽</span>
        </Flex>
        <Flex justify="space-between" align="center">
          <h3 className="text-xxs text-left sm:text-xl">{title}</h3>
          <BuyButton/>
        </Flex>
      </div>
    </article>
  );
};

export default ProductCard;
