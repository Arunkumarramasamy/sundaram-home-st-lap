import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import AccordianContainer from "../CustomComponents/AccordianContainer";
import CustomAutoComplete from "../CustomComponents/CustomAutoComplete";
import CustomDateField from "../CustomComponents/CustomDateField";

const NachRetrievalFilter = () => {
  // Maintaining State
  const [branchArray, setBranchArray] = useState([]);
  const [branchValue, setBranchValue] = useState("");
  const [draweeBankArray, setDraweeBankArray] = useState([]);
  const [draweeBankValue, setdraweeBankValue] = useState("");
  const [dueDate, setDueDate] = useState("");
  //Touch Handler
  const [branchHasTouched, setBranchHasTouched] = useState(false);
  //Input Validtion
  const branchValid = branchValue !== undefined && branchValue !== "";
  //Has Error
  const branchHasError = branchHasTouched && !branchValid;
  //Methods
  const branchOnChangeHandler = (value) => {};
  const draweeChangeHandler = (value) => {};
  const SearchButtonHandler = () => {};
  const ClearButtonHandler = () => {};
  return (
    <Box>
      <AccordianContainer
        id="accord"
        title="Nach Retrieval"
        initialOpen={true}
        sx={{ margin: "8px !important" }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <CustomAutoComplete
              variant="standard"
              type="text"
              placeholder="Select Branch"
              label="Branch"
              autoCompleteValues={branchArray}
              value={branchValue}
              onBlur={() => {
                setBranchHasTouched(true);
              }}
              onChange={(event, newValue) => {
                branchOnChangeHandler(newValue);
              }}
            />
            {branchHasError && <p className="error">Please Select Branch</p>}
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <CustomAutoComplete
              variant="standard"
              type="text"
              placeholder="Select Drawee Bank"
              label="Drawee Bank"
              autoCompleteValues={draweeBankArray}
              value={draweeBankValue}
              onChange={(event, newValue) => {
                draweeChangeHandler(newValue);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <CustomDateField
              value={dueDate}
              disablePast={true}
              maxDate={new Date().setDate(new Date().getDate() + 3)}
              label="Due date"
              variant="standard"
              onChange={(newValue) => {
                setDueDate(newValue);
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
            onClick={SearchButtonHandler}
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
            onClick={ClearButtonHandler}
          >
            Clear
          </Button>
        </Box>
      </AccordianContainer>
    </Box>
  );
};

export default NachRetrievalFilter;
