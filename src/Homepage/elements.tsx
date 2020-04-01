import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { BaseFont } from "globalStyles";

export const MainHeader = styled(Typography)`
  && {
    margin-top: 40px;
    font-size: 3rem;
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
  min-height: 120px;
  max-height: 180px;
  cursor: pointer;
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
  height: 40px;
`;

export const CardResourceFormat = styled(BaseFont)`
  text-align: left;
  color: #19b1a9;
  font-weight: bold;
  margin-top: 16px;
  position: absolute;
`;

export const CardPricing = styled(BaseFont)`
  margin-top: 16px;
  margin-left: 66%;
  letter-spacing: 0.07em;
  font-weight: 500;
  text-transform: uppercase;
`;

export const SeeAllText = styled(BaseFont)`
  font-size: 1.1rem;
  display: inline;
`;

export const ModalContentWrapper = styled.div`
  text-align: center;
  background-color: white;
  min-width: 65%;
  height: 80vh;
  position: absolute;
  margin: auto;
  border-radius: 6px;
  top: 10%;
  left: 19%;
  overflow: scroll;
`;

export const ModalCardTitle = styled(CardTitle)`
  & {
    text-align: center;
    font-size: 2rem;
    margin-top: 20px;
  }
`;

export const ModalCardSubtitle = styled(CardSubtitle)`
  & {
    text-align: center;
    margin-top: 15px;
    margin-bottom: 25px;
    font-size: 1.4rem;
    overflow-wrap: break-word;
  }
`;

export const ModalCardPricing = styled(CardPricing)`
  & {
    display: inline;
    margin-right: 30px;
    margin-left: 0px;
  }
`;

export const ModalCardResourceFormat = styled(CardResourceFormat)`
  & {
    display: inline;
    position: relative;
    margin-right: 30px;
  }
`;

export const ModalCardCategories = styled(BaseFont)`
  display: inline;
  color: #00000094;
  font-weight: bold;
  letter-spacing: 1.3px;
`;

export const LinkBoxWrapper = styled(Paper)`
  width: fit-content;
  padding: 20px;
  margin: auto;
`;
