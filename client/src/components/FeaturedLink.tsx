import React from "react";

interface IProps {
  children?: string | JSX.Element | JSX.Element[];
  className?: string;
  direction?: "left" | "right";
}

const FeaturedLink = ({ children, className, direction = "right" }: IProps) => {
  const after =
    direction === "right"
      ? "after:-right-4 after:content-['>'] hover:after:translate-x-1"
      : "after:-left-4 after:content-['<'] hover:after:-translate-x-1 ml-4";

  return (
    <div
      className={`relative font-semibold w-fit hover:underline after:absolute after:top-0 after:transition-transform after:text-scarlet ${after} ${className}`}
    >
      {children}
    </div>
  );
};

export default FeaturedLink;
