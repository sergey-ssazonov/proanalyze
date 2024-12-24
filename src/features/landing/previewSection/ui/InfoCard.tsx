import { Flex } from "antd";
import React, { FC } from "react";

interface IInfoCardProps {
  Icon: React.FC;
  className?: string;
  classNameIcon?: string;
  color: string;
  text: string;
}

const InfoCard: FC<IInfoCardProps> = ({ Icon, text, className, color, classNameIcon }) => {
  return (
    <article
      className={`flex w-full items-center justify-between gap-2 rounded-xl bg-primaryGray px-2 py-3 sm:rounded-2xl sm:px-6 sm:py-4 ${className}`}
    >
      <Flex
        justify="center"
        align="center"
        className={`h-6 w-6 flex-shrink-0 rounded-full sm:h-12 sm:w-12 ${color}`}
      >
        <div className={`scale-50 sm:scale-100 ${classNameIcon}`}>
          <Icon />
        </div>
      </Flex>

      <p className="flex-grow break-words text-xxs sm:text-base">{text}</p>
    </article>
  );
};

export default InfoCard;
