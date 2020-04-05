import styled from "styled-components";
import { BaseFont, lightTealGreen, darkGrey } from "globalStyles";
import Paper from "@material-ui/core/Paper";

export const AboutSectionWrapper = styled.div`
  padding-top: 1px;
  padding-bottom: 8%;
  top: 0px;
  background-color: #8080801f;
`;

export const SectionHeader = styled(BaseFont)`
  font-size: 1.7rem;
  font-weight: 400;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const SeeAllText = styled(BaseFont)`
  font-size: 1.2rem;
  display: inline;
`;

export const AboutSectionInnerWrapper = styled(Paper)`
  /* height: 40%; */
  width: 72%;
  max-width: 700px;
  min-width: 350px;
  && {
    height: auto;
    background-color: ${lightTealGreen};
  }
  text-align: center;
  margin: auto;
  margin-top: 110px;
  padding: 20px;
`;

export const AboutSectionHeadingText = styled(BaseFont)`
  font-size: 2rem;
  color: white;
`;

export const AboutSectionText = styled(BaseFont)`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 1.4rem;
  color: ${darkGrey};
`;
