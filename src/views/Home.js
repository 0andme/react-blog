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
      <Top>
        <HeaderStyle>
          <h1>{blogTitle}</h1>
          <h5>{userGoal}</h5>
        </HeaderStyle>
        <NavBar />
      </Top>
      <BackGround />
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
const Top = styled.div`
  background-color: var(--primaryRed);
`;
const BackGround = styled.div`
  background-color: var(--primaryRed);
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
  flex: 1;
  margin: -100px auto;
`;

const HeaderStyle = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 10% 0 5%;

  text-align: center;
  gap: 20px;
  box-sizing: border-box;
  background-color: var(--primaryRed);
  h1 {
    color: var(--white);
    font-weight: 700;
  }
  h5 {
    color: var(--white);
    opacity: 0.7;
  }
`;
export default Home;
