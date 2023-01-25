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
import NachFilter from "./NachFilter";
import { NachFilterReducerAction } from "../Store/NachFilterReducer";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { NachAction } from "../Store/NachStore";
import axios from "axios";
const NachMandate = () => {
  //Importing Hooks
  const dispatch = useDispatch();

  //Selectors from redux store
  const showMandate = useSelector((state) => state.nachFilter.showMandate);
  const FilteredData = useSelector((state) => state.nachFilter.data);
  const touchHandlers = useSelector((state) => state.nach.touchHandler);

  useEffect(() => {
    if (FilteredData.status === "New") {
      setBtnName("Save");
    } else if (FilteredData.status === "Registered") {
      setBtnName("Update");
    } else if (FilteredData.status === "Verified") {
      setShowBtn(false);
    }
  }, [FilteredData]);

  //Button updation
  const [btnName, setBtnName] = useState("");
  //Button state to show or Hide
  const [showBtn, setShowBtn] = useState(true);
  //Maintaining Mandate Reference Number
  const [mandateReferenceNumber, setMandateReferenceNumber] = useState("");
  //Maintainig State for Dialog while submitting the application
  const [open, setOpen] = useState(false);

  //Field Validation
  const frequencyIsValid =
    FilteredData.frequency !== "" && FilteredData.frequency !== undefined;
  const debitTypeIsValid =
    FilteredData.debitType !== "" && FilteredData.debitType !== undefined;
  const FBDIsValid = FilteredData.fbd !== "";
  const mandateStartDateIsValid = FilteredData.mandateStartDate !== "";
  const firstNachBillingDateIsValid = FilteredData.firstNachBillingDate !== "";

  //Has Error
  const frequencyHasError = touchHandlers.frequency && !frequencyIsValid;
  const debitTypeHasError = touchHandlers.debitType && !debitTypeIsValid;
  const FBDHasError = touchHandlers.fbd && !FBDIsValid;
  const mandateStartDateHasError =
    touchHandlers.mandateStartDate && !mandateStartDateIsValid;
  const firstNachBillingDateHasError =
    touchHandlers.firstNachBillingDate && !firstNachBillingDateIsValid;

  //Handling Dailog methods
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //on Save
  const SendData = async () => {
    const data = { ...FilteredData };
    try {
      const response = await axios.post(
        "http://localhost:8080/nach/register",
        data
      );
    } catch {}
  };
  // Save Button Handler
  const onSaveButtonClickHandler = () => {
    dispatch(NachAction.updateFrequencyTouchHandler(true));
    dispatch(NachAction.updateDebitTypeTouchHandler(true));
    dispatch(NachAction.updateFbdTouchHandler(true));
    dispatch(NachAction.updateMandateStartDateTouchHandler(true));
    dispatch(NachAction.updateFirstNachBillingDateTouchHandler(true));
    if (
      frequencyIsValid &&
      debitTypeIsValid &&
      FBDIsValid &&
      mandateStartDateIsValid &&
      firstNachBillingDateIsValid
    ) {
      SendData();
      setMandateReferenceNumber("12768997992X");
      console.log(FilteredData);
      handleClickOpen();
      dispatch(
        NachFilterReducerAction.updateMandateNum(mandateReferenceNumber)
      );
    } else {
      return;
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
                      type="Nach Sponser Bank"
                      label="Nach Sponser Bank"
                      variant="standard"
                      disabled={true}
                      value={FilteredData.nachSponserBank}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="IFSC"
                      label="IFSC"
                      variant="standard"
                      disabled={true}
                      value={FilteredData.ifscCode}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="MICR"
                      label="MICR"
                      variant="standard"
                      disabled={true}
                      value={FilteredData.micr}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Bank Name"
                      label="Bank Name"
                      variant="standard"
                      disabled={true}
                      value={FilteredData.bankName}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Branch Name"
                      label="Branch Name"
                      variant="standard"
                      disabled={true}
                      value={FilteredData.branch}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Drawee Place"
                      label="Drawee Place"
                      variant="standard"
                      disabled={true}
                      value={FilteredData.draweePlace}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Bank Account Number"
                      label="Bank Account Number"
                      variant="standard"
                      disabled={true}
                      value={FilteredData.bankAccountNum}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Account Holder Name"
                      label="Account Holder Name"
                      variant="standard"
                      disabled={true}
                      value={FilteredData.bankAccHolderName.toUpperCase()}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Account Type"
                      label="Account Type"
                      variant="standard"
                      disabled={true}
                      value={FilteredData.accountType}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Mandate Number"
                      label="Mandate Number"
                      variant="standard"
                      disabled={true}
                      value={FilteredData.mandateNum}
                    ></CustomTextField>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="NACH Amount"
                      label="NACH Amount"
                      variant="standard"
                      disabled={true}
                      value={FilteredData.nachAmt}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Mandate Amount"
                      label="Mandate Amount"
                      variant="standard"
                      value={FilteredData.mandateAmt}
                      disabled={true}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomDropDown
                      type="Frequency"
                      label="Frequency"
                      variant="standard"
                      value={FilteredData.frequency}
                      dropDownValue={[
                        { key: 0, value: "monthly", text: "Monthly" },
                        { key: 1, value: "yearly", text: "Yearly" },
                        {
                          key: 2,
                          value: "asWhen",
                          text: " As and when required",
                        },
                      ]}
                      onBlur={() => {
                        dispatch(NachAction.updateFrequencyTouchHandler(true));
                      }}
                      onChange={(e) => {
                        dispatch(
                          NachFilterReducerAction.updateFrequency(
                            e.target.value
                          )
                        );
                      }}
                    />
                    {frequencyHasError && (
                      <p className="error">Please Select Frequency</p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomDropDown
                      type="Debit"
                      label="Debit Type"
                      variant="standard"
                      value={FilteredData.debitType}
                      dropDownValue={[
                        { key: 0, value: "fixed", text: "Fixed amount" },
                        { key: 1, value: "maximum", text: "Maximum amount" },
                      ]}
                      onBlur={() => {
                        dispatch(NachAction.updateDebitTypeTouchHandler(true));
                      }}
                      onChange={(e) => {
                        dispatch(
                          NachFilterReducerAction.updateDebitType(
                            e.target.value
                          )
                        );
                      }}
                    />
                    {debitTypeHasError && (
                      <p className="error">Please Select Debit Type</p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomDateField
                      type="FBD"
                      label="FBD"
                      variant="standard"
                      disabled={true}
                      value={FilteredData.fbd}
                      onBlur={() => {
                        dispatch(NachAction.updateFbdTouchHandler(true));
                      }}
                      onChange={(e) => {
                        dispatch(
                          NachFilterReducerAction.updateFBD(e.target.value)
                        );
                      }}
                    ></CustomDateField>
                    {FBDHasError && <p className="error">Please Select FBD</p>}
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomDateField
                      label="Mandate Start Date"
                      variant="standard"
                      value={FilteredData.mandateStartDate}
                      onBlur={() => {
                        dispatch(
                          NachAction.updateMandateStartDateTouchHandler(true)
                        );
                      }}
                      onChange={(value) => {
                        dispatch(
                          NachFilterReducerAction.updateMandateStartDate(value)
                        );
                      }}
                    ></CustomDateField>
                    {mandateStartDateHasError && (
                      <p className="error">Please Select Mandate Start Date</p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomDateField
                      label="First NACH Billing Date"
                      variant="standard"
                      disabled={true}
                      value={FilteredData.firstNachBillingDate}
                      onBlur={() => {
                        dispatch(
                          NachAction.updateFirstNachBillingDateTouchHandler(
                            true
                          )
                        );
                      }}
                      onChange={(value) => {
                        dispatch(
                          NachFilterReducerAction.updateFirstNachBillingDate(
                            value
                          )
                        );
                      }}
                    ></CustomDateField>
                    {firstNachBillingDateHasError && (
                      <p className="error">
                        Please Select First Naching Billing Date
                      </p>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Maximum Amount"
                      label="Maximum Amount"
                      variant="standard"
                      value={FilteredData.maximumAmt}
                      disabled={true}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomDateField
                      type="Mandate Validity"
                      label="Mandate Validity"
                      variant="standard"
                      disabled={true}
                      value={FilteredData.mandateValidity}
                    ></CustomDateField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomDateField
                      type="Mandate End Date"
                      label="Mandate End Date"
                      variant="standard"
                      disabled={true}
                      value={FilteredData.mandateEndDate}
                    ></CustomDateField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Customer Mobile Number"
                      label="Customer Mobile Number"
                      variant="standard"
                      disabled={true}
                      value={FilteredData.customerMobileNum}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Customer Email ID"
                      label="Customer Email ID"
                      variant="standard"
                      disabled={true}
                      value={FilteredData.customerEmailId}
                    ></CustomTextField>
                  </Grid>
                </Grid>
              </Box>
              {showBtn && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
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
                    {btnName}
                  </Button>
                </Box>
              )}
            </Box>
          </>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Application Submitted"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                {`Mandate Number ${mandateReferenceNumber} is generated for this application`}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                sx={{ fontWeight: "bold" }}
                variant="contained"
                onClick={handleClose}
              >
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </AccordianContainer>
      )}
    </>
  );
};

export default NachMandate;
