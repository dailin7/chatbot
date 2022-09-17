import React from "react";

interface IProps {
  children?: string | JSX.Element | JSX.Element[];
  className?: string;
  onClick?: React.MouseEventHandler<any>;
}

const Button = ({ children, className, onClick }: IProps) => {
  return (
    <div
      className={`bg-white rounded-lg cursor-pointer shadow-md hover:bg-gray-200 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
