export const selectStyles = {
  menu: (provided: any) => ({
    ...provided,
    background: "white",
    color: "black",
    zIndex: 100,
    borderRadius: "0.5rem",
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    background: state.isFocused ? "rgb(229 231 235)" : "white",
    padding: ".5rem 1rem",
    border: "none",
    borderRadius: "0.5rem",
    boxShadow: "none",
    outline: state.isFocused ? "2px solid black" : "none",
    cursor: "pointer",
    "&:hover": {
      background: "rgb(229 231 235)",
    },
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    background: state.isSelected ? "#d53746" : "none",
    cursor: "pointer",
    "&:hover": {
      background: state.isSelected ? "#d53746" : "rgb(213, 55, 70, 0.25)",
    },
  }),
  input: (provided: any) => ({
    ...provided,
    color: "black",
    margin: 0,
    padding: 0,
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    margin: 0,
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    margin: 0,
    padding: 0,
    paddingLeft: 8,
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    padding: 0,
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "black",
    margin: 0,
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "black",
  }),
  clearIndicator: (provided: any) => ({
    ...provided,
    padding: 0,
    paddingRight: 8,
  }),
};
