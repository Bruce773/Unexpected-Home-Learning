import React from "react";
import { Resources, UseSplitResources } from "../../Hooks";
import { Card } from "../../Components";
import styled from "styled-components";
import { BaseFont } from "../../globalStyles";

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
  const {
    generalResources,
    elementaryResources,
    middleAndHighResources
  } = UseSplitResources(resources, 3);

  return (
    <>
      <SectionHeder>General</SectionHeder>
      {generalResources &&
        generalResources.map(({ ...props }) => <Card {...props} />)}
      <SectionHeder>Elementary School</SectionHeder>
      {elementaryResources &&
        elementaryResources.map(({ ...props }) => <Card {...props} />)}
      <SectionHeder>Middle & High School</SectionHeder>
      {middleAndHighResources &&
        middleAndHighResources.map(({ ...props }) => <Card {...props} />)}
    </>
  );
};
