import React, { useEffect, useState, Dispatch } from "react";
import { UseSiteData } from "Hooks";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { FilterStateTypes } from "./Resources";

interface StringIndexedObject {
  [key: string]: string;
}

interface FilterProps {
  filtersState: FilterStateTypes;
  setFiltersState: Dispatch<FilterStateTypes>;
}

interface CreateDropdownListTypes {
  menuList: StringIndexedObject;
  placeHolderString: string;
  filterPhrase: "pricing";
}

export const FilterDropdowns = ({
  filtersState,
  setFiltersState,
}: FilterProps) => {
  const { resources } = UseSiteData();
  const [filterablePrices, setFilterablePrices] = useState<StringIndexedObject>(
    {}
  );

  useEffect(() => {
    const obj: StringIndexedObject = {};
    resources?.forEach(({ pricing }) => {
      if (!obj[pricing]) {
        obj[pricing] = pricing;
      }
    });
    setFilterablePrices(obj);
  }, [resources]);

  const createDropDownList = ({
    menuList,
    placeHolderString,
    filterPhrase,
  }: CreateDropdownListTypes) => {
    const dropDownMenuItems = [
      <MenuItem value="placeholder" disabled>
        {placeHolderString}
      </MenuItem>,
    ];
    for (const key in menuList) {
      dropDownMenuItems.push(<MenuItem value={key}>{key}</MenuItem>);
    }
    return (
      <Select
        onChange={({ target: { value } }) => {
          const newState: any = { ...filtersState };
          newState[filterPhrase] = value;
          setFiltersState(newState);
        }}
        value={filtersState[filterPhrase]}
      >
        {dropDownMenuItems}
      </Select>
    );
  };

  return (
    <>
      {createDropDownList({
        menuList: filterablePrices,
        placeHolderString: "Filter by Price",
        filterPhrase: "pricing",
      })}
    </>
  );
};
