import React from "react";
import styled from "styled-components";
function Container({ children }) {
  return <ContainerStyle>{children}</ContainerStyle>;
}
const ContainerStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export default Container;
