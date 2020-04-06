import styled from "styled-components";
import { lightTealGreen, BaseFont } from "globalStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export const CarouselWrapper = styled.div<{ isNotMobile: boolean }>`
  & {
    ${({ isNotMobile }) =>
      isNotMobile &&
      `margin-right: 20%;
       min-width: 45vw;
      `}
  }
  margin-top: 110px;
  .slider-control-bottomcenter ul {
    background-color: ${lightTealGreen};
    height: 23px;
    border-radius: 10px;
  }
  .slider-control-centerright button {
    border-radius: 5px;
  }
  .slider-control-centerleft button {
    border-radius: 5px;
  }
`;

export const CarouselCardWrapper = styled.div`
  background-color: ${lightTealGreen};
  overflow: scroll;
  height: 575px;
  width: 100%;
  border-radius: 10px;
`;

export const CarouselCardTitle = styled(BaseFont)<{ isNotMobile: boolean }>`
  && {
    font-size: 1.3rem;
    text-align: left;
    margin-left: 30px;
    margin-top: 20px;
    text-transform: uppercase;
    ${({ isNotMobile }) =>
      !isNotMobile &&
      `
        text-align: center;
        margin-left: 0px;
    `}
  }
`;

export const TitleSectionWrapper = styled.div``;

export const CarouselCardText = styled(Typography)`
  && {
    font-size: 1.7rem;
    padding: 50px;
    overflow: scroll;
    white-space: pre-wrap;
    padding-top: 36px;
  }
`;

export const StyledButton = styled(Button)<{
  isNotMobile: boolean;
  marginBottom?: boolean;
}>`
  && {
    margin-left: 30px;
    margin-top: 20px;
    font-size: 1.1rem;
    text-align: left;
    padding: 0px;
    ${({ isNotMobile }) =>
      !isNotMobile &&
      `
        text-align: center;
        margin-left: 0px;
    `}
    ${({ marginBottom }) => marginBottom && "margin-bottom: 60px;"}
  }
`;
