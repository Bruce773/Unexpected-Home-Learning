import React from "react";
import { Resources } from "../../Hooks";
import { Card } from "../Card";

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
      General
      {generalResources.map(({ ...props }) => (
        <Card {...props} />
      ))}
      Elementary
      {elementaryResources.map(({ ...props }) => (
        <Card {...props} />
      ))}
      Middle & High School
      {middleAndHighResources.map(({ ...props }) => (
        <Card {...props} />
      ))}
    </>
  );
};
