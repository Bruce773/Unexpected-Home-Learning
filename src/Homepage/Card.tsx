import React from "react";
import {
  CardTitle,
  CardSubtitle,
  CardWrapper,
  CardResourceFormat,
  CardCategory
} from "./elements";
import { _truncate } from "utilities";

interface Props {
  title: string;
  resourceLink?: string;
  resourceCategory?: string[];
  resourceFormat?: string;
  subtitle?: string;
  pricing?: string;
}

export const Card: React.FC<Props> = ({
  title,
  subtitle,
  resourceFormat,
  resourceCategory
}) => {
  const truncatedSubtitle = _truncate(subtitle, 60);
  const truncatedTitle = _truncate(title, 25);

  return (
    <CardWrapper>
      <CardTitle>{truncatedTitle}</CardTitle>
      {subtitle && <CardSubtitle>{truncatedSubtitle}</CardSubtitle>}
      {resourceFormat && (
        <CardResourceFormat>{resourceFormat}</CardResourceFormat>
      )}
      {resourceCategory && <CardCategory>resourceCategory</CardCategory>}
    </CardWrapper>
  );
};
