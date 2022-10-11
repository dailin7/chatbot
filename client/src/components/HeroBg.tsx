import React from "react";

interface IProps {
  children?: string | JSX.Element | JSX.Element[];
}

const HeroBg = ({ children }: IProps) => {
  return (
    <div className="relative w-full -mb-4 sm:mb-0">
      <div className="absolute w-full h-full bg-scarlet min-h-[400px] skew-y-3 origin-bottom-right" />
      <div className="relative z-10 w-full flex flex-col justify-center items-center gap-12 pt-16 pb-8">{children}</div>
    </div>
  );
};

export default HeroBg;
