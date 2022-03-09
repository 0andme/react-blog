import Container from "components/Container";
import PostCard from "components/PostCard";
import Topheader from "components/Topheader";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PostData } from "store/Posts";
import styled from "styled-components";
import { v1 as uuid } from "uuid";
function TagPage() {
  const { state } = useLocation();
  const { funcFilterPost } = useContext(PostData);
  const [filteredList, setFilteredList] = useState([]);
  // 태그가 달라질 때마다 필터된 포스트 내역 가져오기
  useEffect(() => {
    const data = funcFilterPost(state.tag);
    if (data) setFilteredList(data);
  }, [state.tag]);
  return (
    <Container>
      <BackGround>
        <Topheader />
        <TagTitle>{state.tag}</TagTitle>
      </BackGround>
      <PostListStyle>
        {filteredList &&
          filteredList.length > 0 &&
          filteredList.map((post) => {
            return (
              <PostCard
                isOdd={filteredList.length % 2 === 0 ? false : true}
                key={uuid()}
                post={post}
              />
            );
          })}
      </PostListStyle>
    </Container>
  );
}
const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--primaryRed);
  height: 200px;
  padding-bottom: 100px;
`;
const TagTitle = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: var(--primaryRed);
`;
const PostListStyle = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 30px 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: -100px;
`;

export default TagPage;
