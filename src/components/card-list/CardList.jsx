import Card from "../card/Card";
import "./CardList.css";

import React from "react";

const CardList = ({ monsters, searchField }) => {
  return (
    <div className={searchField.length > 1 ? "card-list" : "on-search"}>
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
