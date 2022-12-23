import CustomButton from "../CustomComponents/CustomButton";
import {
    Box, Grid, InputLabel, TextareaAutosize
  } from "@mui/material";
import CustomTextField from "../CustomComponents/CustomTextField";
import CustomDateField from "../CustomComponents/CustomDateField";


const DisbursementDetails = (props) => {
  const disabledState = false;

  var today = new Date();


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
            value={((today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear())}
            type="text"
            placeholder=""
          />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDateField
            disabled={disabledState}
            required={false}
            label="Billing Date"
            id="billingDate"
            variant="standard"
            value={((today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear())}
            type="text"
            placeholder=""
          />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDateField
            disabled={disabledState}
            required={false}
            label="ECD"
            id="ecd"
            variant="standard"
            value={((today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear())}
            type="text"
            placeholder=""
          />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <CustomTextField
            disabled={disabledState}
            required={false}
            label="Request Number"
            id="requestNumber"
            variant="standard"
            value={""}
            type="text"
            placeholder="Enter Request Number"
          />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <CustomTextField
            disabled={disabledState}
            required={false}
            label="Status"
            id="status"
            variant="standard"
            value={""}
            type="text"
            placeholder="Enter Status"
          />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <CustomTextField
            disabled={disabledState}
            required={false}
            label="Payment Mode"
            id="paymentMode"
            variant="standard"
            value={""}
            type="text"
            placeholder="Enter Payment Mode"
          />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <CustomTextField
            disabled={disabledState}
            required={false}
            label="IFSC"
            id="ifsc"
            variant="standard"
            value={""}
            type="text"
            placeholder="Enter IFSC"
          />
      </Grid>


      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <CustomTextField
            disabled={disabledState}
            required={false}
            label="Bank Name"
            id="bankName"
            variant="standard"
            value={""}
            type="text"
            placeholder="Enter Bank Name"
          />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <CustomTextField
            disabled={disabledState}
            required={false}
            label="Bank Branch"
            id="bankBranch"
            variant="standard"
            value={""}
            type="text"
            placeholder="Enter Bank Branch"
          />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <CustomTextField
            disabled={disabledState}
            required={false}
            label="Bank Account Number"
            id="bankAccountNumber"
            variant="standard"
            value={""}
            type="text"
            placeholder="Enter Bank Account Number"
          />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <CustomTextField
            disabled={disabledState}
            required={false}
            label="Bank Account Type"
            id="bankAccountType"
            variant="standard"
            value={""}
            type="text"
            placeholder="Enter Bank Account Type"
          />
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <CustomTextField
            disabled={disabledState}
            required={false}
            label="SHFL Bank"
            id="shflBank"
            variant="standard"
            value={""}
            type="text"
            placeholder="Enter SHFL Bank"
          />
      </Grid>


      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <InputLabel required={true}>{"Remarks"}</InputLabel>
      <TextareaAutosize
      placeholder="Empty"
      style={{ width: "100%",marginTop:"3%" }}
    /></Grid>


      

     
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