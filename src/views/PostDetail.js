import Container from "components/Container";
import PostMainContent from "components/PostMainContent";
import Topheader from "components/Topheader";
import React from "react";
import { useLocation } from "react-router-dom";

function PostDetail() {
  const { state } = useLocation();
  return (
    <Container>
      <Topheader />
      <PostMainContent post={state.post} />
    </Container>
  );
}

export default PostDetail;
