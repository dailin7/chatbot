import React from "react";

interface IProps {
  children?: string | JSX.Element | JSX.Element[];
  className?: string;
  direction?: "left" | "right";
  onClick?: React.MouseEventHandler<any>;
}

const FeaturedLink = ({ children, className,onClick, direction = "right" }: IProps) => {
  const after =
    direction === "right"
      ? "after:-right-4 after:content-['>'] hover:after:translate-x-1"
      : "after:-left-4 after:content-['<'] hover:after:-translate-x-1 ml-4";

  return (
    <div
      className={`relative font-semibold w-fit hover:underline after:absolute after:top-0 after:transition-transform after:text-scarlet ${after} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
    
  );
};

export default FeaturedLink;
