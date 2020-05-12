import React from "react";
import { Category } from "./Category";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

function MainCheckCategory() {
  return (
    <div style={style}>
      <h1>category </h1>
      <Category />
    </div>
  );
}

export default MainCheckCategory;
