import React from "react";
import { UseSiteData } from "Hooks";
import { Card, MainHeader } from "Components";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

export const Resources: React.FC = () => {
  const { resources } = UseSiteData();
  return (
    <>
      <MainHeader style={{ marginBottom: "60px" }} variant="h2">
        Unexpected Home Learning
      </MainHeader>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {resources?.map(({ ...props }) => (
            <Grid item xs={12} md={6}>
              <Card {...props} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
