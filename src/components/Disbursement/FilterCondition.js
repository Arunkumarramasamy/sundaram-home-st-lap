import {
  Box,
  Button,
  Grid
} from "@mui/material";
import React, { useState } from "react";
import CustomDropDown from "../CustomComponents/CustomDropDown";
import CustomTextField from "../CustomComponents/CustomTextField";
import AccordianContainer from "../CustomComponents/AccordianContainer";

const FilterCondition = (props) => {
  const branchNames = [
    { label: "Mylapore" },
    { label: "Royapettah" },
    { label: "Light House" },
    { label: "Chennai" },
    { label: "Tambaram" },
    { label: "Egmore" },
  ];

  const [branch, setBranch] = useState(branchNames[0]);
  const [trnNo, setTrnNo] = useState("STLMYL202200001");


  const searchButtonClickHandler = (event) => {
    event.preventDefault();
    props.onSearchButtonClick(branch, trnNo, true);
  };

  const clearButtonClickHandler = () => {
    setBranch("");
    setTrnNo("");
    props.onSearchButtonClick(branch, trnNo, false);
  };

  const branchValues = [
    {
      value: 1,
      text: "Royapettah",
    },
    {
      value: 2,
      text: "Mylapore",
    },
    {
      value: 3,
      text: "Light House",
    },
    {
      value: 4,
      text: "Egmore",
    },
  ];

  const BasicSearchValues = (
    <><Box component="form"  validate    onSubmit={searchButtonClickHandler}  >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDropDown
            required={true}
            label="Branch"
            id="branch"
            value={""}
            placeholder="Property Type"
            displayEmpty={true}
            dropDownValue={branchValues}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={true}
            label="Trn No."
            id="trnno"
            variant="outlined"
            value={""}
            type="text"
            placeholder="Enter Trn No."
          />
        </Grid>


        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={false}
            label="Applicant Name"
            id="applicantName"
            variant="outlined"
            value={""}
            type="text"
            placeholder="Applicant Name"
          />
        </Grid>


      </Grid>
      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button variant="contained" type="submit">
          Search
        </Button>
        <Button
          sx={{ marginLeft: "1rem",backgroundColor:"black" }}
          onClick={clearButtonClickHandler}
          variant="contained"
        >
          Clear
        </Button>
      </Box>
      </Box>
    </>
  );


  return (
    <><AccordianContainer title={props.title} initialOpen={true}>
      <Box sx={{ width: "100%", backgroundColor: "white" }}>
        {BasicSearchValues}
      </Box>
      </AccordianContainer>
    </>
  );
};

export default FilterCondition;
