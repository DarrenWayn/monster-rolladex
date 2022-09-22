import React from "react";
import "./SearchBox.css";

const SearchBox = ({ handleChange, placeholder, className, type }) => {
  return (
    <input
      onChange={handleChange}
      placeholder={placeholder}
      className={className}
      type={type}
    />
  );
};

export default SearchBox;
