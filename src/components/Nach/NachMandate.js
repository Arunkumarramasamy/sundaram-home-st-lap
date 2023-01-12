import { DragHandleRounded } from "@mui/icons-material";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import AccordianContainer from "../CustomComponents/AccordianContainer";
import CustomDateField from "../CustomComponents/CustomDateField";
import CustomDropDown from "../CustomComponents/CustomDropDown";
import CustomTextField from "../CustomComponents/CustomTextField";
import { NachAction } from "../Store/NachStore";
import NachFilter from "./NachFilter";
const NachMandate = () => {
  useEffect(() => {
    const data = {
      branch: "Anna Nagar",
      applicationNum: 123,
      applicantCustomer: "Tom",
      bankName: "HDFC",
      branchName: "Anna Nagar",
      micr: "0000HDFC566",
      accountType: "Savings",
      bankAccountNum: "12345",
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

  //Importing Hooks
  const dispatch = useDispatch();
  const data = useSelector((state) => state.nach.data);

  //Selectors from redux store
  const showMandate = useSelector((state) => state.nachFilter.showMandate);

  //Field Touch Handler
  const [frequencyTouchHandler, setFrequencyTouchHandler] = useState(false);
  const [debitTypeTouchHandler, setDebitTypeTouchHandler] = useState(false);
  const [fbdTouchHandler, setFbd] = useState(false);
  const [mandateStartDateTouchHandler, setMandateStartDate] = useState(false);
  const [firstNachBillingDateTouchHandler, setFirstNachBillingDate] =
    useState(false);

  //Validation
  const frequncyValid = data.frequency.trim() !== "";
  const debitValid = data.debitType.trim() !== "";
  const fbdValid = data.fbd.trim() !== "";
  const mandateStartDateValid = data.mandateStartDate !== null;
  const firstNachBillingDateValid = data.firstNachBillingDate !== null;

  //Has Error
  const frequencyHasError = frequencyTouchHandler && !frequncyValid;
  const debitHasError = debitTypeTouchHandler && !debitValid;
  const fbdHasError = fbdTouchHandler && !fbdValid;
  const mandateStartHasError =
    mandateStartDateTouchHandler && !mandateStartDateValid;
  const firstNachBillingHasError =
    firstNachBillingDateTouchHandler && !firstNachBillingDateValid;

  // Save Button DragHandleRounded
  const onSaveButtonClickHandler = () => {
    setFrequencyTouchHandler(true);
    setDebitTypeTouchHandler(true);
    setFbd(true);
    setMandateStartDate(true);
    setFirstNachBillingDate(true);
    if (
      frequncyValid &&
      debitValid &&
      fbdValid &&
      mandateStartDateValid &&
      firstNachBillingDateValid
    ) {
      console.log(data);
    }
  };
  return (
    <>
      <NachFilter />
      {showMandate && (
        <AccordianContainer
          id="accord"
          title="Nach Registeration"
          initialOpen={true}
          sx={{ margin: "8px !important" }}
        >
          <>
            <Box
              sx={{
                padding: "10px",
                backgroundColor: "white",
              }}
            >
              <Box sx={{ marginTop: "5px", marginBottom: "5px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Branch"
                      label="Branch"
                      variant="standard"
                      disabled={true}
                      value={data.branch}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Application Number"
                      label="Application Number"
                      variant="standard"
                      disabled={true}
                      value={data.applicationNum}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Applicant Customer"
                      label="Applicant Customer"
                      variant="standard"
                      disabled={true}
                      value={data.applicantCustomer}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Bank Name "
                      label="Bank Name "
                      variant="standard"
                      disabled={true}
                      value={data.bankName}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Branch Name"
                      label="Branch Name"
                      variant="standard"
                      disabled={true}
                      value={data.branchName}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="MICR"
                      label="MICR"
                      variant="standard"
                      disabled={true}
                      value={data.micr}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Account Type"
                      label="Account Type"
                      variant="standard"
                      disabled={true}
                      value={data.accountType}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Bank Account Number"
                      label="Bank Account Number"
                      variant="standard"
                      disabled={true}
                      value={data.bankAccountNum}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Account Holder Name"
                      label="Account Holder Name"
                      variant="standard"
                      disabled={true}
                      value={data.accountHolderName}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="EMI Amount"
                      label="EMI Amount"
                      variant="standard"
                      value={data.emiAmount}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="NACH Amount"
                      label="NACH Amount"
                      variant="standard"
                      value={data.nachAmount}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Mandate Amount"
                      label="Mandate Amount"
                      variant="standard"
                      value={data.mandateAmount}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomDropDown
                      type="Frequency"
                      label="Frequency"
                      variant="standard"
                      value={data.frequency}
                      error={frequencyHasError}
                      dropDownValue={[
                        { key: 0, value: "monthly", text: "Monthly" },
                        { key: 1, value: "yearly", text: "Yearly" },
                      ]}
                      onChange={(e) => {
                        dispatch(NachAction.updateFrequency(e.target.value));
                      }}
                      onBlur={() => {
                        setFrequencyTouchHandler(true);
                      }}
                    />
                    {frequencyHasError && (
                      <p className="error">Please Select Frequency </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomDropDown
                      type="Debit"
                      label="Debit Type"
                      variant="standard"
                      value={data.debitType}
                      error={debitHasError}
                      dropDownValue={[
                        { key: 0, value: "fixed", text: "Fixed amount" },
                        { key: 1, value: "maximum", text: "Maximum amount" },
                      ]}
                      onChange={(e) => {
                        dispatch(NachAction.updatedebitType(e.target.value));
                      }}
                      onBlur={() => {
                        setDebitTypeTouchHandler(true);
                      }}
                    />
                    {debitHasError && (
                      <p className="error">Please Select Debit Type </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="FBD"
                      label="FBD"
                      variant="standard"
                      value={data.fbd}
                      error={fbdHasError}
                      onChange={(e) => {
                        dispatch(NachAction.updateFbd(e.target.value));
                      }}
                      onBlur={() => {
                        setFbd(true);
                      }}
                    ></CustomTextField>
                    {fbdHasError && <p className="error">Please Select FBD </p>}
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomDateField
                      label="Mandate Start Date"
                      variant="standard"
                      value={data.mandateStartDate}
                      error={mandateStartHasError}
                      onChange={(value) => {
                        dispatch(NachAction.updateMandateStartDate(value));
                      }}
                      onBlur={() => {
                        setMandateStartDate(true);
                      }}
                    ></CustomDateField>
                    {mandateStartHasError && (
                      <p className="error">Please Enter Mandate Start Date </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomDateField
                      label="First NACH Billing Date"
                      variant="standard"
                      value={data.firstNachBillingDate}
                      error={firstNachBillingHasError}
                      onChange={(value) => {
                        dispatch(NachAction.updateNachBillingDate(value));
                      }}
                      onBlur={() => {
                        setFirstNachBillingDate(true);
                      }}
                    ></CustomDateField>
                    {firstNachBillingHasError && (
                      <p className="error">
                        Please Enter First NACH Billing Date{" "}
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Mandate Validity"
                      label="Mandate Validity"
                      variant="standard"
                      value={data.mandateValidity}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomDateField
                      type="Mandate End Date"
                      label="Mandate End Date"
                      variant="standard"
                      value={data.mandateEndDate}
                    ></CustomDateField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Maximum Amount"
                      label="Maximum Amount"
                      variant="standard"
                      value={data.maximumAmount}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Customer Mobile Number"
                      label="Customer Mobile Number"
                      variant="standard"
                      value={data.customerMobileNumber}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Customer Email ID"
                      label="Customer Email ID"
                      variant="standard"
                      value={data.customerEmailId}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Status"
                      label="Status"
                      variant="standard"
                      value={data.status}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Mandate Number"
                      label="Mandate Number"
                      variant="standard"
                      value={data.mandateNumber}
                    ></CustomTextField>
                  </Grid>
                </Grid>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "18px",
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
            </Box>
          </>
        </AccordianContainer>
      )}
    </>
  );
};

export default NachMandate;
