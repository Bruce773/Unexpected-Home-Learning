import React, { useState, useEffect } from "react";
import { UseSplitResources, UseSiteData } from "Hooks";
import { Card } from "Components";
import styled from "styled-components";
import { BaseFont, tealGreen } from "globalStyles";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const SectionHeder = styled(BaseFont)`
  &&& {
    font-size: 1.5rem;
    margin-top: 20px;
    margin-bottom: 20px;
    border-bottom: ${tealGreen} solid 2px;
    padding-bottom: 10px;
  }
`;

export const ResourcesSection: React.FC = () => {
  const { resources } = UseSiteData();

  const isMobile = useMediaQuery("(min-width:600px)");

  const [sectionOneDown, setSectionOneDown] = useState(isMobile);
  const [sectionTwoDown, setSectionTwoDown] = useState(isMobile);
  const [sectionThreeDown, setSectionThreeDown] = useState(isMobile);

  useEffect(() => {
    setSectionOneDown(isMobile);
    setSectionTwoDown(isMobile);
    setSectionThreeDown(isMobile);
  }, [isMobile]);

  const {
    generalResources,
    elementaryResources,
    middleAndHighResources,
  } = UseSplitResources(resources, 3);

  return (
    <>
      <SectionHeder>General</SectionHeder>
      <ExpansionPanel
        expanded={sectionOneDown}
        onChange={() => setSectionOneDown(!sectionOneDown)}
      >
        <ExpansionPanelSummary>
          <Button variant="text">
            General resources{" "}
            {sectionOneDown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Button>
        </ExpansionPanelSummary>
        {generalResources &&
          generalResources.map(({ ...props }) => <Card {...props} />)}
      </ExpansionPanel>
      <SectionHeder>Elementary School</SectionHeder>
      <ExpansionPanel
        expanded={sectionTwoDown}
        onChange={() => setSectionTwoDown(!sectionTwoDown)}
      >
        <ExpansionPanelSummary>
          <Button variant="text">
            Elementary School resources{" "}
            {sectionTwoDown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Button>
        </ExpansionPanelSummary>
        {elementaryResources &&
          elementaryResources.map(({ ...props }) => <Card {...props} />)}
      </ExpansionPanel>
      <SectionHeder>Middle & High School</SectionHeder>
      <ExpansionPanel
        expanded={sectionThreeDown}
        onChange={() => setSectionThreeDown(!sectionThreeDown)}
      >
        <ExpansionPanelSummary>
          <Button variant="text">
            Middle & High School resources{" "}
            {sectionThreeDown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Button>
        </ExpansionPanelSummary>
        {middleAndHighResources &&
          middleAndHighResources.map(({ ...props }) => <Card {...props} />)}
      </ExpansionPanel>
    </>
  );
};
