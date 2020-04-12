import React from "react";
import Chip from "@material-ui/core/Chip";

interface Props {
  filters: any;
  setFiltersState: React.Dispatch<any>;
}

export const FilterChips: React.FC<Props> = ({ filters, setFiltersState }) => {
  const filtersList: { [key: string]: string }[] = [];

  for (const key in filters) {
    if (filters[key] !== "placeholder") {
      filtersList.push({ key, value: filters[key] });
    }
  }

  return (
    <>
      {filtersList.map(({ key, value }) => (
        <Chip
          style={{ marginLeft: "10px" }}
          label={value}
          onDelete={() => {
            const newState = { ...filters };
            newState[key] = "placeholder";
            setFiltersState(newState);
          }}
        />
      ))}
    </>
  );
};
