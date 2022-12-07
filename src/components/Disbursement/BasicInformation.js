import {
  Box,
  Grid
} from "@mui/material";
import React from "react";
import CustomDateField from "../CustomComponents/CustomDateField";
import CustomDropDown from "../CustomComponents/CustomDropDown";
import CustomTextField from "../CustomComponents/CustomTextField";
import AccordianContainer from "../CustomComponents/AccordianContainer";


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


    <AccordianContainer title="Basic Information:" initialOpen={props.initialOpen}>
    <Box
      sx={{ backgroundColor: "white", padding: "0.3rem", borderRadius: "10px" }}
    >
    

      <Grid container spacing={2} >
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={false}
            label="Applicant Name"
            id="applicantName"
            variant="outlined"
            value={props.dataMap.BasicInformation.applicantName}
            type="text"
            placeholder="Enter Applicant Name"
            disabled={true}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDateField
            required={false}
            label="Loan Request Date"
            id="loanRequestDate"
            variant="outlined"
            value={props.dataMap.BasicInformation.loanrequestDate}
            type="date"
            disabled={true}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={false}
            label="Total Disbursement Amount"
            id="totalDisbursementAmount"
            variant="outlined"
            value={props.dataMap.BasicInformation.totalDisbursementAmount}
            type="number"
            placeholder="Enter Total Disbursement Amount"
            disabled={true}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={false}
            label="Current Disbursement Amount"
            id="currentDisbursementAmount"
            variant="outlined"
            value={props.dataMap.BasicInformation.currentDisbursementAmount}
            type="number"
            placeholder="Enter Current Disbursement Amount"
            disabled={true}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={false}
            label="Effective Rate"
            id="effectiveRate"
            variant="outlined"
            value={props.dataMap.BasicInformation.effectiveRate}
            type="number"
            placeholder="Enter Effective Rate"
            disabled={true}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={false}
            label="Number of Disbursement"
            id="disbursementNo"
            variant="outlined"
            value={props.dataMap.BasicInformation.numberofDisbursement}
            type="number"
            placeholder="Enter Number of Disbursement"
            disabled={true}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDropDown
            required={false}
            label="Proposal Type"
            id="proposalType"
            value={props.dataMap.BasicInformation.proposalType}
            placeholder="Property Type"
            displayEmpty={true}
            dropDownValue={proposalTypeValues}
            disabled={true}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDateField
            required={false}
            label="Sanction Date"
            id="sanctionDate"
            variant="outlined"
            value={props.dataMap.BasicInformation.sanctionedDate}
            type="date"
            disabled={true}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={false}
            label="File Number"
            id="fileNumber"
            variant="outlined"
            value={props.dataMap.BasicInformation.fileNumber}
            type="text"
            placeholder="Enter File Number"
            disabled={true}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDateField
            required={false}
            label="Date of Disbursement"
            id="dateOfDisbursement"
            variant="outlined"
            value={props.dataMap.BasicInformation.dateofDisbursement}
            type="date"
            disabled={true}
          />
        </Grid>
      </Grid>

      
    </Box>
    </AccordianContainer>
    
  );
};
export default BasicInformation;
