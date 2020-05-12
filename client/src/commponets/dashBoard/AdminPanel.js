import React from "react";
import LeftNav from ".//LeftNav";
import Grid from "@material-ui/core/Grid";
import { Category } from "../mainCheckCategory/Category";

export const AdminPanel = () => {
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={3}>
          <p>menu</p>
          <LeftNav /> 
          {/* <Category /> */}
          {/* <ul>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul> */}
        </Grid>
        <Grid item xs={9}>
          fill
        </Grid>
      </Grid>
    </div>
  );
};
