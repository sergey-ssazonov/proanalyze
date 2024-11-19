import { Flex } from 'antd';
import Image from 'next/image';
import React, { FC } from 'react';

interface IInfoCardProps {
  iconUrl: string;
  className: string;
  text: string;
}

const InfoCard: FC<IInfoCardProps> = ({ iconUrl, text, className }) => {
  return (
    <article className="rounded-3xl bg-primaryGray px-6 py-4 w-full flex gap-2 justify-between items-center">
      <Flex justify='center' align='center' className={`w-12 h-12 flex-shrink-0 rounded-full ${className}`}>
        <Image
          src={iconUrl}
          width={25}
          height={25}
          objectFit="cover"
          alt={text}
        />
      </Flex>

      <p className="text-sm sm:text-base  flex-grow break-words">
        {text}
      </p>
    </article>
  );
};

export default InfoCard;
