import { Box, Grid } from "@mui/material";
import { useState } from "react";
import AccordianContainer from "../CustomComponents/AccordianContainer";
import CustomTextField from "../CustomComponents/CustomTextField";
import NoDataFound from "../CustomComponents/NoDataFound";
import STButton from "../CustomComponents/STButton";
import CurrentDisbursementDetails from "./CurrentDisbursementDetails";
import FilterCondition from "./FilterCondition";


const VoucherGeneration = () => {
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
      <FilterCondition onSearchButtonClick={searchButtonClickHandler} title="Authorised Voucher Generation:"/>
      {showResult ? (<><AccordianContainer title="Disbursement Details" initialOpen={true}>
        <CurrentDisbursementDetails showGrid={false} dataMap={dataMap}/>
        <Box>
          <Box sx={{ marginTop: "1.4rem" }}>


          <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={true}
            label="Cheque Number"
            id="chequeNumber"
            variant="outlined"
            value=""
            type="text"
            placeholder="Enter Cheque Number"
          />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={true}
            label="UTRAN Number"
            id="utranNumber"
            variant="outlined"
            value=""
            type="text"
            placeholder="Enter UTRAN Number"
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
            <STButton variant="contained" >
              Generate
            </STButton>
          </Box>
        </Box></AccordianContainer></>
      ) : (
        <NoDataFound />
      )}
    </>
  );
};

export default VoucherGeneration;
