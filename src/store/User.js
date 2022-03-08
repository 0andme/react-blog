import React, { createContext, useState } from "react";

export const UserData = createContext({
  name: "",
});
function User({ children }) {
  const [name, setName] = useState("0andme");
  return <UserData.Provider value={{ name }}>{children}</UserData.Provider>;
}

export default User;
