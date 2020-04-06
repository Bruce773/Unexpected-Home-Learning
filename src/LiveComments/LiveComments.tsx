import React from "react";
import Container from "@material-ui/core/Container";
import { MainHeader } from "Components";

export const LiveComments: React.FC = () => (
  <>
    <MainHeader variant="h2">Unexpected Home Learning</MainHeader>
    <Container maxWidth="md" style={{ paddingTop: "60px" }}>
      <div id="disqus_thread"></div>
    </Container>
  </>
);
