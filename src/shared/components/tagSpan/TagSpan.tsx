import React, { FC } from "react";

interface ITagSpanProps {
  children: string;
  className?: string;
}

const TagSpan: FC<ITagSpanProps> = ({ children, className }) => {
  return (
    <span
      className={`px-5 rounded-full h-fit text-primaryRed border border-primaryRed w-fit ${className}`}
    >
      {children}
    </span>
  );
};

export default TagSpan;
