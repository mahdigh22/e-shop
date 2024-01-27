import * as React from "react";
import Navbar from "./navbar";
import { Grid } from "@mui/material";

export default function Layout({
  children,
  type,
}: {
  children: any;
  type?: any;
}) {
  return (
    <Grid container sx={{ backgroundColor: "white" }}>
      <Grid
        item
        xs={12}
        sx={{
          height: "10vh",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Navbar />
      </Grid>
      <Grid item xs={12} sx={{ height: "90vh" }}>
        {children}
      </Grid>
    </Grid>
  );
}
