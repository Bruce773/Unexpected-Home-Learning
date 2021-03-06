import { data } from "data.js";
import { useState, useEffect } from "react";

interface ResourceType {
  dataType: "resource";
  title: string;
  subtitle: string;
  resourceLink: string;
  resourceCategory: string[];
  resourceFormat: string;
  pricing: string;
  embedlyHtml: string;
}

interface LocalContactType {
  dataType: "localContact";
  name: string;
  content: any[];
  areaOfExpertise: string;
}

export interface ResourceSpotlightType {
  dataType: "Resource Spotlight";
  buttonText: string;
  buttonLink: string;
  resourceSpotlightText: string;
}

export interface HomeschoolTipType {
  dataType: "Homeschool Tip";
  tipText: string;
}

interface RawDataTypes {
  resourceSpotlights?: ResourceSpotlightType[];
  homeschoolTips?: HomeschoolTipType[];
}

export type Resources = Omit<ResourceType, "dataType">[];
export type LocalContacts = Omit<LocalContactType, "dataType">[];
export type ResourceSpotlights = ResourceSpotlightType[];
export type HomeschoolTips = HomeschoolTipType[];

type HookShape = () => {
  resources?: Resources;
  localContacts?: LocalContacts;
  resourceSpotlights?: ResourceSpotlights;
  homeschoolTips?: HomeschoolTips;
};

type SiteDataTypes = ResourceType & LocalContactType & RawDataTypes;

const siteData = (data as unknown) as SiteDataTypes[];

export const UseSiteData: HookShape = () => {
  const [resources, setResources] = useState<Resources>();
  const [localContacts, setLocalContacts] = useState<LocalContacts>();
  const [resourceSpotlights, setResourceSpotlights] = useState<
    ResourceSpotlights
  >();
  const [homeschoolTips, setHomeschoolTips] = useState<HomeschoolTips>();
  let tempResources: Resources = [];
  let tempLocalContacts: LocalContacts = [];
  let tempResourceSpotlights: ResourceSpotlights = [];
  let tempHomeschoolTips: HomeschoolTips = [];

  const populateResources = () => {
    siteData.forEach(({ dataType, ...rest }) => {
      if (dataType === "resource") {
        tempResources.push({ ...rest });
      }
      if (dataType === "localContact") {
        tempLocalContacts.push({ ...rest });
      }
      if (dataType === "resourceSpotlightsGroup") {
        rest.resourceSpotlights?.forEach(({ ...resourceSpotlightData }) =>
          tempResourceSpotlights.push({
            dataType: "Resource Spotlight",
            ...resourceSpotlightData,
          })
        );
      }
      if (dataType === "homeschoolTipsGroup") {
        rest.homeschoolTips?.forEach(({ tipText }) =>
          tempHomeschoolTips.push({ tipText, dataType: "Homeschool Tip" })
        );
      }
    });

    setResources(tempResources);
    setLocalContacts(tempLocalContacts);
    setResourceSpotlights(tempResourceSpotlights);
    setHomeschoolTips(tempHomeschoolTips);
  };

  useEffect(() => {
    populateResources();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { resources, localContacts, resourceSpotlights, homeschoolTips };
};
