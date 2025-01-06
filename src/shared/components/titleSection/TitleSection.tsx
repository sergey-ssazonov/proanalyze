import React, { FC } from "react";

interface ITitleSectionProps {
  title: string;
  subTitle?: string;
}

const TitleSection: FC<ITitleSectionProps> = ({ title, subTitle }) => {
  return (
    <div className="mb-6 flex w-full justify-between sm:mb-9">
      <h2 className="w-full text-2xl sm:w-2/3 sm:text-4xl">{title}</h2>
      {subTitle && <h3 className="hidden w-80 text-xl font-normal sm:block">{subTitle}</h3>}
    </div>
  );
};

export default TitleSection;
