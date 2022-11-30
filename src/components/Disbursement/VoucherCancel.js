import { Button, Grid } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import CurrentDisbursementDetails from "./CurrentDisbursementDetails";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import FilterCondition from "./FilterCondition";
import NoDataFound from "./NoDataFound";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import STButton from "../CustomComponents/STButton";

const VoucherCancel = () => {
    
  const [showResult, setShowResult] = useState(false);
  const [requestDate, setRequestDate] = React.useState(
    dayjs("2022-11-18T21:11:54")
  );

  const searchButtonClickHandler = (branch, trnNo, show) => {
    console.log(branch);
    console.log(trnNo);
    setShowResult(show);
  };
  const [ReadValue] = React.useState(false);
  const [value, setValue] = React.useState(dayjs("2022-11-28T21:11:54"));
  const [FEDDValue, FEDDSetValue] = React.useState(
    dayjs("2022-08-01T21:11:54")
  );
  return (
    <>
      {/* <h4>Voucher Cancel:</h4> */}
      <FilterCondition onSearchButtonClick={searchButtonClickHandler} />
      {showResult ? (
        <CurrentDisbursementDetails showGrid={false} />
      ) : (
        <NoDataFound />
      )}
      {showResult ? (
        <>
          <Box sx={{ marginTop: "1.5rem" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={1} sx={{ alignItems: "center" }}>
                  <Grid item sm={12} lg={4} xs={12}>
                    <InputLabel required sx={{ color: "#7f7f7f" }}>
                      Effective Date
                    </InputLabel>
                  </Grid>
                  <Grid item xs={12} lg={8} sm={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        disabled={ReadValue}
                        disableFuture
                        openTo="year"
                        views={["year", "month", "day"]}
                        value={FEDDValue}
                        onChange={(newValue) => {
                          FEDDSetValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={1} sx={{ alignItems: "center" }}>
                  <Grid item sm={12} lg={4} xs={12}>
                    <InputLabel required sx={{ color: "#7f7f7f" }}>
                      Cancel Date
                    </InputLabel>
                  </Grid>
                  <Grid item xs={12} lg={8} sm={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        disabled={ReadValue}
                        disableFuture
                        openTo="year"
                        views={["year", "month", "day"]}
                        value={FEDDValue}
                        onChange={(newValue) => {
                          FEDDSetValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={1} sx={{ alignItems: "center" }}>
                  <Grid item sm={12} lg={4} xs={12}>
                    <InputLabel required sx={{ color: "#7f7f7f" }}>
                      Remark
                    </InputLabel>
                  </Grid>
                  <Grid item xs={12} lg={8} sm={12}>
                    <TextField
                      disabled={ReadValue}
                      id="outlined-basic"
                      variant="outlined"
                      placeholder="Enter Remark"
                    />
                  </Grid>
                </Grid>
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
        </>
      ) : null}
    </>
  );
};

export default VoucherCancel;
