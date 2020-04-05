import React from "react";
import {
  AboutSectionInnerWrapper,
  AboutSectionHeadingText,
  AboutSectionText,
} from "./elements";

export const AboutSection: React.FC = () => (
  <AboutSectionInnerWrapper>
    <AboutSectionHeadingText>
      Why does Unexpected Home Learning exist?
    </AboutSectionHeadingText>
    <AboutSectionText>
      Unexpected Home Learning is here to help parents navigate the waters of
      "homeschooling" during the COVID-19 pandemic. We're here to provide you
      with resources!
    </AboutSectionText>
    <AboutSectionHeadingText>What do I have to pay?</AboutSectionHeadingText>
    <AboutSectionText>
      Absolutely nothing! Unexpected Home Learning is free for anyone to use!
      Some of the resources we provide links to might be subscription based, but
      we provide plenty of free options if you're on a budget!
    </AboutSectionText>
    <AboutSectionHeadingText>What do you offer?</AboutSectionHeadingText>
    <AboutSectionText>
      We provide you with links to resources, connections to local contacts
      (such as music teachers or math tutors willing to help out during this
      time), and ways to communicate with homeschooling parents willing to
      provide their time and advice.
    </AboutSectionText>
  </AboutSectionInnerWrapper>
);
