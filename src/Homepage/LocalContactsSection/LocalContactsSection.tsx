import React from "react";
import { UseSiteData } from "Hooks";
import { LocalContactsCard } from "Components";

export const LocalContactSection: React.FC = () => {
  const { localContacts } = UseSiteData();
  console.log(localContacts);
  return (
    <>
      {localContacts?.map(({ ...props }) => (
        <LocalContactsCard {...props} />
      ))}
    </>
  );
};
