import React, { FC } from "react";
import IStaffItem from "../model/Staff";
import Image from "next/image";

const PersonCard: FC<IStaffItem> = ({ description, imageSrc, name, post }) => {
  return (
    <article className="relative h-full w-full rounded-2xl bg-white">
      <Image
        src={imageSrc}
        width={4000}
        height={4000}
        alt={name}
        className="h-72 w-full rounded-2xl object-cover object-[50%_20%] sm:h-85"
        loading="lazy"
      />

      <div className="flex flex-col gap-2 p-5">
        <h2 className="text-lg font-semibold sm:text-xl">{name}</h2>
        <h3 className="font-normal text-primaryBlue">{post}</h3>
        <h4 className="text-sm font-normal leading-5">{description}</h4>
      </div>
    </article>
  );
};

export default PersonCard;
