import React from "react";
import Tags from "./Tags";
import User from "./User";

function Store({ children }) {
  return (
    <Tags>
      <User>{children}</User>
    </Tags>
  );
}

export default Store;
