import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";

import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import StButton from "./CustomStyles/StButton";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import * as React from "react";
import dayjs from "dayjs";
const Mandate = () => {
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));
  const [dummyValue, setDummyValue] = React.useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={12} lg={5} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                Collection Amount
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={7} sm={12}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter Collection Amount"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={12} lg={5} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                Maximum Collection Amount
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={7} sm={12}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter Maximum Collection Number"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={12} lg={5} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                Collection Type
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={7} sm={12}>
              <FormControl sx={{ minWidth: 210 }}>
                <Select displayEmpty value={dummyValue}>
                  <MenuItem value="">
                    <p className="placeHolder_text">Select coll. Type</p>
                  </MenuItem>
                  <MenuItem value={10}>Variable Amount</MenuItem>
                  <MenuItem value={21}>Fixed Amount</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={12} lg={5} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                Collection Frequency
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={7} sm={12}>
              <FormControl sx={{ minWidth: 210 }}>
                <Select displayEmpty value={dummyValue}>
                  <MenuItem value="">
                    <p className="placeHolder_text">Select Frequency</p>
                  </MenuItem>
                  <MenuItem value={10}>Monthly</MenuItem>
                  <MenuItem value={21}>Quarterly</MenuItem>
                  <MenuItem value={22}>H-Yearly</MenuItem>
                  <MenuItem value={22}>Yearly</MenuItem>
                  <MenuItem value={22}>As & When presented</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={12} lg={5} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                Collection First Date
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={7} sm={12}>
              <FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
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
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={12} lg={5} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                Collection Last Date
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={7} sm={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
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
      </Grid>
      <Box
        sx={{
          marginTop: "2rem",
        }}
      >
        <StButton variant="contained">Register</StButton>
      </Box>
    </Box>
  );
};
export default Mandate;
