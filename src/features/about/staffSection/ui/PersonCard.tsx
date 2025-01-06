import React, { FC } from "react";
import IStaffItem from "../model/Staff";
import Image from "next/image";
import { Flex } from "antd";

interface IPersonCardProps extends IStaffItem {}

const PersonCard: FC<IPersonCardProps> = ({ description, imageSrc, name, post }) => {
  return (
    <article className="relative h-full w-full rounded-2xl bg-white">
      <Image
        src={imageSrc}
        width={4000}
        height={4000}
        alt={name}
        className="h-72 w-full rounded-2xl object-cover object-[0%_25%] sm:h-85"
      />

      <Flex vertical gap={8} className="p-5">
        <h2 className="text-lg font-semibold sm:text-xl">{name}</h2>
        <h3 className="font-normal text-primaryBlue">{post}</h3>
        <h4 className="text-sm font-normal leading-5">{description}</h4>
      </Flex>
    </article>
  );
};

export default PersonCard;
