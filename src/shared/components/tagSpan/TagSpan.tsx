import React, { FC } from "react";

interface ITagSpanProps {
  children: string;
  className?: string;
}

const TagSpan: FC<ITagSpanProps> = ({ children, className }) => {
  return (
    <span
      className={`sm:text-base text-sm h-fit w-fit rounded-full border border-primaryRed px-5  text-primaryRed ${className}`}
    >
      {children}
    </span>
  );
};

export default TagSpan;
