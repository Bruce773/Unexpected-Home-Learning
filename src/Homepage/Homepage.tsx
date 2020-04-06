import React from "react";
import {
  AboutSectionWrapper,
  SectionHeader,
  SeeAllText,
  AboutSectionText,
  LiveCommentingText,
} from "./elements";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { ResourcesSection } from "./ResourcesSection";
import { MainHeader } from "Components";
import { Link, tealGreen } from "globalStyles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Button from "@material-ui/core/Button";
import { LocalContactSection } from "./LocalContactsSection";
import { ParentToParent } from "./ParentToParent";
import { AboutSection } from "./AboutSection";
import { AboutCarousel } from "./AboutCarousel";

export const Homepage: React.FC = () => (
  <>
    <AboutSectionWrapper>
      <MainHeader variant="h2">Unexpected Home Learning</MainHeader>
      <Grid container>
        <Grid item xs={12} md={6}>
          <AboutSection />
        </Grid>
        <Grid item xs={12} md={6}>
          <AboutCarousel />
        </Grid>
      </Grid>
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
          <Paper style={{ marginBottom: "30px", padding: "10px" }}>
            <LiveCommentingText>
              Live conversations with homeschooling parents:
              <Link to="/live-comments">
                <div style={{ color: tealGreen, display: "inline" }}>
                  <Button variant="text" color="inherit">
                    <SeeAllText>Live Comments</SeeAllText> <ChevronRightIcon />
                  </Button>
                </div>
              </Link>
            </LiveCommentingText>
          </Paper>
          <ParentToParent />
        </Grid>
      </Grid>
    </Container>
  </>
);
