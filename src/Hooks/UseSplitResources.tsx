import { useState, useEffect } from "react";
import { Resources } from "Hooks";

export const UseSplitResources = (resources?: Resources) => {
  const [generalResources, setGeneralResources] = useState<Resources>();
  const [elementaryResources, setEmentaryResources] = useState<Resources>();
  const [middleAndHighResources, setMiddleAndHighResources] = useState<
    Resources
  >();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const buildResourceLists = () => {
    const tempGeneralResources: Resources = [];
    const tempElementaryResources: Resources = [];
    const tempMiddleAndHighResources: Resources = [];

    resources?.forEach(item => {
      if (item.resourceCategory) {
        const category = item.resourceCategory[0];
        if (category === "General" && tempGeneralResources.length < 3) {
          tempGeneralResources.push(item);
        }
        if (category === "Elementary" && tempElementaryResources.length < 3) {
          tempElementaryResources.push(item);
        }
        if (
          category === "Middle/High" &&
          tempMiddleAndHighResources.length < 3
        ) {
          tempMiddleAndHighResources.push(item);
        }
      }
    });
    setGeneralResources(tempGeneralResources);
    setEmentaryResources(tempElementaryResources);
    setMiddleAndHighResources(tempMiddleAndHighResources);
  };

  useEffect(() => {
    buildResourceLists();
  }, [buildResourceLists]);

  return { generalResources, elementaryResources, middleAndHighResources };
};
