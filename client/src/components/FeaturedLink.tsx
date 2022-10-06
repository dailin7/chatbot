import React from "react";

interface IProps {
  children?: string | JSX.Element | JSX.Element[];
}

const FeaturedLink = ({ children }: IProps) => {
  return (
    <div className="relative font-semibold w-max hover:underline after:content-['>'] after:absolute after:top-0 after:-right-4 hover:after:translate-x-1 after:transition-transform after:text-scarlet">
      {children}
    </div>
  );
};

export default FeaturedLink;
