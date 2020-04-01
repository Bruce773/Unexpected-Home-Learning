import React, { useState, useEffect } from "react";
import { UseSiteData, Resources as ResourcesType } from "Hooks";
import { Card, MainHeader } from "Components";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";

export const Resources: React.FC = () => {
  const { resources } = UseSiteData();
  const [resourcesList, setResourcesList] = useState<ResourcesType | any>(
    resources
  );
  const {
    handleChange,
    values: { search }
  } = useFormik({
    initialValues: { search: "" },
    onSubmit: () => undefined
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
          const lowercasedTitle = item.title.toLowerCase();
          if (lowercasedTitle.includes(search.toLowerCase()))
            filteredItems.push(item);
          if (item.resourceCategory?.includes(search)) filteredItems.push(item);
          if (item.resourceFormat.includes(search)) filteredItems.push(item);
        });
      setResourcesList(filteredItems);
    } else {
      setResourcesList(resources);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <>
      <MainHeader style={{ marginBottom: "60px" }} variant="h2">
        Unexpected Home Learning
      </MainHeader>
      <TextField
        name="search"
        onChange={handleChange}
        value={search}
        style={{ marginBottom: "20px", width: "460px" }}
        label="Find a resource"
        variant="outlined"
      />
      <Container maxWidth="md">
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
      </Container>
    </>
  );
};
