import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v1 as uuid } from "uuid";
function PostMainContent({ post }) {
  const history = useNavigate();
  return (
    <MainStyle>
      <Title>
        <h1>{post.title}</h1>
        <div className="postInfo">
          <span>{post.date}</span>
          <div className="tagList">
            {post.tags.map((tag, index) => {
              return (
                <Fragment key={uuid()}>
                  <span
                    key={uuid()}
                    onClick={() => {
                      history(`/${tag}`, { state: { tag } });
                    }}
                  >
                    {tag}
                  </span>
                  {post.tags.length - 1 !== index ? "/" : ""}
                </Fragment>
              );
            })}
          </div>
        </div>
      </Title>
      <Main dangerouslySetInnerHTML={{ __html: post.content }} />
    </MainStyle>
  );
}
const Title = styled.div`
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
  padding: 20px 0;
  text-align: center;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  font-size: 1.1em;
  span {
    font-size: 0.8em;
    font-weight: 400;
  }
  .postInfo {
    text-align: start;
  }
  .tagList {
    cursor: pointer;
    span {
      font-size: 1em;

      &:hover {
        color: var(--primaryRed);
      }
    }
    margin-top: 3px;
    display: flex;
    justify-content: center;
    gap: 5px;
  }
`;
const Main = styled.div`
  width: 100%;
  max-width: 1040px;
  flex: 1;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  padding: 40px;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 30px;
  flex: 1;
`;
export default PostMainContent;
