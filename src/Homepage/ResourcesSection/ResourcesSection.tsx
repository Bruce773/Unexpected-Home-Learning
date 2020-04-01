import React from "react";
import { Resources } from "Hooks";
import { Card } from "Components";
import styled from "styled-components";
import { BaseFont } from "globalStyles";

const SectionHeder = styled(BaseFont)`
  font-size: 1.5rem;
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: black solid 1px;
  padding-bottom: 10px;
`;

export const ResourcesSection: React.FC<{
  resources?: Resources;
}> = ({ resources }) => {
  const generalResources: Resources = [];
  const elementaryResources: Resources = [];
  const middleAndHighResources: Resources = [];

  resources?.forEach(item => {
    if (item.resourceCategory) {
      const category = item.resourceCategory[0];
      if (category === "General" && generalResources.length < 3) {
        generalResources.push(item);
      }
      if (category === "Elementary" && elementaryResources.length < 3) {
        elementaryResources.push(item);
      }
      if (category === "Middle/High" && middleAndHighResources.length < 3) {
        middleAndHighResources.push(item);
      }
    }
  });

  return (
    <>
      <SectionHeder>General</SectionHeder>
      {generalResources.map(({ ...props }) => (
        <Card {...props} />
      ))}
      <SectionHeder>Elementary School</SectionHeder>
      {elementaryResources.map(({ ...props }) => (
        <Card {...props} />
      ))}
      <SectionHeder>Middle & High School</SectionHeder>
      {middleAndHighResources.map(({ ...props }) => (
        <Card {...props} />
      ))}
    </>
  );
};
