import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import CustomAutoComplete from "../CustomComponents/CustomAutoComplete";
import CustomTextField from "../CustomComponents/CustomTextField";

const NachApproval = () => {
  //Filter conditions State value
  const [branchArray, setBranchArray] = useState([]);
  const [branchValue, setBranchValue] = useState();
  const [applicationArray, setApplicationArray] = useState([]);
  const [applicationValue, setApplicationValue] = useState();
  const [UMRNArray, setUMRNArray] = useState([]);
  const [UMRNValue, setUMRN] = useState();
  return (
    <Box sx={{ padding: "18px", backgroundColor: "white" }}>
      <h4>Nach Approval</h4>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomAutoComplete
            variant="standard"
            type="text"
            placeholder="Select Branch"
            label="Branch"
            autoCompleteValues={branchArray}
            value={branchValue}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomAutoComplete
            variant="standard"
            type="text"
            placeholder="Select Application Number"
            label="Application Number"
            autoCompleteValues={applicationArray}
            value={applicationValue}
            onChange={(value) => {
              setApplicationValue(value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomAutoComplete
            variant="standard"
            type="text"
            placeholder="Select UMRN Number"
            label="Application Number"
            autoCompleteValues={UMRNArray}
            value={UMRNValue}
            onChange={(value) => {
              setUMRN(value);
            }}
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
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            type="text"
            label="Status"
            variant="standard"
            placeholder="Enter Status"
          />
        </Grid>
      </Grid>
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "18px" }}
      >
        <Button variant="contained" type="submit" sx={{ height: "2rem" }}>
          Accept
        </Button>
        <Button
          sx={{
            marginLeft: "1rem",
            color: "white",
            backgroundColor: "black",
            height: "2rem",
          }}
          onMouseOver={({ target }) => {
            target.style.backgroundColor = "black";
            target.style.color = "white";
          }}
          variant="contained"
        >
          Reject
        </Button>
      </Box>
    </Box>
  );
};

export default NachApproval;