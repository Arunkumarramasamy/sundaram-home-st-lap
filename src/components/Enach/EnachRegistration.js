import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { React, useEffect, useState } from "react";
import AccordianContainer from "../CustomComponents/AccordianContainer";
import CustomAutoComplete from "../CustomComponents/CustomAutoComplete";
import CustomDropDown from "../CustomComponents/CustomDropDown";
import CustomTextField from "../CustomComponents/CustomTextField";

const EnachRegistration = () => {
  const [currentDate, setCurrentDate] = useState(
    `${new Date().getDate()}/${
      new Date().getMonth() + 1
    }/${new Date().getFullYear()}`
  );
  const [branch, setBranch] = useState("");
  const [emiAmount, setEmiAmout] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [mailId, setMailId] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountType, setAccountType] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [paymentType, setPayMentType] = useState("netbank");
  const [applicantName, setApplicantName] = useState("");
  const [nachAmount, setNachAmount] = useState("");
  const [mandateEndDate, setMandateEndDate] = useState("");
  const [frequency, setFrequency] = useState("");
  const [debitType, setDebitType] = useState("");
  useEffect(() => {
    const getApplicationListData = async (newValue) => {
      try {
        const response = await axios.post(
          "http://localhost:8080/enach/enachDetails",
          {
            applicationNumber: "",
          }
        );
        setBranch(response["branch"]);
        setEmiAmout(response["emiAmount"]);
        setAccountNumber(response["accountNumber"]);
        setAccountType(response["accountType"]);
        setBankName(response["bankName"]);
        setDebitType(response["debitType"]);
        setFrequency(response["frequency"]);
        setIfscCode(response["ifscCode"]);
        setMailId(response["mailID"]);
        setMobileNumber(response["mobileNumber"]);
        setNachAmount(response["nachAmount"]);
        setMandateEndDate(response["endDate"]);
      } catch {
        console.log("Network Error");
      }
    };
  }, []);
  const handleChange = (event) => {
    setPayMentType(event.target.value);
  };
  return (
    <div id="enach">
      <Box>
        <AccordianContainer
          id="accord"
          title="E-Nach Mandate"
          initialOpen={true}
          sx={{ margin: "8px !important" }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomDropDown
                id="1"
                label="Applicant Name"
                type="text"
                variant="standard"
                value={applicantName}
                disabled={false}
                dropDownValue={[
                  { value: 1, text: "Applicant" },
                  { value: 2, text: "Co-Applicant" },
                ]}
                onChange={(event) => {
                  setApplicantName(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="text"
                label="Branch"
                variant="standard"
                value={branch}
                disabled={true}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="text"
                label="Mobile Number"
                variant="standard"
                value={mobileNumber}
                disabled={true}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="text"
                label="Mail Id"
                variant="standard"
                value={mailId}
                disabled={true}
              />
            </Grid>
          </Grid>
          <div style={{ marginTop: "24px" }}>
            <h4 sx={{ margin: "8px", marginTop: "24px !important" }}>
              Customer Bank Details
            </h4>
          </div>
          <div style={{ width: "fit-content", whiteSpace: "nowrap" }}>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              <Stack direction="row">
                <FormControlLabel
                  sx={{ width: "100%" }}
                  value="true"
                  control={<Radio checked={true} />}
                  label="Existing Customer"
                />
                <FormControlLabel
                  sx={{ width: "100%" }}
                  value="true"
                  control={<Radio checked={false} />}
                  label="New Customer"
                />
              </Stack>
            </RadioGroup>
          </div>
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl={12}
              sx={{ marginTop: "8px" }}
            >
              <Paper sx={{ padding: "8px", background: "#e9e9e9" }}>
                <CustomTextField
                  type="text"
                  label="Bank Name"
                  variant="standard"
                  value={bankName}
                  disabled={true}
                />
                <CustomTextField
                  type="text"
                  label="Account Number"
                  variant="standard"
                  value={accountNumber}
                  disabled={true}
                />
                <CustomTextField
                  type="text"
                  label="Account Type"
                  variant="standard"
                  value={accountType}
                  disabled={true}
                />
                <CustomTextField
                  type="text"
                  label="IFSC Code"
                  variant="standard"
                  value={ifscCode}
                  disabled={true}
                />
                <CustomTextField
                  type="text"
                  label="Branch"
                  variant="standard"
                  value={branch}
                  disabled={true}
                />
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl={12}
              sx={{ marginTop: "8px" }}
            >
              <Paper sx={{ padding: "8px", background: "#e9e9e9" }}>
                <CustomTextField
                  type="text"
                  label="Emi Amount"
                  variant="standard"
                  value={emiAmount}
                  disabled={true}
                />
                <CustomTextField
                  type="text"
                  label="Nach Amount"
                  variant="standard"
                  value={nachAmount}
                  disabled={true}
                />
                <Stack direction="row" spacing={1}>
                  <CustomTextField
                    type="text"
                    label="Mandate Start Date"
                    variant="standard"
                    value={currentDate}
                    disabled={true}
                  />
                  <CustomTextField
                    type="text"
                    label="Mandate End Date"
                    variant="standard"
                    value={mandateEndDate}
                    disabled={true}
                  />
                </Stack>
                <CustomTextField
                  type="text"
                  label="Frequency"
                  variant="standard"
                  value={frequency}
                  disabled={true}
                />
                <CustomTextField
                  type="text"
                  label="Debit Type"
                  variant="standard"
                  value={debitType}
                  disabled={true}
                />
              </Paper>
            </Grid>
            <FormControl
              component="fieldset"
              sx={{ margin: "8px", marginRight: "8px" }}
            >
              <FormLabel
                sx={{ marginTop: "8px", marginRight: "8px" }}
                component="legend"
              >
                Mode of payment For Registeration
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                handleChange={(event) => handleChange(event)}
                value={paymentType}
              >
                <Stack direction="row">
                  <FormControlLabel
                    value="netbank"
                    labelPlacement="end"
                    control={<Radio />}
                    label="Net Banking"
                  />
                  <FormControlLabel
                    value="debit"
                    labelPlacement="end"
                    control={<Radio />}
                    label="Debit Card"
                  />
                </Stack>
              </RadioGroup>
            </FormControl>
            <div
              style={{
                padding: "8px",
                marginTop: useMediaQuery("(min-width:400px)") ? "24px" : "0px",
                marginLeft: "130px",
                direction: "rtl",
              }}
            >
              <Button variant="contained" sx={{ fontWeight: "bold" }}>
                Update
              </Button>
            </div>
          </Grid>
        </AccordianContainer>
      </Box>
    </div>
  );
};
export default EnachRegistration;
