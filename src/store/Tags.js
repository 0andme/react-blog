import React, { createContext, useEffect, useMemo, useState } from "react";
import { postList } from "posts";
export const TagData = createContext({
  tagList: [],
});
function Tags({ children }) {
  const tagList = useMemo(() => {
    let temp = [];
    postList.forEach((post) => {
      temp.push(...post.tags);
    });
    return [...new Set(temp)];
  }, [postList]);

  return <TagData.Provider value={{ tagList }}>{children}</TagData.Provider>;
}

export default Tags;
