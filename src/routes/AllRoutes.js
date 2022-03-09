import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "views/About";
import Home from "views/Home";
import PostDetail from "views/PostDetail";
import TagPage from "views/TagPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/:tag" element={<TagPage />} />
      <Route path="/post/:postdate" element={<PostDetail />} />
    </Routes>
  );
}

export default AllRoutes;
