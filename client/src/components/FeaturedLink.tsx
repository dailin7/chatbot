import React from "react";

interface IProps {
  text: string;
}

const FeaturedLink = ({ text }: IProps) => {
  return (
    <p className="relative font-semibold w-max hover:underline after:content-['>'] after:absolute after:-right-4 hover:after:translate-x-1 after:transition-transform after:text-scarlet">
      {text}
    </p>
  );
};

export default FeaturedLink;
