import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const BaseFont = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.334;
  letter-spacing: 0em;
`;

export const MainHeader = styled(Typography)`
  && {
    margin-top: 20px;
  }
`;

export const AboutSectionWrapper = styled.div`
  padding-top: 1px;
  padding-bottom: 30%;
  top: 0px;
  background-color: #8080801f;
`;

export const SectionHeader = styled(BaseFont)`
  font-size: 1.7rem;
  font-weight: 400;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const CardWrapper = styled(Paper)`
  padding-top: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export const CardTitle = styled(BaseFont)`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 4px;
  text-align: left;
`;

export const CardSubtitle = styled(BaseFont)`
  color: #575757;
  font-size: 1rem;
  text-align: left;
`;

export const CardResourceFormat = styled(BaseFont)`
  text-align: left;
  color: #19b1a9;
  font-weight: bold;
  margin-top: 16px;
`;
