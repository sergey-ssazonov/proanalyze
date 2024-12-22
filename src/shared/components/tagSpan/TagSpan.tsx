import React, { FC } from "react";

interface ITagSpanProps {
  children: string;
  className?: string;
}

const TagSpan: FC<ITagSpanProps> = ({ children, className }) => {
  return (
    <span
      className={`h-fit w-fit rounded-full border border-primaryRed px-5 text-sm text-primaryRed sm:text-base ${className}`}
    >
      {children}
    </span>
  );
};

export default TagSpan;
