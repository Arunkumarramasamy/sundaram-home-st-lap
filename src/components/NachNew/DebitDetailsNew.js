import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import StButton from "../NACH/CustomStyles/StButton";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
const DebitDetailsNew = (props) => {
  const onClickNext = () => {
    props.next();
  };
  const onClickPrevious = () => {
    props.previous();
  };
  const [dummyValue, setDummyValue] = React.useState("");
  return (
    <Box sx={{ marginTop: "3rem" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={12} lg={4.5} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                Mode of Debit
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={6.5} sm={12}>
              <FormControl sx={{ minWidth: 210 }}>
                <Select displayEmpty value={dummyValue}>
                  <MenuItem value="">
                    <p className="placeHolder_text">Select Mode of Debit</p>
                  </MenuItem>
                  <MenuItem value={10}>Net Baking</MenuItem>
                  <MenuItem value={21}>Debit Card</MenuItem>
                  <MenuItem value={22}>Credit Card</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={12} lg={4.5} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                Select Debit Bank
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={6.5} sm={12}>
              <FormControl sx={{ minWidth: 210 }}>
                <Select displayEmpty value={dummyValue}>
                  <MenuItem value="">
                    <p className="placeHolder_text">Select Debit Bank</p>
                  </MenuItem>
                  <MenuItem value={10}>Axis Bank</MenuItem>
                  <MenuItem value={21}>HDFC Bank</MenuItem>
                  <MenuItem value={22}>SBI Bank</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={12} lg={4.5} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                Debit Account Type
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={6.5} sm={12}>
              <FormControl sx={{ minWidth: 210 }}>
                <Select displayEmpty value={dummyValue}>
                  <MenuItem value="">
                    <p className="placeHolder_text">Select Account Type</p>
                  </MenuItem>
                  <MenuItem value={10}>Twenty</MenuItem>
                  <MenuItem value={21}>Twenty one</MenuItem>
                  <MenuItem value={22}>Twenty one and a half</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={12} lg={4.5} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                IFSC Code
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={6.5} sm={12}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter IFSC Code"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={12} lg={4.5} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                Select Authorize Bank
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={6.5} sm={12}>
              <FormControl sx={{ minWidth: 210 }}>
                <Select displayEmpty value={dummyValue}>
                  <MenuItem value="">
                    <p className="placeHolder_text">Select Authorize Bank</p>
                  </MenuItem>
                  <MenuItem value={10}>Axis Bank</MenuItem>
                  <MenuItem value={21}>HDFC Bank</MenuItem>
                  <MenuItem value={22}>SBI Bank</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={12} lg={4.5} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                Sponser Bank Code
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={6.5} sm={12}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter Bank Code"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={12} lg={4.5} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                Debit Type
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={6.5} sm={12}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    sx={{ color: "#7f7f7f" }}
                    value="fixed"
                    control={<Radio />}
                    label="Fixed Amount"
                  />
                  <FormControlLabel
                    sx={{ color: "#7f7f7f" }}
                    value="maximum"
                    control={<Radio />}
                    label="Maximum amount"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={12} lg={4.5} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                Utility Code
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={6.5} sm={12}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter Utility Code"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={12} lg={4.5} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                Debit Account Number
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={6.5} sm={12}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter Account Number"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={12} lg={4.5} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                Confirm Account Number
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={6.5} sm={12}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Confirm Account Number"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={12} lg={4.5} xs={12}>
              <InputLabel sx={{ color: "#7f7f7f" }}>Reference 1</InputLabel>
            </Grid>
            <Grid item xs={12} lg={6.5} sm={12}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter Credit Card Number"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={12} lg={4.5} xs={12}>
              <InputLabel sx={{ color: "#7f7f7f" }}>Reference 2</InputLabel>
            </Grid>
            <Grid item xs={12} lg={6.5} sm={12}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter Credit Card Number"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <StButton variant="contained" onClick={onClickPrevious}>
          Back
        </StButton>
        <StButton variant="contained" onClick={onClickNext}>
          Next
        </StButton>
      </Box>
    </Box>
  );
};
export default DebitDetailsNew;
