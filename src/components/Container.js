import React from "react";
import styled from "styled-components";
function Container({ children }) {
  return <ContainerStyle>{children}</ContainerStyle>;
}
const ContainerStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export default Container;
