import { CurrencyRupee, Percent } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React from "react";
import CustomTextField from "../CustomComponents/CustomTextField";
import CustomDropDown from "../CustomComponents/CustomDropDown";

const BasicInformation = (props) => {
  const [disbursementDate, setDisbursementDate] = React.useState(
    dayjs("2022-11-28T21:11:54")
  );
  const [sanctionDate, setSanctionedDate] = React.useState(
    dayjs("2022-11-22T21:11:54")
  );
  const [requestDate, setRequestDate] = React.useState(
    dayjs("2022-11-18T21:11:54")
  );

  const processButtonClickHandler = () => {
    props.onProcessButtonClick();
  };

  const proposalTypeValues = [
    {
      value: 1,
      text: "Agri Land",
    },
    {
      value: 2,
      text: "Site",
    },
    {
      value: 3,
      text: "Individual House",
    },
    {
      value: 4,
      text: "Apartment",
    },
  ];

  return (
    <Box
      sx={{ backgroundColor: "white", padding: "0.3rem", borderRadius: "10px" }}
    >
      <h4>Basic Information:</h4>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={true}
            label="Applicant Name"
            id="applicantName"
            variant="outlined"
            value=""
            type="text"
            placeholder="Enter Applicant Name"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={true}
            label="Loan Request Date"
            id="loanRequestDate"
            variant="outlined"
            value=""
            type="date"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={true}
            label="Total Disbursement Amount"
            id="totalDisbursementAmount"
            variant="outlined"
            value=""
            type="number"
            placeholder="Enter Total Disbursement Amount"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={true}
            label="Current Disbursement Amount"
            id="currentDisbursementAmount"
            variant="outlined"
            value=""
            type="number"
            placeholder="Enter Current Disbursement Amount"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={true}
            label="Effective Rate"
            id="effectiveRate"
            variant="outlined"
            value=""
            type="number"
            placeholder="Enter Effective Rate"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={true}
            label="Number of Disbursement"
            id="disbursementNo"
            variant="outlined"
            value=""
            type="number"
            placeholder="Enter Number of Disbursement"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDropDown
            required={true}
            label="Proposal Type"
            id="proposalType"
            value={""}
            placeholder="Property Type"
            displayEmpty={true}
            dropDownValue={proposalTypeValues}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={true}
            label="Sanction Date"
            id="sanctionDate"
            variant="outlined"
            value=""
            type="date"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={true}
            label="File Number"
            id="fileNumber"
            variant="outlined"
            value=""
            type="text"
            placeholder="Enter File Number"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={true}
            label="Date of Disbursement"
            id="dateOfDisbursement"
            variant="outlined"
            value=""
            type="date"
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          marginTop: "1rem",
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button variant="contained" onClick={processButtonClickHandler}>
          Process
        </Button>
      </Box>
    </Box>
  );
};
export default BasicInformation;
