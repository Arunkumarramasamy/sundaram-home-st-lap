import {
  Box,
  Button,
  Grid
} from "@mui/material";
import React from "react";
import CustomDateField from "../CustomComponents/CustomDateField";
import CustomDropDown from "../CustomComponents/CustomDropDown";
import CustomTextField from "../CustomComponents/CustomTextField";

const BasicInformation = (props) => {



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
          <CustomDateField
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
          <CustomDateField
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
          <CustomDateField
            required={true}
            label="Date of Disbursement"
            id="dateOfDisbursement"
            variant="outlined"
            value=""
            type="date"
          />
        </Grid>
      </Grid>

      
    </Box>
  );
};
export default BasicInformation;
