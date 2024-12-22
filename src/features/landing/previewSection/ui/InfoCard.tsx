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
      className={`flex w-full items-center justify-between gap-2 rounded-xl sm:rounded-3xl bg-primaryGray px-2 sm:px-6 py-3 sm:py-4 ${className}`}
    >
      <Flex
        justify="center"
        align="center"
        className={`h-6 w-6 flex-shrink-0 rounded-full sm:h-12 sm:w-12  ${color}`}
      >
        <div className={`sm:scale-100 scale-50 ${classNameIcon}`}>
          <Icon />
        </div>
      </Flex>

      <p className="flex-grow break-words text-xxs sm:text-base">{text}</p>
    </article>
  );
};

export default InfoCard;
