import React from "react";
import Container from "@material-ui/core/Container";
import { MainHeader } from "Components";
import styled from "styled-components";
import { BaseFont, tealGreen } from "globalStyles";

const SubText = styled(BaseFont)`
  && {
    font-size: 1.6rem;
    color: ${tealGreen};
  }
`;

const RefreshText = styled(BaseFont)`
  font-size: 1.2rem;
  margin-top: 30px;
  margin-bottom: 10px;
  cursor: pointer;
  text-decoration: underline;
`;

export const LiveComments: React.FC = () => (
  <>
    <MainHeader extraMargin={false} />
    <SubText>Share your homeschooling experience with others</SubText>
    <RefreshText onClick={() => window.location.reload(true)}>
      Don't see any comments? Click here to refresh
    </RefreshText>
    <Container maxWidth="md" style={{ paddingTop: "60px" }}>
      <div id="disqus_thread"></div>
    </Container>
  </>
);
