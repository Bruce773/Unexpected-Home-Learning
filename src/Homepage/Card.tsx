import React from "react";
import {
  CardTitle,
  CardSubtitle,
  CardWrapper,
  CardResourceFormat
} from "./elements";

interface Props {
  title: string;
  resourceLink?: string;
  resourceCategory?: string[];
  resourceFormat?: string;
  subtitle?: string;
  pricing?: string;
}

export const Card: React.FC<Props> = ({ title, subtitle, resourceFormat }) => (
  <CardWrapper>
    <CardTitle>{title}</CardTitle>
    {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
    {resourceFormat && (
      <CardResourceFormat>{resourceFormat}</CardResourceFormat>
    )}
  </CardWrapper>
);
