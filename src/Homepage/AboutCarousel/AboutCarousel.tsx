import React from "react";
import Carousel from "nuka-carousel";
import { CarouselCard } from "./CarouselCard";
import { CarouselWrapper } from "./elements";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { UseSiteData } from "Hooks";

export const AboutCarousel: React.FC = () => {
  const isNotMobile = useMediaQuery("(min-width:600px)");
  const { resourceSpotlights, homeschoolTips } = UseSiteData();

  const buildCarouselItemsArr = () => {
    const finalArr: any = [];
    let primaryArr: any = [];
    let secondaryArr: any = [];
    if (resourceSpotlights && homeschoolTips) {
      if (resourceSpotlights.length > homeschoolTips.length) {
        primaryArr = resourceSpotlights;
        secondaryArr = homeschoolTips;
      } else {
        primaryArr = homeschoolTips;
        secondaryArr = resourceSpotlights;
      }
      primaryArr.forEach((item: any, index: number) => {
        finalArr.push(item);
        if (secondaryArr[index]) {
          finalArr.push(secondaryArr[index]);
        }
      });
      return finalArr;
    }
  };

  const CarouselData = buildCarouselItemsArr();

  console.log(CarouselData);

  return (
    <CarouselWrapper isNotMobile={isNotMobile}>
      <Carousel
        wrapAround
        autoplay
        autoplayInterval={3000}
        cellSpacing={110}
        cellAlign="center"
        slidesToShow={1}
        dragging={true}
        slideWidth={0.75}
      >
        {CarouselData?.length &&
          CarouselData.map(({ ...data }) => <CarouselCard {...data} />)}
      </Carousel>
    </CarouselWrapper>
  );
};
