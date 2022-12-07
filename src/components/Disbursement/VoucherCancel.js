import {  Grid } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import AccordianContainer from "../CustomComponents/AccordianContainer";
import CustomDateField from "../CustomComponents/CustomDateField";
import CustomTextField from "../CustomComponents/CustomTextField";
import NoDataFound from "../CustomComponents/NoDataFound";
import STButton from "../CustomComponents/STButton";
import CurrentDisbursementDetails from "./CurrentDisbursementDetails";
import FilterCondition from "./FilterCondition";

const VoucherCancel = () => {
  const [showResult, setShowResult] = useState(false);



  const searchButtonClickHandler = (branch, trnNo, show) => {
    console.log(branch);
    console.log(trnNo);
    setShowResult(show);
  };

  const dataMap = {CurrentDisbursementDetails : {
    paymentMode:1,
      chequeMode:1,
      chequePrintAt:"Unknown",
      entityName:"Sundaram Home",
      favourName:"Sundaram Finance",
      accountNumber:"1242112176865264",
      debitAccountType:1,
      ifscCode:"HDFC000500",

  },};
  
  return (
    <>
      <FilterCondition onSearchButtonClick={searchButtonClickHandler} title="Voucher Cancel:"/>
      
      {showResult ? ( <><AccordianContainer title="Disbursement Details" initialOpen={true}>
        <CurrentDisbursementDetails showGrid={false} dataMap={dataMap}/>
       
          <Box sx={{ marginTop: "1.5rem" }}>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDateField
            required={true}
            label="Effective Date"
            id="effectiveDate"
            variant="outlined"
            value=""
            type="date"
            placeholder=""
          />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDateField
            required={true}
            label="Cancel Date"
            id="cancelDate"
            variant="outlined"
            value=""
            type="date"
            placeholder=""
          />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={true}
            label="Remarks"
            id="remarks"
            variant="outlined"
            value=""
            type="text"
            placeholder="Enter Remarks"
          />
          </Grid>
</Grid>


          
          </Box>
          <Box
            sx={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <STButton variant="contained">Cancel </STButton>
          </Box>
          </AccordianContainer>
        </>
      ) : (
        <NoDataFound />
      )}
      
    </>
  );
};

export default VoucherCancel;
