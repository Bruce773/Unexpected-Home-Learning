import { data } from "data.js";
import { useState, useEffect } from "react";

interface ResourceType {
  dataType: "resource" | "localContact";
  title: string;
  subtitle?: string;
  pricing?: string;
  resourceLink?: string;
  resourceCategory?: string[];
  resourceFormat: string;
  embedlyHtml?: string;
  name?: string;
  content?: any[];
  areaOfExpertise?: string;
}

export type Resources = Omit<ResourceType, "dataType">[];

type HookShape = () => { resources?: Resources; localContacts?: Resources };

const siteData = (data as unknown) as ResourceType[];

export const UseSiteData: HookShape = () => {
  const [resources, setResources] = useState<
    Omit<ResourceType, "dataType">[]
  >();
  const [localContacts, setLocalContacts] = useState<
    Omit<ResourceType, "dataType">[]
  >();
  let tempResources: Omit<ResourceType, "dataType">[] = [];
  let tempLocalContacts: Omit<ResourceType, "dataType">[] = [];

  const populateResources = () => {
    siteData.forEach(({ dataType, ...rest }) => {
      if (dataType === "resource") {
        tempResources.push({ ...rest });
      }
      if (dataType === "localContact") {
        tempLocalContacts.push({ ...rest });
      }
    });

    setResources(tempResources);
    setLocalContacts(tempLocalContacts);
  };

  useEffect(() => {
    populateResources();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { resources, localContacts };
};
