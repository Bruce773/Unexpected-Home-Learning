import data from "../data.json";
import { useState, useEffect } from "react";

interface ResourceType {
  dataType: "resource";
  title: string;
  resourceLink: string;
  resourceCategory: string[];
  resourceFormat: string;
}

type Resources = Omit<ResourceType, "dataType">[];

type HookShape = () => { resources: Resources | undefined };

const siteData = data;

console.log(siteData);

export const UseSiteData: HookShape = () => {
  const [resources, setResouces] = useState<Omit<ResourceType, "dataType">[]>();
  let tempResources: Omit<ResourceType, "dataType">[] = [];
  let localContacts = [];

  const populateResources = () => {
    siteData.forEach(({ dataType, ...rest }) => {
      if (dataType === "resource") {
        tempResources.push({ ...rest });
      }
    });

    setResouces(tempResources);
  };

  useEffect(() => {
    populateResources();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { resources };
};
