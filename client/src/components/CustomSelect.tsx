import React from "react";
import Select from "react-select";
import { selectStyles } from "../styles/selectStyles";

interface IProps {
  label?: string;
  isSearchable?: boolean;
  isClearable?: boolean;
  options?: any[];
  defaultValue?: any;
  onChange?: (e: any) => void;
}

const CustomSelect = ({
  label,
  isSearchable = false,
  isClearable = false,
  options,
  defaultValue,
  onChange,
}: IProps) => {
  return (
    <div className="w-full">
      {label && (
        <p className="text-white mb-2 cursor-default text-sm">{label}</p>
      )}
      <Select
        className="shadow-md"
        isClearable={isClearable}
        isSearchable={isSearchable}
        options={options}
        defaultValue={defaultValue}
        styles={selectStyles}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomSelect;
