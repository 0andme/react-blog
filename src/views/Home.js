import Container from "components/Container";
import NavBar from "components/NavBar";
import PostCard from "components/PostCard";
import React, { useContext } from "react";
import { PostData } from "store/Posts";
import { UserData } from "store/User";
import styled from "styled-components";
import { v1 as uuid } from "uuid";
function Home() {
  const { blogTitle, userGoal } = useContext(UserData);
  const { allPostList } = useContext(PostData);
  return (
    <Container>
      <BackGround>
        <HeaderStyle>
          <h1>{blogTitle}</h1>
          <h5>{userGoal}</h5>
        </HeaderStyle>
        <NavBar />
      </BackGround>
      <PostListStyle>
        {allPostList &&
          allPostList.length > 0 &&
          allPostList.map((post) => {
            return (
              <PostCard
                isOdd={allPostList.length % 2 === 0 ? false : true}
                key={uuid()}
                post={post}
              ></PostCard>
            );
          })}
      </PostListStyle>
    </Container>
  );
}
const BackGround = styled.div`
  background-color: var(--primaryRed);
  height: 200px;
  padding-bottom: 100px;
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

const HeaderStyle = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 10% 0 5%;

  text-align: center;
  color: var(--white);
  gap: 20px;
  box-sizing: border-box;
  h1 {
    font-weight: 700;
  }
  h5 {
    opacity: 0.7;
  }
`;
export default Home;
