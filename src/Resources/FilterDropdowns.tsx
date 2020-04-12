import React, { useEffect, useState, Dispatch } from "react";
import { Resources } from "Hooks";
import { FilterStateTypes } from "./Resources";
import { StyledSelect } from "./elements";
import MenuItem from "@material-ui/core/MenuItem";

interface StringIndexedObject {
  [key: string]: string;
}

interface FilterProps {
  filtersState: FilterStateTypes;
  setFiltersState: Dispatch<FilterStateTypes>;
  resources: Resources;
}

interface CreateDropdownListTypes {
  menuList: StringIndexedObject;
  placeHolderString: string;
  filterPhrase: "pricing" | "format";
}

export const FilterDropdowns = ({
  filtersState,
  setFiltersState,
  resources,
}: FilterProps) => {
  const [filterablePrices, setFilterablePrices] = useState<StringIndexedObject>(
    {}
  );
  const [filterableFormats, setFilterableFormats] = useState<
    StringIndexedObject
  >({});

  useEffect(() => {
    const pricingObj: StringIndexedObject = {};
    const formatObj: StringIndexedObject = {};
    resources?.forEach(({ pricing, resourceFormat }) => {
      if (!pricingObj[pricing]) {
        pricingObj[pricing] = pricing;
      }
      if (!formatObj[resourceFormat]) {
        formatObj[resourceFormat] = resourceFormat;
      }
    });
    setFilterablePrices(pricingObj);
    setFilterableFormats(formatObj);
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
      <StyledSelect
        onChange={({ target: { value } }) => {
          const newState: any = { ...filtersState };
          newState[filterPhrase] = value;
          setFiltersState(newState);
        }}
        value={filtersState[filterPhrase]}
      >
        {dropDownMenuItems}
      </StyledSelect>
    );
  };

  return (
    <>
      {createDropDownList({
        menuList: filterablePrices,
        placeHolderString: "Filter by Price",
        filterPhrase: "pricing",
      })}
      {createDropDownList({
        menuList: filterableFormats,
        placeHolderString: "Filter by Format",
        filterPhrase: "format",
      })}
    </>
  );
};
