import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import AccordianContainer from "../CustomComponents/AccordianContainer";
import CustomDateField from "../CustomComponents/CustomDateField";
import CustomDropDown from "../CustomComponents/CustomDropDown";
import CustomTextField from "../CustomComponents/CustomTextField";
import NachFilter from "./NachFilter";
const NachMandate = () => {
  //Importing Hooks
  const dispatch = useDispatch();

  //Selectors from redux store
  const showMandate = useSelector((state) => state.nachFilter.showMandate);

  //Field Touch Handler
  const [frequencyTouchHandler, setFrequencyTouchHandler] = useState(false);
  const [debitTypeTouchHandler, setDebitTypeTouchHandler] = useState(false);
  const [fbdTouchHandler, setFbd] = useState(false);
  const [mandateStartDateTouchHandler, setMandateStartDate] = useState(false);
  const [firstNachBillingDateTouchHandler, setFirstNachBillingDate] =
    useState(false);

  // //Validation
  // const frequncyValid = data.frequency.trim() !== "";
  // const debitValid = data.debitType.trim() !== "";
  // const fbdValid = data.fbd.trim() !== "";
  // const mandateStartDateValid = data.mandateStartDate !== null;
  // const firstNachBillingDateValid = data.firstNachBillingDate !== null;

  // //Has Error
  // const frequencyHasError = frequencyTouchHandler && !frequncyValid;
  // const debitHasError = debitTypeTouchHandler && !debitValid;
  // const fbdHasError = fbdTouchHandler && !fbdValid;
  // const mandateStartHasError =
  //   mandateStartDateTouchHandler && !mandateStartDateValid;
  // const firstNachBillingHasError =
  //   firstNachBillingDateTouchHandler && !firstNachBillingDateValid;

  // Save Button DragHandleRounded
  const onSaveButtonClickHandler = () => {
    setFrequencyTouchHandler(true);
    setDebitTypeTouchHandler(true);
    setFbd(true);
    setMandateStartDate(true);
    setFirstNachBillingDate(true);
    // if (
    //   frequncyValid &&
    //   debitValid &&
    //   fbdValid &&
    //   mandateStartDateValid &&
    //   firstNachBillingDateValid
    // ) {
    //   console.log(data);
    // }
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
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="IFSC"
                      label="IFSC"
                      variant="standard"
                      disabled={true}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="MICR"
                      label="MICR"
                      variant="standard"
                      disabled={true}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Bank Name"
                      label="Bank Name"
                      variant="standard"
                      disabled={true}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Branch Name"
                      label="Branch Name"
                      variant="standard"
                      disabled={true}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Drawee Place"
                      label="Drawee Place"
                      variant="standard"
                      disabled={true}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Bank Account Number"
                      label="Bank Account Number"
                      variant="standard"
                      disabled={true}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Account Holder Name"
                      label="Account Holder Name"
                      variant="standard"
                      disabled={true}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Account Type"
                      label="Account Type"
                      variant="standard"
                      disabled={true}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Mandate Number"
                      label="Mandate Number"
                      variant="standard"
                      disabled={true}
                    ></CustomTextField>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="NACH Amount"
                      label="NACH Amount"
                      variant="standard"
                      disabled={true}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Mandate Amount"
                      label="Mandate Amount"
                      variant="standard"
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomDropDown
                      type="Frequency"
                      label="Frequency"
                      variant="standard"
                      dropDownValue={[
                        { key: 0, value: "monthly", text: "Monthly" },
                        { key: 1, value: "yearly", text: "Yearly" },
                      ]}
                      onBlur={() => {
                        setFrequencyTouchHandler(true);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomDropDown
                      type="Debit"
                      label="Debit Type"
                      variant="standard"
                      dropDownValue={[
                        { key: 0, value: "fixed", text: "Fixed amount" },
                        { key: 1, value: "maximum", text: "Maximum amount" },
                      ]}
                      onBlur={() => {
                        setDebitTypeTouchHandler(true);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="FBD"
                      label="FBD"
                      variant="standard"
                      onBlur={() => {
                        setFbd(true);
                      }}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomDateField
                      label="Mandate Start Date"
                      variant="standard"
                      onBlur={() => {
                        setMandateStartDate(true);
                      }}
                    ></CustomDateField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomDateField
                      label="First NACH Billing Date"
                      variant="standard"
                      onBlur={() => {
                        setFirstNachBillingDate(true);
                      }}
                    ></CustomDateField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Maximum Amount"
                      label="Maximum Amount"
                      variant="standard"
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Mandate Validity"
                      label="Mandate Validity"
                      variant="standard"
                      disabled={true}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomDateField
                      type="Mandate End Date"
                      label="Mandate End Date"
                      variant="standard"
                      disabled={true}
                    ></CustomDateField>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Status"
                      label="Status"
                      variant="standard"
                      disabled={true}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Customer Mobile Number"
                      label="Customer Mobile Number"
                      variant="standard"
                      disabled={true}
                    ></CustomTextField>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      type="Customer Email ID"
                      label="Customer Email ID"
                      variant="standard"
                      disabled={true}
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
