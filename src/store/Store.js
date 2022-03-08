import React from "react";
import User from "./User";

function Store({ children }) {
  return <User>{children}</User>;
}

export default Store;
