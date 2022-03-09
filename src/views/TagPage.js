import Container from "components/Container";
import NavBar from "components/NavBar";
import React from "react";
import { useLocation } from "react-router-dom";

function TagPage() {
  const { state } = useLocation();
  return (
    <Container>
      <NavBar isShowTitle={true} />
    </Container>
  );
}

export default TagPage;
