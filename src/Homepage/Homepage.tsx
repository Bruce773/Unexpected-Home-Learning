import React from "react";
import { MainHeader, AboutSectionWrapper, SectionHeader } from "./elements";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { UseSiteData } from "../Hooks";
import { Card } from "./Card";

export const Homepage: React.FC = () => {
  const { resources } = UseSiteData();

  return (
    <>
      <AboutSectionWrapper>
        <MainHeader variant="h2">Unexpected Home Learning</MainHeader>
      </AboutSectionWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <SectionHeader>Online Resources</SectionHeader>
            {resources?.map(({ ...props }) => (
              <Card {...props} />
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <SectionHeader>
              Local Contacts (Wayne/Pike Counties, PA)
            </SectionHeader>
            <Paper>Stuff</Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <SectionHeader>Parent-To-Parent</SectionHeader>
            <Paper>Stuff</Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
