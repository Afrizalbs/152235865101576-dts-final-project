import { Grid } from "@mui/material";
import React from "react";
import { Cards } from "../../components";

function News() {
  return (
    <Grid container spacing={3}>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </Grid>
  );
}

export default News;
