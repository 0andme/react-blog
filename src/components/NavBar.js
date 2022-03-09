import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { TagData } from "store/Tags";
import styled from "styled-components";
import { v1 as uuid } from "uuid";

function NavBar() {
  const { tagList } = useContext(TagData);
  return (
    <NavBarStyle>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      {tagList.length > 0 &&
        tagList.map((tag) => (
          <NavLink key={uuid()} to={`/${tag}`} state={{ tag: tag }}>
            {tag}
          </NavLink>
        ))}
    </NavBarStyle>
  );
}
const NavBarStyle = styled.div`
  width: 100%;
  max-width: calc(1040px);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 20px 30px;
  gap: 20px;
  margin: auto;
  background-color: var(--primaryRed);
  a {
    color: var(--white);
    opacity: 0.5;
    &.title {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
`;
export default NavBar;
