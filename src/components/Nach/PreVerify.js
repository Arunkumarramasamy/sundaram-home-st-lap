import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CustomTextField from "../CustomComponents/CustomTextField";

const PreVerify = () => {
  return (
    <Box sx={{ padding: "18px", backgroundColor: "white" }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            type="text"
            label="Branch"
            variant="standard"
            placeholder="Enter Branch"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            type="text"
            label="UMRN Number"
            variant="standard"
            placeholder="Enter UMRN Number"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            type="text"
            label="Customer ID"
            variant="standard"
            placeholder="Enter Customer ID"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            type="text"
            label="Customer Name"
            variant="standard"
            placeholder="Enter Customer Name"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            type="text"
            label="Mandate Number"
            variant="standard"
            placeholder="Enter Mandate Number"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            type="text"
            label="Mandate Bank"
            variant="standard"
            placeholder="Enter Mandate Bank"
          />
        </Grid>
      </Grid>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "18px" }}
      >
        <Button variant="contained" type="submit" sx={{ height: "2rem" }}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default PreVerify;
