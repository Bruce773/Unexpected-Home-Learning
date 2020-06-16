import React, { useState } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { UseSplitResources, UseSiteData } from "Hooks";
import { SectionHeader } from "./elements";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Card } from "Components";

export const AllResourcesSection = () => {
  const { resources } = UseSiteData();
  const [sectionOneDown, setSectionOneDown] = useState(false);
  const [sectionTwoDown, setSectionTwoDown] = useState(false);
  const [sectionThreeDown, setSectionThreeDown] = useState(false);
  const {
    generalResources,
    elementaryResources,
    middleAndHighResources,
  } = UseSplitResources(resources);

  return (
    <>
      <SectionHeader>General</SectionHeader>
      <ExpansionPanel onChange={() => setSectionOneDown(!sectionOneDown)}>
        <ExpansionPanelSummary>
          <Button variant="text">
            General resources{" "}
            {sectionOneDown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Button>
        </ExpansionPanelSummary>
        {sectionOneDown && (
          <ExpansionPanelDetails>
            <Grid container spacing={4}>
              {generalResources?.map(({ ...props }) => {
                return (
                  <Grid item xs={12} md={6}>
                    <Card {...props} />
                  </Grid>
                );
              })}
            </Grid>
          </ExpansionPanelDetails>
        )}
      </ExpansionPanel>
      <SectionHeader>Elementary School</SectionHeader>
      <ExpansionPanel onChange={() => setSectionTwoDown(!sectionTwoDown)}>
        <ExpansionPanelSummary>
          <Button variant="text">
            Elementary School resources{" "}
            {sectionTwoDown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Button>
        </ExpansionPanelSummary>
        {sectionTwoDown && (
          <ExpansionPanelDetails>
            <Grid container spacing={4}>
              {elementaryResources?.map(({ ...props }) => {
                return (
                  <Grid item xs={12} md={6}>
                    <Card {...props} />
                  </Grid>
                );
              })}
            </Grid>
          </ExpansionPanelDetails>
        )}
      </ExpansionPanel>
      <SectionHeader>Middle/High School</SectionHeader>
      <ExpansionPanel onChange={() => setSectionThreeDown(!sectionThreeDown)}>
        <ExpansionPanelSummary>
          <Button variant="text">
            Middle/High School resources{" "}
            {sectionThreeDown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Button>
        </ExpansionPanelSummary>
        {sectionThreeDown && (
          <ExpansionPanelDetails>
            <Grid container spacing={4}>
              {middleAndHighResources?.map(({ ...props }) => (
                <Grid item xs={12} md={6}>
                  <Card {...props} />
                </Grid>
              ))}
            </Grid>
          </ExpansionPanelDetails>
        )}
      </ExpansionPanel>
    </>
  );
};
