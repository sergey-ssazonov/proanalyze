import { Flex } from "antd";
import React, { FC } from "react";

interface IInfoCardProps {
  Icon: React.FC;
  className: string;
  color: string;
  text: string;
}

const InfoCard: FC<IInfoCardProps> = ({ Icon, text, className, color }) => {
  return (
    <article
      className={`flex w-full items-center justify-between gap-2 rounded-3xl bg-primaryGray px-6 py-4 ${className}`}
    >
      <Flex
        justify="center"
        align="center"
        className={`h-10 w-10 flex-shrink-0 rounded-full sm:h-12 sm:w-12 ${color}`}
      >
        <div className="sm:scale-125">
          <Icon />
        </div>
      </Flex>

      <p className="flex-grow break-words text-sm sm:text-base">{text}</p>
    </article>
  );
};

export default InfoCard;
