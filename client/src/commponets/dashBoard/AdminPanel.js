import React from "react";
import LeftNav from ".//LeftNav";
import Grid from "@material-ui/core/Grid";

export const AdminPanel = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <p>menu</p>
          <LeftNav /> 
        </Grid>
        <Grid item xs={3}>
          fill
        </Grid>
      </Grid>
    </div>
  );
};
