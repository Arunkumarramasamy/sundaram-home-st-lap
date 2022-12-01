import React from "react";
import { Grid } from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import { DashboardContent } from "./DashboardContent";
import MediaQuery from "react-responsive";


export const Dashboard = (props) => {
  return (
    <React.Fragment>
      <MediaQuery query="(min-device-width: 1201px)">
        <Masonry spacing={1} columns={{ xs: 12, sm: 8, md: 6, lg: 4, xl: 4 }} >
          <DashboardContent />
        </Masonry>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1200px)">
        <Grid container spacing={1} columns={{ xs: 12, sm: 8, md: 6, lg: 4, xl: 4 }}><DashboardContent /></Grid>
      </MediaQuery>
    </React.Fragment>
  );
};

Dashboard.propTypes = {};