import React, { useState, useEffect } from "react";
import { UseSiteData, Resources as ResourcesType } from "Hooks";
import { Card, MainHeader } from "Components";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import { SearchResultsCount } from "./elements";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Paper from "@material-ui/core/Paper";
import { Link } from "globalStyles";
import { AllResourcesSection } from "./AllResourcesSection";
import { FilterDropdowns } from "./FilterDropdowns";

export interface FilterStateTypes {
  pricing: string;
  format: string;
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

  useEffect(() => {
    if (search.length) {
      setResourcesList([]);
      const filteredItems: any[] = [];
      resources &&
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
      setResourcesList(filteredItems);
      setShowSearchResults(true);
    } else {
      setResourcesList(resources);
      setShowSearchResults(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <>
      <Link to="/">
        <Paper style={{ position: "fixed", top: "0px", marginLeft: "35px" }}>
          <Button variant="text">
            <ArrowBackIcon /> Home
          </Button>
        </Paper>
      </Link>
      <MainHeader style={{ marginBottom: "60px" }} variant="h2">
        Unexpected Home Learning
      </MainHeader>
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
