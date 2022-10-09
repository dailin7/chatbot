import React from "react";

import heroDivider from "../images/hero-divider.svg";

interface IProps {
  children?: string | JSX.Element | JSX.Element[];
}

const HeroBg = ({ children }: IProps) => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center gap-12 pt-16 pb-8 -mb-4 sm:mb-0 bg-scarlet min-h-[250px]">
      <img
        src={heroDivider}
        alt="Hero Divider"
        className="absolute bottom-1 translate-y-full"
      />
      {children}
    </div>
  );
};

export default HeroBg;
