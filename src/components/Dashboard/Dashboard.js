import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { DashboardContent } from "./DashboardContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import DashboardBoardNewContent from "./DashBoardNewContent";

export const Dashboard = (props) => {
  const gt = useMediaQuery("(min-width:1024px)");
  const lt = useMediaQuery("(max-width:1023px)");
  return (
    <React.Fragment>
      {gt && (
        <Masonry
          spacing={1}
          columns={{ xs: 12, sm: 8, md: 6, lg: 5, xl: 5 }}
          sx={{
            height: window.innerHeight - 110,
            width: window.innerWidth - 32,
          }}
        >
          <DashboardBoardNewContent />
        </Masonry>
      )}

      {lt && (
        <Grid
          container
          spacing={1}
          columns={{ xs: 12, sm: 8, md: 6, lg: 6, xl: 4 }}
          sx={{
            height: window.innerHeight - 110,
            width: window.innerWidth - 32,
          }}
        >
          {/* <DashboardContent /> */}
          <DashboardBoardNewContent />
        </Grid>
      )}
      <Box component="footer" sx={{mt: 'auto', textAlign: "center" }}>
        <Typography sx={{ color: "black" }} align="center">
          {" "}
          Copyright © Sundaram Home 2022.
        </Typography>
      </Box>
    </React.Fragment>
  );
};

Dashboard.propTypes = {};
