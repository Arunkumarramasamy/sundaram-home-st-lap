import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AccordianContainer from "../CustomComponents/AccordianContainer";
import CustomAutoComplete from "../CustomComponents/CustomAutoComplete";
import CustomTextField from "../CustomComponents/CustomTextField";
import { NachFilterReducerAction } from "../Store/NachFilterReducer";
const NachFilter = () => {
  //importing hook
  const dispatch = useDispatch();
  //Filter conditions State value
  const [branchArray, setBranchArray] = useState([]);
  const [branchValue, setBranchValue] = useState();
  const [applicationArray, setApplicationArray] = useState([]);
  const [applicationValue, setApplicationValue] = useState();
  //Auto append values
  const [customerId, setCustomerId] = useState();
  const [repayApplication, setRepayApplication] = useState();
  const [repayMode, setRepayMode] = useState();
  const [emiAmount, setEmiAmount] = useState();
  const [fileStatus, setFileStatus] = useState();
  const [loanAmount, setLoanAmount] = useState();
  const [disbursementAmount, setDisbursementAmount] = useState();
  const [sancationDate, setsancationDate] = useState();

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
              onChange={(value) => {
                setBranchValue(value);
              }}
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
                setBranchValue(value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              type="text"
              label="Customer ID"
              variant="standard"
              placeholder="Enter Customer ID"
              value={customerId}
              disabled={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              type="text"
              label="Repay Application"
              variant="standard"
              placeholder="Enter Repay Application"
              value={repayApplication}
              disabled={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              type="text"
              label="Repay Mode"
              variant="standard"
              placeholder="Enter Repay Mode"
              value={repayMode}
              disabled={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              type="text"
              label="Emi amount"
              variant="standard"
              placeholder="Enter Emi amount"
              value={emiAmount}
              disabled={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              type="text"
              label="File Status "
              variant="standard"
              placeholder="Enter File Status "
              value={fileStatus}
              disabled={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              type="text"
              label="Loan Amount"
              variant="standard"
              placeholder="Enter Loan Amount"
              value={loanAmount}
              disabled={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              type="text"
              label="Disbursement Amount"
              variant="standard"
              placeholder="Enter Disbursement Amount"
              value={disbursementAmount}
              disabled={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              type="text"
              label="Sancation Date"
              variant="standard"
              placeholder="Enter Sancation Date"
              value={sancationDate}
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
            onClick={() => {
              dispatch(NachFilterReducerAction.updateShowMandate(true));
            }}
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
            onClick={() => {
              dispatch(NachFilterReducerAction.updateShowMandate(false));
            }}
          >
            Clear
          </Button>
        </Box>
      </AccordianContainer>
    </Box>
  );
};

export default NachFilter;
