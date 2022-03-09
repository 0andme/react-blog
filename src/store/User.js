import React, { createContext, useState } from "react";

export const UserData = createContext({
  userName: "",
  userGoal: "",
  userImg: "",
  blogTitle: "",
});
function User({ children }) {
  const [userName, setUserName] = useState("0andme");
  const [userGoal, setUserGoal] = useState("LV.99 개발자 되기");
  const [userImg, setUserImg] = useState("author-logo.jpeg");
  const [blogTitle, setBlogTitle] = useState("0andme의 개발 블로그");

  return (
    <UserData.Provider value={{ userName, userGoal, userImg, blogTitle }}>
      {children}
    </UserData.Provider>
  );
}

export default User;
