import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useAppRedux";

import { useLazyGetClassesQuery } from "../store/search.api";
import { searchActions } from "../store/search.slice";

interface IProps {
  children?: string | JSX.Element | JSX.Element[];
  className?: string;
  direction?: "left" | "right";

  onClick?: () => any;
}

const FeaturedLink = ({ children, className, direction = "right", onClick }: IProps) => {
  const store = useAppSelector((store) => store);
  const formData = useAppSelector(({ search }) => search);
  const dispatch = useAppDispatch();

  const after =
    direction === "right"
      ? "after:-right-4 after:content-['>'] hover:after:translate-x-1"
      : "after:-left-4 after:content-['<'] hover:after:-translate-x-1 ml-4";

  return (
    <div
      className={`relative font-semibold w-fit hover:underline after:absolute after:top-0 after:transition-transform after:text-scarlet ${after} ${className}`}

      onClick = {onClick}

    >
      {children}
    </div>
    
  );
};

export default FeaturedLink;
