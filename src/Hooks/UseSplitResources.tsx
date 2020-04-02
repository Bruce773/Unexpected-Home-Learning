import { useState, useEffect } from "react";
import { Resources } from "Hooks";

export const UseSplitResources = (resources?: Resources, limit?: number) => {
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
        item.resourceCategory.forEach(category => {
          if (
            category === "General" &&
            (limit ? tempGeneralResources.length < limit : true)
          ) {
            tempGeneralResources.push(item);
          }
          if (
            category === "Elementary" &&
            (limit ? tempElementaryResources.length < limit : true)
          ) {
            tempElementaryResources.push(item);
          }
          if (
            category === "Middle/High" &&
            (limit ? tempMiddleAndHighResources.length < limit : true)
          ) {
            tempMiddleAndHighResources.push(item);
          }
        });
      }
    });
    setGeneralResources(tempGeneralResources);
    setEmentaryResources(tempElementaryResources);
    setMiddleAndHighResources(tempMiddleAndHighResources);
  };

  useEffect(() => {
    buildResourceLists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resources]);

  return { generalResources, elementaryResources, middleAndHighResources };
};
