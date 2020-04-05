import React from "react";
import { CarouselCardWrapper, CarouselCardTitle } from "./elements";

interface Props {
  title: string;
  buttonText?: string;
  buttonLink?: string;
}

export const CarouselCard: React.FC<Props> = ({ title }) => (
  <CarouselCardWrapper>
    <CarouselCardTitle>{title}</CarouselCardTitle>
  </CarouselCardWrapper>
);
