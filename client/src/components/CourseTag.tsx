import React from "react";

interface IProps {
  children?: string | JSX.Element | JSX.Element[];
  className?: string;
}

const CourseTag = ({ children, className }: IProps) => {
  return (
    <div
      className={`px-2 py-1 bg-scarlet bg-opacity-30 rounded-full shadow-md text-sm text-scarlet font-bold ${className}`}
    >
      {children}
    </div>
  );
};

export default CourseTag;
