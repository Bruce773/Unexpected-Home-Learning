import React from "react";
import {
  CarouselCardWrapper,
  CarouselCardTitle,
  CarouselCardText,
  StyledButton,
  TitleSectionWrapper,
} from "./elements";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export const CarouselCard: React.FC = ({ dataType, ...data }: any) => {
  const isHomeSchoolTip = dataType === "Homeschool Tip";

  const text = isHomeSchoolTip ? data.tipText : data.resourceSpotlightText;

  const isNotMobile = useMediaQuery("(min-width:600px)");

  return (
    <CarouselCardWrapper>
      <TitleSectionWrapper>
        <Grid container>
          <Grid item xs={12} md={6}>
            <CarouselCardTitle isNotMobile={isNotMobile}>
              {dataType}
            </CarouselCardTitle>
          </Grid>
          <Grid item xs={12} md={6}>
            {!isHomeSchoolTip && (
              <a
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
                href={data.buttonLink}
              >
                <StyledButton isNotMobile={isNotMobile}>
                  {data.buttonText} <ArrowForwardIosIcon />
                </StyledButton>
              </a>
            )}
          </Grid>
        </Grid>
      </TitleSectionWrapper>
      <CarouselCardText variant="h2">{text}</CarouselCardText>
    </CarouselCardWrapper>
  );
};
