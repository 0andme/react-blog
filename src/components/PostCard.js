import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserData } from "store/User";
import styled from "styled-components";
import { v1 as uuid } from "uuid";
function PostCard({ isOdd, post }) {
  const { userImg, userName } = useContext(UserData);
  const history = useNavigate();
  return (
    <PostCardStyle
      onClick={() => {
        history(`/post/${post.title.replace(" ", "")}-${post.date}`);
      }}
      $isOdd={isOdd}
      $isCover={post.cover}
    >
      {post.cover && (
        <img
          className="cover"
          src={require(`assets/postCovers/${post.cover}`)}
          alt={post.title}
        />
      )}
      <div className="main">
        <div className="tags">
          {post.tags.map((tag) => {
            return <span key={uuid()}>{tag}</span>;
          })}
        </div>
        <div className="title">{post.title}</div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="author">
          <div className="imgBox">
            <img src={require(`assets/${userImg}`)} alt="프로필" />
          </div>
          <span>{userName}</span>
        </div>
      </div>
    </PostCardStyle>
  );
}
const PostCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: calc((100% - 20px) / 2);
  max-width: calc((1040px - 20px) / 2);

  box-sizing: border-box;
  overflow: hidden;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: var(--white);
  cursor: pointer;
  ${(props) => {
    if (props.$isOdd) {
      if (props.$isCover) {
        return `&:first-child {
    width: 100%;
    max-width: calc(1040px);
    display: flex;
    flex-direction:row;
    .cover {
      width: 50%;
    }
    .main {
      display: flex;
      width: 50%;
      height: 100%;
      flex-direction: column;
      .content {
        flex: 1;
      }
    }
  }`;
      } else {
        return `&:first-child {
    width: 100%;
    max-width: calc(1040px);
    display: flex;
    .cover {
      width: 0%;
    }
    .main {
      width: 100%;
      height: 100%;
      
    }
  }`;
      }
    }
  }}

  .cover {
    width: 100%;
    margin-bottom: 10px;
  }
  .tags {
    display: flex;
    align-items: center;
    font-size: 0.5rem;
    opacity: 0.5;
    margin-bottom: 10px;
  }
  .title {
    font-size: 1.5em;
    margin-bottom: 10px;
  }
  .content {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    opacity: 0.6;
    font-size: 0.8em;
    margin-bottom: 15px;
    white-space: nowrap;
  }
  .author {
    font-size: 0.8em;
    display: flex;
    align-items: center;
    gap: 10px;
    .imgBox {
      width: 30px;
      height: 30px;
      border-radius: 30px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
`;
export default PostCard;
