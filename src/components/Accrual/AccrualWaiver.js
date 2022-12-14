import { Box, Typography } from "@mui/material";
import React from "react";

const AccrualWaiver = () => {
  return (
    <React.Fragment>
      <h2> Accrual</h2>
      <Box
        component="footer"
        sx={{
          mt: "auto",
          textAlign: "center",
          marginTop: "8px",
          position:  "absolute",
          left: "0",
          bottom: "0",
          right: "0",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Typography sx={{ color: "black" }} align="center">
          {" "}
          Copyright © Sundaram Home 2022.
        </Typography>
      </Box>
    </React.Fragment>
  );
};
export default AccrualWaiver;
