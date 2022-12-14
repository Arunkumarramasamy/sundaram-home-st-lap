import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as React from "react";
import CustomDropDown from "../CustomComponents/CustomDropDown";
import CustomTextField from "../CustomComponents/CustomTextField";
import CurrentDisbursementDetailsGrid from "./CurrentDisbursementDetailsGrid";

const CurrentDisbursementDetails = (props) => {

  const paymentModeValues = [
    {
      value: 1,
      text: "Cash",
    },
    {
      value: 2,
      text: "Cheque",
    },
    {
      value: 3,
      text: "Debit Card",
    },
    {
      value: 4,
      text: "Credit Card",
    },
    {
      value: 5,
      text: "Mobile Payments",
    },
  ];

  const chequeModeValues = [
    {
      value: 1,
      text: "Crossed Cheque",
    },
    {
      value: 2,
      text: "Open Cheque",
    },
    {
      value: 3,
      text: "Post-Dated Cheque",
    },
    {
      value: 4,
      text: "Stale Cheque",
    },
    {
      value: 5,
      text: "Traveller's Cheque",
    },
  ];

  const debitAccountTypeValues = [
    {
      value: 1,
      text: "Savings Account",
    },
    {
      value: 2,
      text: "Current Account",
    },
  ];

  return (
    <>
      <Box sx={{ marginTop: "0.5rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomDropDown
              variant="standard"
              required={true}
              label="Payment Mode"
              id="paymentMod{e"
              value={props.dataMap.CurrentDisbursementDetails.paymentMode}
              placeholder="Payment Mode"
              displayEmpty={true}
              dropDownValue={paymentModeValues}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomDropDown
              variant="standard"
              required={true}
              label="Cheque Mode"
              id="chequeMode"
              value={props.dataMap.CurrentDisbursementDetails.chequeMode}
              placeholder="Cheque Mode"
              displayEmpty={true}
              dropDownValue={chequeModeValues}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              required={true}
              label="Cheque Print at"
              id="chequePrintAt"
              variant="standard"
              value={props.dataMap.CurrentDisbursementDetails.chequePrintAt}
              type="text"
              placeholder="Enter Cheque Print At"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              required={true}
              label="Entity Name"
              id="entityName"
              variant="standard"
              value={props.dataMap.CurrentDisbursementDetails.entityName}
              type="text"
              placeholder="Enter Entity Name"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              required={true}
              label="Favour Name"
              id="favourName"
              variant="standard"
              value={props.dataMap.CurrentDisbursementDetails.favourName}
              type="text"
              placeholder="Enter Favour Name"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              required={true}
              label="Account Number"
              id="accountNumber"
              variant="standard"
              value={props.dataMap.CurrentDisbursementDetails.accountNumber}
              type="text"
              placeholder="Enter Account Number"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomDropDown
              variant="standard"
              required={true}
              label="Debit Account Type"
              id="debitAccountType"
              value={props.dataMap.CurrentDisbursementDetails.debitAccountType}
              placeholder="Debit Account Type"
              displayEmpty={true}
              dropDownValue={debitAccountTypeValues}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              required={true}
              label="IFSC Code"
              id="ifsc"
              variant="standard"
              value={props.dataMap.CurrentDisbursementDetails.ifscCode}
              type="text"
              placeholder="Enter IFSC Code"
            />
          </Grid>
        </Grid>
      </Box>
      {props.showGrid ? (
        <CurrentDisbursementDetailsGrid back={props.back} dataMap={props.dataMap}/>
      ) : null}
    </>
  );
};
export default CurrentDisbursementDetails;
