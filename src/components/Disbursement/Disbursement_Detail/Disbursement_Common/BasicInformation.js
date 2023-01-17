import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import AccordianContainer from "../../../CustomComponents/AccordianContainer";
import CustomTextField from "../../../CustomComponents/CustomTextField";

const BasicInformation = (props) => {
  const BasicContent = (
    <>
      <Box component="form">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              disabled={true}
              required={false}
              label="Branch"
              id="branch"
              variant="standard"
              value={props.losData.branch}
              type="text"
              placeholder=""
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              disabled={true}
              required={false}
              label="Application Number"
              id="applicationNum"
              variant="standard"
              value={props.losData.applicationNum}
              type="text"
              placeholder=""
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              disabled={true}
              required={false}
              label="Applicant Name"
              id="applicantName"
              variant="standard"
              value={props.losData.customerName}
              type="text"
              placeholder=""
            />
          </Grid>
          {/* <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              disabled={true}
              required={false}
              label="Sanction Status"
              id="sanctionStatus"
              variant="standard"
              value={props.losData.losStatus}
              type="text"
              placeholder=""
            />
          </Grid> */}
          {/* <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              disabled={true}
              required={false}
              label="Application Date"
              id="applicationDate"
              variant="standard"
              value={dayjs(props.losData.applicationDate).format("DD/MM/YYYY")}
              type="text"
              placeholder=""
            />
          </Grid> */}
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              disabled={true}
              required={false}
              label="Rate of Interest(%)"
              id="roi"
              variant="standard"
              value={props.losData.rateOfInterest}
              type="text"
              placeholder=""
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              disabled={true}
              required={false}
              label="Loan Amount"
              id="loanAmt"
              variant="standard"
              value={parseInt(props.losData.loanAmt).toLocaleString("en-IN")}
              type="text"
              placeholder=""
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              disabled={true}
              required={false}
              label="Earlier Disbursement Amount"
              id="earlierDisbursementAmount"
              variant="standard"
              value={parseInt(
                props.disbursementDetailTabValue.earlierDisbAmt
              ).toLocaleString("en-IN")}
              type="text"
              placeholder="Enter Earlier Disbursement Amount"
            />
          </Grid>
          {/* <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              disabled={true}
              required={false}
              label="Sanction Amount"
              id="sanctionAmt"
              variant="standard"
              value={props.losData.sanctionAmt}
              type="text"
              placeholder=""
            />
          </Grid> */}
        </Grid>
      </Box>
    </>
  );

  return (
    <>
      <AccordianContainer
        title={props.screenTitle}
        initialOpen={false}
        setAccordianOpen={props.setAccordianOpen}
      >
        <Box
          sx={{
            width: "100%",
            backgroundColor: "white",
            marginBottom: "-1%",
            marginTop: "-2%",
          }}
        >
          {BasicContent}
        </Box>
      </AccordianContainer>
    </>
  );
};

export default BasicInformation;
