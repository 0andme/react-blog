import React, { createContext, useState } from "react";
import { postList } from "posts";

export const PostData = createContext({
  allPostList: [],
  funcFilterPost: () => {},
});
function Posts({ children }) {
  const [allPostList, setAllPostList] = useState(postList);
  function funcFilterPost(tagName) {
    return allPostList.filter((post) =>
      post.tags.find((name) => name === tagName)
    );
  }
  return (
    <PostData.Provider value={{ allPostList, funcFilterPost }}>
      {children}
    </PostData.Provider>
  );
}

export default Posts;
