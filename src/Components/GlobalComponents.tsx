import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { navPages } from "Components";
import Button from "@material-ui/core/Button";
import { Link, tealGreen } from "globalStyles";

const MainHeaderTitle = styled(Typography)`
  && {
    margin-top: 40px;
    font-size: 3rem;
  }
`;

const MainWrapper = styled.div<{ extraMargin?: boolean }>`
  ${({ extraMargin }) => extraMargin && "margin-bottom: 50px;"}
`;

export const MainHeader: React.FC<{ extraMargin?: boolean }> = ({
  extraMargin = true,
}) => (
  <MainWrapper extraMargin={extraMargin}>
    <MainHeaderTitle variant="h2">Unexpected Home Learning</MainHeaderTitle>
    {navPages.map(({ name, location }) => (
      <Link to={location}>
        <Button style={{ color: tealGreen, fontWeight: "bold" }}>{name}</Button>
      </Link>
    ))}
  </MainWrapper>
);
