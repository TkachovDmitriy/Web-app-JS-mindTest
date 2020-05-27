import React from "react";
import { Category } from "./Category";
import Grid from "@material-ui/core/Grid";

const style = {
  padding:'20px'
}
const arr = [
  {
    id: "1",
    title: "smart",
    link: "/music"
    
  },
  {
    id: "2",
    title: "girls",
    link: "/music"
  },
  {
    id: "3",
    title: "musician",
    link: "/music"
  },
  {
    id: "4",
    title: "fun",
    link: "/music"
  },
  {
    id: "5",
    title: "logic",
    link: "/music"
  },
  {
    id:"6",
    title: "drunk",
    link: "/music"
  },
];

function MainChooseCategory() {
  return (
    <Grid item xs={12} style={style}>
      <Grid container justify="center" spacing={2}>
        {arr.map((value) => (
          <Grid key={value} item>
            <Category />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default MainChooseCategory;
