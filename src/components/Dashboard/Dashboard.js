import React from "react";
import { Grid } from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import { DashboardContent } from "./DashboardContent";
import useMediaQuery from '@mui/material/useMediaQuery';


export const Dashboard = (props) => {
  const gt1200px = useMediaQuery('(min-width:1201px)');
  const lt1200px = useMediaQuery('(max-width:1200px)');
  return (
    <React.Fragment>
      {gt1200px &&
        <Masonry spacing={1} columns={{ xs: 12, sm: 8, md: 6, lg: 4, xl: 4 }} sx={{height:window.innerHeight-110}} >
          <DashboardContent />
        </Masonry>}
        {lt1200px && 
        <Grid container spacing={1} columns={{ xs: 12, sm: 8, md: 6, lg: 4, xl: 4 }} sx={{height:window.innerHeight-110}}>
          <DashboardContent />
          </Grid>}
    </React.Fragment>
  );
};

Dashboard.propTypes = {};