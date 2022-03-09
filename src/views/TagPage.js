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
      <Top>
        <Topheader />
        <TagTitle>
          <h4>{state.tag}</h4>
          <span className="num">{filteredList.length}개의 포스트</span>
        </TagTitle>
      </Top>
      <BackGround />
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
const Top = styled.div`
  height: 246px;
`;
const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--primaryRed);
  padding-bottom: 100px;
`;
const TagTitle = styled.div`
  width: 100%;
  height: 200px;
  font-size: 1.8em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: var(--primaryRed);
  color: var(--white);
  .num {
    margin-top: 10px;
    font-size: 0.6em;
    opacity: 0.8;
  }
`;
const PostListStyle = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 30px 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: -100px auto;
`;

export default TagPage;
