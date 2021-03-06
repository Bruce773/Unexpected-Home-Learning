import React, { useState, useEffect } from "react";
import { UseSiteData, Resources as ResourcesType } from "Hooks";
import { Card, MainHeader } from "Components";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import { SearchResultsCount } from "./elements";
import { AllResourcesSection } from "./AllResourcesSection";
import { FilterDropdowns } from "./FilterDropdowns";
import { FilterChips } from "./FilterChips";

export type filterTypes = "pricing" | "format";

export type FilterStateTypes = {
  [key in filterTypes]: string;
};

interface FilterListFuncProps {
  list: { resourceFormat: any; pricing: any }[];
  clearList(): void;
}

export const Resources: React.FC = () => {
  const { resources } = UseSiteData();
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [resourcesList, setResourcesList] = useState<ResourcesType | any>(
    resources
  );

  const [filterState, setFiltersState] = useState<FilterStateTypes>({
    pricing: "placeholder",
    format: "placeholder",
  });

  const {
    handleChange,
    values: { search },
  } = useFormik({
    initialValues: { search: "" },
    onSubmit: () => undefined,
  });

  useEffect(() => {
    setResourcesList(resources);
  }, [resources]);

  // Central function for handling all search/filter operations
  useEffect(() => {
    if (
      resources &&
      (search.length ||
        filterState.format !== "placeholder" ||
        filterState.pricing !== "placeholder")
    ) {
      setResourcesList([]);
      let filteredItems: any[] = [];

      // Handle search via text input
      if (search.length) {
        resources.forEach(item => {
          const lowercaseSearchTerm = search.toLowerCase();

          const lowercasedTitle = item.title.toLowerCase();
          const category = item.resourceCategory.join("").toLowerCase();
          const format = item.resourceFormat.toLowerCase();

          if (lowercasedTitle.includes(lowercaseSearchTerm)) {
            filteredItems.push(item);
          } else if (category.includes(lowercaseSearchTerm)) {
            filteredItems.push(item);
          } else if (format.includes(lowercaseSearchTerm)) {
            filteredItems.push(item);
          } else if (item.pricing.toLowerCase().includes(lowercaseSearchTerm)) {
            filteredItems.push(item);
          } else if (
            item.subtitle.toLowerCase().includes(lowercaseSearchTerm)
          ) {
            filteredItems.push(item);
          }
        });
      }

      // Adjusts filter list according to options selected by the dropdowns
      const filterList = ({ list, clearList }: FilterListFuncProps) => {
        const listCopy = list;
        clearList();
        listCopy.forEach(item => {
          const { resourceFormat, pricing } = item;

          const lowerCasedItemFormat = resourceFormat.toLowerCase();
          const lowerCasedDropdownFormat = filterState.format.toLowerCase();
          const lowerCasedItemPricing = pricing.toLowerCase();
          const lowerCasedDropdownPricing = filterState.pricing.toLowerCase();

          const dropdownFormatIsSelected = filterState.format !== "placeholder";
          const dropdownPricingIsSelected =
            filterState.pricing !== "placeholder";

          if (
            dropdownFormatIsSelected &&
            !dropdownPricingIsSelected &&
            lowerCasedItemFormat === lowerCasedDropdownFormat
          ) {
            filteredItems.push(item);
          } else if (
            !dropdownFormatIsSelected &&
            dropdownPricingIsSelected &&
            lowerCasedItemPricing === lowerCasedDropdownPricing
          ) {
            filteredItems.push(item);
          } else if (
            dropdownFormatIsSelected &&
            dropdownPricingIsSelected &&
            lowerCasedItemPricing === lowerCasedDropdownPricing &&
            lowerCasedItemFormat === lowerCasedDropdownFormat
          ) {
            filteredItems.push(item);
          }
        });
      };

      if (!search.length) {
        filterList({
          list: resources,
          clearList: () => {
            filteredItems = [];
          },
        });
      } else if (
        filterState.format !== "placeholder" ||
        filterState.pricing !== "placeholder"
      ) {
        filterList({
          list: filteredItems,
          clearList: () => {
            filteredItems = [];
          },
        });
      }

      setResourcesList(filteredItems);
      setShowSearchResults(true);
    } else {
      setResourcesList(resources);
      setShowSearchResults(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, filterState]);

  return (
    <>
      <MainHeader />
      <TextField
        name="search"
        onChange={handleChange}
        value={search}
        style={{ marginBottom: "20px", width: "380px" }}
        label="Find a resource"
        variant="outlined"
      />
      <FilterDropdowns
        resources={resourcesList}
        filtersState={filterState}
        setFiltersState={setFiltersState}
      />
      <Container maxWidth="md">
        {showSearchResults ? (
          <>
            <FilterChips
              setFiltersState={setFiltersState}
              filters={filterState}
            />
            <SearchResultsCount>
              Found {resourcesList.length} items
            </SearchResultsCount>
            <Grid container spacing={4}>
              {resourcesList !== undefined &&
              Array.isArray(resourcesList) &&
              resourcesList.length
                ? resourcesList.map(({ ...props }) => (
                    <Grid item xs={12} md={6}>
                      <Card {...props} />
                    </Grid>
                  ))
                : "No results"}
            </Grid>
          </>
        ) : (
          <AllResourcesSection />
        )}
      </Container>
    </>
  );
};
