import React from "react";
import { UseSiteData } from "Hooks";
import Paper from "@material-ui/core/Paper";
import { Card } from "Components";

export const LocalContactSection: React.FC = () => {
  const { localContacts } = UseSiteData();
  console.log(localContacts);
  return (
    <>
      {localContacts?.map(({ name, areaOfExpertise }) => (
        <Paper>
          {name}
          <br />
          {areaOfExpertise}
        </Paper>
      ))}
    </>
  );
};
