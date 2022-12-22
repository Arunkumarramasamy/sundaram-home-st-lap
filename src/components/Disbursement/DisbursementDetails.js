import CustomButton from "../CustomComponents/CustomButton";
import {
    Box, Grid
  } from "@mui/material";
import CustomTextField from "../CustomComponents/CustomTextField";
import CustomDateField from "../CustomComponents/CustomDateField";


const DisbursementDetails = (props) => {
  const disabledState = false;



    return (
      <Box sx={{ marginTop: "0.5rem" }}>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <CustomTextField
            disabled={disabledState}
            required={false}
            label="Earlier Disbursement Amount"
            id="earlierDisbursementAmount"
            variant="standard"
            value={""}
            type="text"
            placeholder="Enter Earlier Disbursement Amount"
          />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <CustomTextField
            disabled={disabledState}
            required={false}
            label="Current Disbursement Amount"
            id="currentDisbursementAmount"
            variant="standard"
            value={""}
            type="text"
            placeholder="Enter Current Disbursement Amount"
          />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <CustomDateField
            disabled={disabledState}
            required={false}
            label="Disbursement Date"
            id="disbursementDate"
            variant="standard"
            value={"22/12/2022"}
            type="text"
            placeholder="Disbursement Date"
          />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <CustomDateField
            disabled={disabledState}
            required={false}
            label="Billing Date"
            id="billingDate"
            variant="standard"
            value={"22/12/2022"}
            type="text"
            placeholder="Disbursement Date"
          />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <CustomDateField
            disabled={disabledState}
            required={false}
            label="ECD"
            id="ecd"
            variant="standard"
            value={"22/12/2022"}
            type="text"
            placeholder="ECD"
          />
      </Grid>

      {/* <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <CustomTextField
            disabled={disabledState}
            required={false}
            label="Earlier Disbursement Amount"
            id="earlierDisbursementAmount"
            variant="standard"
            value={""}
            type="text"
            placeholder="Earlier Disbursement Amount"
          />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <CustomTextField
            disabled={disabledState}
            required={false}
            label="Earlier Disbursement Amount"
            id="earlierDisbursementAmount"
            variant="standard"
            value={""}
            type="text"
            placeholder="Earlier Disbursement Amount"
          />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <CustomTextField
            disabled={disabledState}
            required={false}
            label="Earlier Disbursement Amount"
            id="earlierDisbursementAmount"
            variant="standard"
            value={""}
            type="text"
            placeholder="Earlier Disbursement Amount"
          />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <CustomTextField
            disabled={disabledState}
            required={false}
            label="Earlier Disbursement Amount"
            id="earlierDisbursementAmount"
            variant="standard"
            value={""}
            type="text"
            placeholder="Earlier Disbursement Amount"
          />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <CustomTextField
            disabled={disabledState}
            required={false}
            label="Earlier Disbursement Amount"
            id="earlierDisbursementAmount"
            variant="standard"
            value={""}
            type="text"
            placeholder="Earlier Disbursement Amount"
          />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <CustomTextField
            disabled={disabledState}
            required={false}
            label="Earlier Disbursement Amount"
            id="earlierDisbursementAmount"
            variant="standard"
            value={""}
            type="text"
            placeholder="Earlier Disbursement Amount"
          />
      </Grid> */}
      </Grid>
    
    <Box
      sx={{
        marginTop: "1rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CustomButton variant="contained" sx={{marginTop:"2%"}} >
        Create Request
      </CustomButton>
      <CustomButton variant="contained" sx={{marginTop:"2%",marginLeft:"1%"}} onClick={()=>{props.setListVisibility(true);}}>
        Back to search
      </CustomButton>
      </Box> </Box>);
};

export default DisbursementDetails;