import React from "react";
import "./AutoSuggest.css";

const AutoSuggest = ({ suggestions, handleChoose }) => {
  // console.log(suggestions)
  return (
    <div className="container-suggestion">
      {suggestions.map((suggestion) => (
        <div
          key={suggestion.id}
          className="suggestion"
          onClick={handleChoose.bind(this, suggestion)}
        >
          {suggestion.name}
        </div>
      ))}
    </div>
  );
};

export default AutoSuggest;
