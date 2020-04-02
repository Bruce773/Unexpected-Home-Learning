import React from "react";
import { AboutSectionWrapper, SectionHeader, SeeAllText } from "./elements";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { ResourcesSection } from "./ResourcesSection";
import { MainHeader } from "Components";
import { Link, tealGreen } from "globalStyles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Button from "@material-ui/core/Button";
import { LocalContactSection } from "./LocalContactsSection";

export const Homepage: React.FC = () => (
  <>
    <AboutSectionWrapper>
      <MainHeader variant="h2">Unexpected Home Learning</MainHeader>
    </AboutSectionWrapper>
    <Container maxWidth="lg">
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <SectionHeader>
            Resources
            <Link to="/resources">
              <div style={{ color: tealGreen, display: "inline" }}>
                <Button variant="text" color="inherit">
                  <SeeAllText>(See all)</SeeAllText> <ChevronRightIcon />
                </Button>
              </div>
            </Link>
          </SectionHeader>
          <ResourcesSection />
        </Grid>
        <Grid item xs={12} md={4}>
          <SectionHeader>
            Local Contacts (Wayne/Pike Counties, PA)
          </SectionHeader>
          <LocalContactSection />
        </Grid>
        <Grid item xs={12} md={4}>
          <SectionHeader>Parent-To-Parent</SectionHeader>
          <Paper>Stuff</Paper>
        </Grid>
      </Grid>
    </Container>
  </>
);
