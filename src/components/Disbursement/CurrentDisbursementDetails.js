import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import CurrentDisbursementDetailsGrid from "./CurrentDisbursementDetailsGrid";
import CustomTextField from "../CustomComponents/CustomTextField";
import CustomDropDown from "../CustomComponents/CustomDropDown";

const CurrentDisbursementDetails = (props) => {
  const [ReadValue] = React.useState(false);
  const [dummyValue] = React.useState("");


  const paymentModeValues = [
    {
    value:1,
    text:"Cash"
    },
    {
      value:2,
      text:"Check"
    },
    {
      value:3,
      text:"Debit Card"
    },
    {
      value:4,
      text:"Credit Card"
    } ,
    {
      value:5,
      text:"Mobile Payments"
    }          
];


const chequeModeValues = [
  {
  value:1,
  text:"Crossed Cheque"
  },
  {
    value:2,
    text:"Open Cheque"
  },
  {
    value:3,
    text:"Post-Dated Cheque"
  },
  {
    value:4,
    text:"Stale Cheque"
  } ,
  {
    value:5,
    text:"Traveller's Cheque"
  }         
];


const debitAccountTypeValues = [
  {
  value:1,
  text:"Savings Account"
  },
  {
    value:2,
    text:"Current Account"
  }        
];





  return (
    <>
      <Box sx={{ marginTop: "0.5rem" }}>
      <Grid container spacing={2}>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <CustomDropDown required={true} label="Payment Mode" id="paymentMode" value={""} placeholder="Payment Mode" displayEmpty={true} dropDownValue={paymentModeValues}/>
        </Grid>

              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <CustomDropDown required={true} label="Cheque Mode" id="chequeMode" value={""} placeholder="Cheque Mode" displayEmpty={true} dropDownValue={chequeModeValues}/>
              </Grid>

<Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
<CustomTextField required={true} label="Cheque Print at" id="chequePrintAt"  variant="outlined" value={""} type="text" placeholder="Enter Cheque Print At"/>
</Grid>

<Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
<CustomTextField required={true} label="Entity Name" id="entityName"  variant="outlined" value={""} type="text" placeholder="Enter Entity Name"/>
</Grid>

<Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
<CustomTextField required={true} label="Favour Name" id="favourName"  variant="outlined" value={""} type="text" placeholder="Enter Favour Name"/>
</Grid>

<Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
<CustomTextField required={true} label="Account Number" id="accountNumber"  variant="outlined" value={""} type="text" placeholder="Enter Account Number"/>
</Grid>


<Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
<CustomDropDown required={true} label="Debit Account Type" id="debitAccountType" value={""} placeholder="Debit Account Type" displayEmpty={true} dropDownValue={debitAccountTypeValues}/>
</Grid>

              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
<CustomTextField required={true} label="IFSC Code" id="ifsc"  variant="outlined" value={""} type="text" placeholder="Enter IFSC Code"/>
</Grid>



</Grid>
      </Box>
      {props.showGrid ? (
        <CurrentDisbursementDetailsGrid back={props.back} />
      ) : null}
    </>
  );
};
export default CurrentDisbursementDetails;
