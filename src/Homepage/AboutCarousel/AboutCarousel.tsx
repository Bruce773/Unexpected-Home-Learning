import React from "react";
import Carousel from "nuka-carousel";
import { CarouselCard } from "./CarouselCard";
import { CarouselWrapper } from "./elements";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export const AboutCarousel: React.FC = () => {
  const isNotMobile = useMediaQuery("(min-width:600px)");

  return (
    <CarouselWrapper isNotMobile={isNotMobile}>
      <Carousel
        wrapAround
        //   autoplay
        //   autoplayInterval={5000}
        cellSpacing={50}
        cellAlign="center"
        slidesToShow={1}
        dragging={true}
        slideWidth={0.75}
      >
        <CarouselCard title="Item 1" />
        <CarouselCard title="Item 2" />
        <CarouselCard title="Item 3" />
      </Carousel>
    </CarouselWrapper>
  );
};
