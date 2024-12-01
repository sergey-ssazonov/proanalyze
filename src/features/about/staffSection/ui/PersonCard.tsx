import React, { FC } from "react";
import IStaffItem from "../model/Staff";
import Image from "next/image";
import { Flex } from "antd";

interface IPersonCardProps extends IStaffItem {}

const PersonCard: FC<IPersonCardProps> = ({ description, imageSrc, name, post }) => {
  return (
    <article className="relative h-full w-full rounded-3xl bg-white">
      <Image
        src={imageSrc}
        width={4000}
        height={4000}
        alt={name}
        className="sm:h-85 h-72 w-full rounded-3xl object-cover object-[0%_25%] "
      />

      <Flex vertical gap={8} className="p-5">
        <h2 className="sm:text-xl text-lg font-semibold">{name}</h2>
        <h3 className="font-normal text-primaryBlue">{post}</h3>
        <h4 className="text-sm font-normal leading-5">{description}</h4>
      </Flex>
    </article>
  );
};

export default PersonCard;
