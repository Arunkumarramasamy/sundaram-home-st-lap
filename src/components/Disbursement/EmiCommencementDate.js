import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import * as React from "react";
import dayjs from "dayjs";
import Switch from "@mui/material/Switch";
import STButton from "../CustomComponents/STButton";

const EmiCommencementDate = (props) => {
  const [ReadValue, ] = React.useState(false);
  const [value, setValue] = React.useState(dayjs("2022-11-28T21:11:54"));
  const [FEDDValue, FEDDSetValue] = React.useState(
    dayjs("2022-08-01T21:11:54")
  );
  const [dummyValue, ] = React.useState("");
  const EmiOnClick = () => {
    props.nav("4");
  };
  return (
    <Box sx={{ marginTop: "0.5rem" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={1} sx={{ alignItems: "center" }}>
            <Grid item sm={12} lg={4} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                Moratorium
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={8} sm={12}>
              <Switch disabled={ReadValue} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid container spacing={1} sx={{ alignItems: "center" }}>
            <Grid item sm={12} lg={4} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                Number of Months
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={8} sm={12}>
              <TextField
                disabled={ReadValue}
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter Number of months"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid container spacing={1} sx={{ alignItems: "center" }}>
            <Grid item sm={12} lg={4} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                EMI Options
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={8} sm={12}>
              <FormControl sx={{ minWidth: 210 }}>
                <Select displayEmpty value={dummyValue} disabled={ReadValue}>
                  <MenuItem value="">
                    <p className="placeHolder_text">Select EMI Options</p>
                  </MenuItem>
                  <MenuItem value={1}>Commence EMI</MenuItem>
                  <MenuItem value={2}>Continue EMI</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid container spacing={1} sx={{ alignItems: "center" }}>
            <Grid item sm={12} lg={4} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                ECD
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={8} sm={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  disabled={ReadValue}
                  disableFuture
                  openTo="year"
                  views={["year", "month", "day"]}
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
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
                FBD
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={8} sm={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  disabled={ReadValue}
                  disableFuture
                  openTo="year"
                  views={["year", "month", "day"]}
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
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
                FEDD
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
      </Grid>
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <STButton variant="contained" onClick={EmiOnClick}>
          Next
        </STButton>
      </Box>
    </Box>
  );
};
export default EmiCommencementDate;
