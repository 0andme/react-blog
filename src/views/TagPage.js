import Container from "components/Container";
import Topheader from "components/Topheader";
import React from "react";
import { useLocation } from "react-router-dom";

function TagPage() {
  const { state } = useLocation();
  return (
    <Container>
      <Topheader />
    </Container>
  );
}

export default TagPage;
