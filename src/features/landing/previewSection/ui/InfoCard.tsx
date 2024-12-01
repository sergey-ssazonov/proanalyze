import { Flex } from "antd";
import React, { FC } from "react";

interface IInfoCardProps {
  Icon: React.FC;
  className: string;
  text: string;
}

const InfoCard: FC<IInfoCardProps> = ({ Icon, text, className }) => {
  return (
    <article className="flex w-full items-center justify-between gap-2 rounded-3xl bg-primaryGray px-6 py-4">
      <Flex
        justify="center"
        align="center"
        className={`h-12 w-12 flex-shrink-0 rounded-full ${className}`}
      >
        <Icon/>
      </Flex>

      <p className="flex-grow break-words text-sm sm:text-base">{text}</p>
    </article>
  );
};

export default InfoCard;

