import React from "react";
import {
  AboutSectionWrapper,
  SectionHeader,
  SeeAllText,
  AboutSectionInnerWrapper,
  AboutSectionHeadingText,
  AboutSectionText
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

export const Homepage: React.FC = () => (
  <>
    <AboutSectionWrapper>
      <MainHeader variant="h2">Unexpected Home Learning</MainHeader>
      <AboutSectionInnerWrapper>
        <AboutSectionHeadingText>
          Why does Unexpected Home Learning exist?
        </AboutSectionHeadingText>
        <AboutSectionText>
          Unexpected Home Learning is here to help parents navigate the waters
          of "homeschooling" during the COVID-19 pandemic. We're here to provide
          you with resources!
        </AboutSectionText>
        <AboutSectionHeadingText>
          What do I have to pay?
        </AboutSectionHeadingText>
        <AboutSectionText>
          Absolutely nothing! Unexpected Home Learning is free for anyone to
          use! Some of the resources we provide links to might be subscribtion
          based, but we provide plenty of free options if you're on a budget!
        </AboutSectionText>
        <AboutSectionHeadingText>What do you offer?</AboutSectionHeadingText>
        <AboutSectionText>
          We provide you with links to resources, connections to local contacts
          (such as music teachers or math tutors willing to help out during this
          time), and ways to communicate with homeschooling parents willing to
          provide their time and advice.
        </AboutSectionText>
      </AboutSectionInnerWrapper>
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
          <Paper>
            <AboutSectionText>Coming soon...</AboutSectionText>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </>
);
