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
import CustomDateField from "../CustomComponents/CustomDateField";
import axios from "axios";
import { BranchAction } from "../Store/Branch";
import { useDispatch } from "react-redux";
const Retrival = () => {
    return(

    
  <Box>
    <AccordianContainer
      id="accord"
      title="Retrival Details"
      initialOpen={true}
      sx={{ margin: "8px !important" }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomAutoComplete
            variant="standard"
            type="text"
            placeholder="Select Type"
            label="Mode of Operation"
            id="modeOfOperation"
            autoCompleteValues={""}
            value={""}
            onBlur={() => {
            //   setBranchHasTouched(true);
            }}
            onChange={(event, newValue) => {
            //   branchOnChangeHandler(newValue);
            }}
          />
          {/* {branchHasError && <p className="error">Please Select Repay Type</p>} */}
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomAutoComplete
            variant="standard"
            type="text"
            placeholder="Select Bank"
            label="Sponser Bank"
            id="sponserBank"
            // autoCompleteValues={applicationArray}
            // value={applicationValue}
            onBlur={() => {
            //   setApplicationHasTouched(true);
            }}
            onChange={(event, value) => {
            //   applicationNumberOnChangeHandler(value);
            }}
          />
          {/* {applicationHasError && <p className="error">Please Select Bank</p>} */}
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDateField
            // disabled={disabledState}
            required={false}
            label="Retrival Date"
            id="retrivalDate"
            variant="standard"
            // value={state.applicationDate}
            type="text"
            placeholder="Retrival Date"
            onChange={(event) => {
            //   dispatch({
            //     type: filterValues.applicationDate,
            //     value: event,
            //   });
            }}
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
  </Box>)
};
export default Retrival;
