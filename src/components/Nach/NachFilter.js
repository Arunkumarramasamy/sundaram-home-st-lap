import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccordianContainer from "../CustomComponents/AccordianContainer";
import CustomAutoComplete from "../CustomComponents/CustomAutoComplete";
import CustomDateField from "../CustomComponents/CustomDateField";
import CustomTextField from "../CustomComponents/CustomTextField";
import GetBranchDetails from "../CustomComponents/GetBranchDetails";
import { NachFilterReducerAction } from "../Store/NachFilterReducer";
const NachFilter = () => {
  //importing hook
  const dispatch = useDispatch();

  //Selectors from redux store
  const FilteredData = useSelector((state) => state.nachFilter.data);

  //Filter conditions State value
  const [branchArray, setBranchArray] = useState([]);
  const [branchValue, setBranchValue] = useState("");
  const [applicationArray, setApplicationArray] = useState([]);
  const [applicationValue, setApplicationValue] = useState();

  //Touch Handler
  const [branchHasTouched, setBranchHasTouched] = useState(false);
  const [applicationHasTouched, setApplicationHasTouched] = useState(false);
  //Input Validtion
  const branchValid = branchValue !== undefined && branchValue !== "";
  const appplicationNumberValid =
    applicationValue !== undefined && applicationValue !== "";
  //Has Error
  const branchHasError = branchHasTouched && !branchValid;
  const applicationHasError = applicationHasTouched && !appplicationNumberValid;

  //Methods
  //Search Button Handler
  const SearchButtonHandler = () => {
    setBranchHasTouched(true);
    setApplicationHasTouched(true);
    if (branchValid && appplicationNumberValid) {
      dispatch(NachFilterReducerAction.updateShowMandate(true));
    } else {
      return;
    }
  };
  //Clear Button Handler
  const ClearButtonHandler = () => {
    setBranchValue("");
    setBranchHasTouched(false);
    setApplicationHasTouched(false);
    dispatch(NachFilterReducerAction.updateShowMandate(false));
  };
  useEffect(() => {
    const branchValues = GetBranchDetails();
    setBranchArray(branchValues);
  }, []);
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
              placeholder="Select Branch"
              label="Branch"
              autoCompleteValues={branchArray}
              value={branchValue}
              onBlur={() => {
                setBranchHasTouched(true);
              }}
              onChange={(event, newValue) => {
                setBranchValue(newValue);
              }}
            />
            {branchHasError && <p className="error">Please Select Branch</p>}
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomAutoComplete
              variant="standard"
              type="text"
              placeholder="Select Application Number"
              label="Application Number"
              autoCompleteValues={applicationArray}
              value={applicationValue}
              onBlur={() => {
                setApplicationHasTouched(true);
              }}
              onChange={(value) => {
                setBranchValue(value);
              }}
            />
            {applicationHasError && (
              <p className="error">Please Select Application Number</p>
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              type="text"
              label="Customer ID"
              variant="standard"
              placeholder="Enter Customer ID"
              value={FilteredData.customerID}
              disabled={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              type="text"
              label="Repay Application"
              variant="standard"
              placeholder="Enter Repay Application"
              value={FilteredData.repayApplication}
              disabled={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              type="text"
              label="Repay Mode"
              variant="standard"
              placeholder="Enter Repay Mode"
              value={FilteredData.repayMode}
              disabled={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              type="text"
              label="Emi Amount"
              variant="standard"
              placeholder="Enter Emi amount"
              value={FilteredData.emiAmount}
              disabled={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              type="text"
              label="File Status "
              variant="standard"
              placeholder="Enter File Status "
              value={FilteredData.fileStatus}
              disabled={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              type="text"
              label="Loan Amount"
              variant="standard"
              placeholder="Enter Loan Amount"
              value={FilteredData.loanAmount}
              disabled={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              type="text"
              label="Disbursement Amount"
              variant="standard"
              placeholder="Enter Disbursement Amount"
              value={FilteredData.disbursementAmount}
              disabled={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomDateField
              label="Sancation Date"
              variant="standard"
              placeholder="Enter Sancation Date"
              value={FilteredData.sancationDate}
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
            onClick={SearchButtonHandler}
          >
            Search
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

export default NachFilter;
