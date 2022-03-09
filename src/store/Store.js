import React from "react";
import Posts from "./Posts";
import Tags from "./Tags";
import User from "./User";

function Store({ children }) {
  return (
    <Posts>
      <Tags>
        <User>{children}</User>
      </Tags>
    </Posts>
  );
}

export default Store;
