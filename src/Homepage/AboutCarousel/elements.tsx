import styled from "styled-components";
import { lightTealGreen, BaseFont } from "globalStyles";

export const CarouselWrapper = styled.div<{ isNotMobile: boolean }>`
  & {
    ${({ isNotMobile }) =>
      isNotMobile &&
      `margin-right: 20%;
       min-width: 45vw;
      `}
  }
  margin-top: 110px;
`;

export const CarouselCardWrapper = styled.div`
  background-color: ${lightTealGreen};
  height: 575px;
  width: 100%;
  border-radius: 10px;
`;

export const CarouselCardTitle = styled(BaseFont)`
  && {
    font-size: 2rem;
  }
`;
