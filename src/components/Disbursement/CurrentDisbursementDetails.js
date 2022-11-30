import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import CurrentDisbursementDetailsGrid from "./CurrentDisbursementDetailsGrid";

const CurrentDisbursementDetails = (props) => {
  const [ReadValue] = React.useState(false);
  const [dummyValue] = React.useState("");

  return (
    <>
      <Box sx={{ marginTop: "0.5rem" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={1} sx={{ alignItems: "center" }}>
              <Grid item sm={12} lg={4} xs={12}>
                <InputLabel required sx={{ color: "#7f7f7f" }}>
                  Payment Mode
                </InputLabel>
              </Grid>
              <Grid item xs={12} lg={8} sm={12}>
                <FormControl sx={{ minWidth: 210 }}>
                  <Select displayEmpty value={dummyValue} disabled={ReadValue}>
                    <MenuItem value="">
                      <p className="placeHolder_text">Select Payment Mode</p>
                    </MenuItem>
                    <MenuItem value={1}>Cash</MenuItem>
                    <MenuItem value={2}>Checks</MenuItem>
                    <MenuItem value={3}>Debit cards</MenuItem>
                    <MenuItem value={4}>Credit cards</MenuItem>
                    <MenuItem value={5}>Mobile payments</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Grid container spacing={1} sx={{ alignItems: "center" }}>
              <Grid item sm={12} lg={4} xs={12}>
                <InputLabel required sx={{ color: "#7f7f7f" }}>
                  Cheque Mode
                </InputLabel>
              </Grid>
              <Grid item xs={12} lg={8} sm={12}>
                <FormControl sx={{ minWidth: 210 }}>
                  <Select
                    displayEmpty
                    value={dummyValue}
                    disabled={ReadValue}
                    fullWidth
                  >
                    <MenuItem value="">
                      <p className="placeHolder_text">Cheque Mode</p>
                    </MenuItem>
                    <MenuItem value={1}>Crossed Cheque</MenuItem>
                    <MenuItem value={2}>Open cheque</MenuItem>
                    <MenuItem value={3}>Post-Dated Cheque</MenuItem>
                    <MenuItem value={4}>Stale Cheque</MenuItem>
                    <MenuItem value={5}>Traveller's cheque</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Grid container spacing={1} sx={{ alignItems: "center" }}>
              <Grid item sm={12} lg={4} xs={12}>
                <InputLabel required sx={{ color: "#7f7f7f" }}>
                  Cheque Print
                </InputLabel>
              </Grid>
              <Grid item xs={12} lg={8} sm={12}>
                <TextField
                  disabled={ReadValue}
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Enter Cheque Print"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Grid container spacing={1} sx={{ alignItems: "center" }}>
              <Grid item sm={12} lg={4} xs={12}>
                <InputLabel required sx={{ color: "#7f7f7f" }}>
                  Entity Name
                </InputLabel>
              </Grid>
              <Grid item xs={12} lg={8} sm={12}>
                <TextField
                  disabled={ReadValue}
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Enter Entity Name"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Grid container spacing={1} sx={{ alignItems: "center" }}>
              <Grid item sm={12} lg={4} xs={12}>
                <InputLabel required sx={{ color: "#7f7f7f" }}>
                  Favour Name
                </InputLabel>
              </Grid>
              <Grid item xs={12} lg={8} sm={12}>
                <TextField
                  disabled={ReadValue}
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Enter Favour Name"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Grid container spacing={1} sx={{ alignItems: "center" }}>
              <Grid item sm={12} lg={4} xs={12}>
                <InputLabel required sx={{ color: "#7f7f7f" }}>
                  Account Number
                </InputLabel>
              </Grid>
              <Grid item xs={12} lg={8} sm={12}>
                <TextField
                  disabled={ReadValue}
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Enter Account Number"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Grid container spacing={1} sx={{ alignItems: "center" }}>
              <Grid item sm={12} lg={4} xs={12}>
                <InputLabel required sx={{ color: "#7f7f7f" }}>
                  Debit Account Type
                </InputLabel>
              </Grid>
              <Grid item xs={12} lg={8} sm={12}>
                <FormControl>
                  <Select displayEmpty value={dummyValue}>
                    <MenuItem value="">
                      <p className="placeHolder_text">Select Account Type</p>
                    </MenuItem>
                    <MenuItem value={10}>Saving Account</MenuItem>
                    <MenuItem value={21}>Current Account</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Grid container spacing={1} sx={{ alignItems: "center" }}>
              <Grid item sm={12} lg={4} xs={12}>
                <InputLabel required sx={{ color: "#7f7f7f" }}>
                  IFSC Code
                </InputLabel>
              </Grid>
              <Grid item xs={12} lg={8} sm={12}>
                <TextField
                  disabled={ReadValue}
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Enter IFSC Code"
                />
              </Grid>
            </Grid>
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
