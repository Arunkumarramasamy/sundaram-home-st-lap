import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  PaginationItem,
  Pagination,
  Alert,
} from "@mui/material";
import GetBranchDetails from "../CustomComponents/GetBranchDetails";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import AccordianContainer from "../CustomComponents/AccordianContainer";
import CustomTextField from "../CustomComponents/CustomTextField";
import StlapFooter from "../CustomComponents/StlapFooter";
import CustomAutoComplete from "../CustomComponents/CustomAutoComplete";
import axios from "axios";
import { BranchAction } from "../Store/Branch";
import { useDispatch } from "react-redux";

const Repayment = () => {
  return (
    <Box>
      <AccordianContainer
        id="accord"
        title="Nach Mandate"
        initialOpen={true}
        sx={{ margin: "8px !important" }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomAutoComplete
              variant="standard"
              type="text"
              id="branch"
              placeholder="Select Branch"
              label="Branch"
              // autoCompleteValues={branchArray}
              // value={branchValue}
              onBlur={() => {
                //   setBranchHasTouched(true);
              }}
              onChange={(event, newValue) => {
                //   branchOnChangeHandler(newValue);
              }}
            />
            {/* {branchHasError && <p className="error">Please Select Branch</p>} */}
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomAutoComplete
              variant="standard"
              type="text"
              id="applicationNumber"
              placeholder="Select Application Number"
              label="Application Number"
              // autoCompleteValues={applicationArray}
              // value={applicationValue}
              onBlur={() => {
                //   setApplicationHasTouched(true);
              }}
              onChange={(event, value) => {
                //   applicationNumberOnChangeHandler(value);
              }}
            />
            {/* {applicationHasError && (
            <p className="error">Please Select Application Number</p>
          )} */}
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              type="text"
              label="Customer Name"
              id="customerName"
              variant="standard"
              placeholder="Enter Customer Name"
              // value={FilteredData.customerID.toUpperCase()}
              disabled={true}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            marginTop: "12px",
            marginBottom: "8px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            type="submit"
            sx={{ height: "2rem" }}
            //   onClick={SearchButtonHandler}
          >
            Detail
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
            //   onClick={ClearButtonHandler}
          >
            Clear
          </Button>
        </Box>
      </AccordianContainer>
    </Box>
  );
};

export default Repayment;
