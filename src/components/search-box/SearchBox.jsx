import React from "react";
import "./SearchBox.css";

const SearchBox = ({ handleChange, placeholder, className, type, value }) => {
  return (
    <input
      onChange={handleChange}
      placeholder={placeholder}
      className={className}
      value={value}
      type={type}
    />
  );
};

export default SearchBox;
