import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import React from "react";
import CustomDateField from "../CustomComponents/CustomDateField";
import CustomTextField from "../CustomComponents/CustomTextField";
import { useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import { NachAction } from "../Store/NachStore";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
const Nach = () => {
  const dispatch = useDispatch();
  //Disabling the State
  const DisablingState = useSelector((state) => state.nach.disablingState);
  const data = useSelector((state) => state.nach.data);
  useEffect(() => {
    const data = {
      disablingState: true,
      branch: "Anna Nagar",
      applicationNumber: 123,
      applicantCustomer: "Tom",
      bankName: "HDFC",
      branchName: "Anna Nagar",
      micr: "0000HDFC566",
      accountType: "Savings",
      bankAccountNumber: "12345",
      accountHolderName: "Tom",
      emiAmount: 12,
      nachAmount: 12,
      mandateAmount: 12,
      mandateValidity: "two",
      mandateEndDate: "12/31/2022",
      maximumAmount: 2344,
      customerMobileNumber: "9750208902",
      customerEmailId: "tom@gmail.com",
      status: "Active",
      mandateNumber: 8875899,
    };
    dispatch(NachAction.updateCustomerDataFromMaster(data));
  }, []);
  const onSaveButtonClickHandler = () => {
    console.log(data);
  };

  return (
    <>
      <Box
        sx={{
          padding: "20px",
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "8px",
          }}
        >
          <Button
            sx={{
              marginLeft: "1rem",
              color: "white",
              backgroundColor: "#004a92",
              fontWeight: "bold",
            }}
            onMouseOver={({ target }) => {
              target.style.backgroundColor = "#004a92";
              target.style.color = "white";
            }}
            variant="contained"
            onClick={onSaveButtonClickHandler}
          >
            Submit
          </Button>
        </Box>
        <h4>Nach Registeration</h4>
        <Box sx={{ marginTop: "5px", marginBottom: "5px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="Branch"
                label="Branch"
                variant="standard"
                disabled={DisablingState}
                value={data.branch}
              ></CustomTextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="Application Number"
                label="Application Number"
                variant="standard"
                disabled={DisablingState}
                value={data.applicationNumber}
              ></CustomTextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="Applicant Customer"
                label="Applicant Customer"
                variant="standard"
                disabled={DisablingState}
                value={data.applicantCustomer}
              ></CustomTextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="Bank Name "
                label="Bank Name "
                variant="standard"
                disabled={DisablingState}
                value={data.bankName}
              ></CustomTextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="Branch Name"
                label="Branch Name"
                variant="standard"
                disabled={DisablingState}
                value={data.branchName}
              ></CustomTextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="MICR"
                label="MICR"
                variant="standard"
                disabled={DisablingState}
                value={data.micr}
              ></CustomTextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="Account Type"
                label="Account Type"
                variant="standard"
                disabled={DisablingState}
                value={data.accountType}
              ></CustomTextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="Bank Account Number"
                label="Bank Account Number"
                variant="standard"
                disabled={DisablingState}
                value={data.bankAccountNumber}
              ></CustomTextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="Account Holder Name"
                label="Account Holder Name"
                variant="standard"
                disabled={DisablingState}
                value={data.accountHolderName}
              ></CustomTextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="EMI Amount"
                label="EMI Amount"
                variant="standard"
                disabled={DisablingState}
                value={data.emiAmount}
              ></CustomTextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="NACH Amount"
                label="NACH Amount"
                variant="standard"
                disabled={DisablingState}
                value={data.nachAmount}
              ></CustomTextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="Mandate Amount"
                label="Mandate Amount"
                variant="standard"
                disabled={DisablingState}
                value={data.mandateAmount}
              ></CustomTextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="Frequency"
                label="Frequency"
                variant="standard"
                value={data.frequency}
                onChange={(e) => {
                  dispatch(NachAction.updateFrequency(e.target.value));
                }}
              ></CustomTextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="FBD"
                label="FBD"
                variant="standard"
                value={data.fbd}
                onChange={(e) => {
                  dispatch(NachAction.updateFbd(e.target.value));
                }}
              ></CustomTextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomDateField
                label="Mandate Start Date"
                variant="standard"
                value={data.mandateStartDate}
                onChange={(event) => {
                  if (event === null) {
                    dispatch(NachAction.updateMandateStartDate(""));
                  } else {
                    let value = event.$M + 1 + "/" + event.$D + "/" + event.$y;
                    dispatch(NachAction.updateMandateStartDate(value));
                  }
                }}
              ></CustomDateField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomDateField
                label="First NACH Billing Date"
                variant="standard"
                onChange={(event) => {
                  if (event === null) {
                    dispatch(NachAction.updateNachBillingDate(""));
                  } else {
                    let value = event.$M + 1 + "/" + event.$D + "/" + event.$y;
                    dispatch(NachAction.updateNachBillingDate(value));
                  }
                }}
              ></CustomDateField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="Mandate Validity"
                label="Mandate Validity"
                variant="standard"
                disabled={DisablingState}
                value={data.mandateValidity}
              ></CustomTextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomDateField
                type="Mandate End Date"
                label="Mandate End Date"
                variant="standard"
                disabled={DisablingState}
              ></CustomDateField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="Maximum Amount"
                label="Maximum Amount"
                variant="standard"
                disabled={DisablingState}
                value={data.maximumAmount}
              ></CustomTextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="Customer Mobile Number"
                label="Customer Mobile Number"
                variant="standard"
                disabled={DisablingState}
                value={data.customerMobileNumber}
              ></CustomTextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="Customer Email ID"
                label="Customer Email ID"
                variant="standard"
                disabled={DisablingState}
                value={data.customerEmailId}
              ></CustomTextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="Status"
                label="Status"
                variant="standard"
                disabled={DisablingState}
                value={data.status}
              ></CustomTextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="Mandate Number"
                label="Mandate Number"
                variant="standard"
                disabled={DisablingState}
                value={data.mandateNumber}
              ></CustomTextField>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Nach;
