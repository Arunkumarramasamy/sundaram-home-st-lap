import { CurrencyRupee, Percent } from "@mui/icons-material";
import {  Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React from "react";


const BasicInformation = (props) => {

    const [disbursementDate, setDisbursementDate] = React.useState(dayjs("2022-11-28T21:11:54"));
    const [sanctionDate, setSanctionedDate] = React.useState(dayjs("2022-11-22T21:11:54"));
    const [requestDate, setRequestDate] = React.useState(dayjs("2022-11-18T21:11:54"));

       const processButtonClickHandler =() =>{
        props.onProcessButtonClick();
      };

    return ( 
        
        <Box sx={{border: '2px solid grey',padding: '0.3rem',borderRadius:'10px'}}>
            <h4>Basic Information:</h4>
            <Grid container spacing={3} sx={{marginTop:'2%'}}>

            <Grid item xs={12} sm={6}>
            <Grid container spacing={1} sx={{ alignItems: "center" }}>
              <Grid item sm={12} lg={4} xs={12}>
                <InputLabel required sx={{ color: "#7f7f7f" }}>
                Applicant Name
                </InputLabel>
              </Grid>
              <Grid item xs={12} lg={8} sm={12}>
              <TextField
              id="outlined-basic"
              variant="outlined"
              value={"Sundaram"}
              type="text"
            />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Grid container spacing={1} sx={{ alignItems: "center" }}>
              <Grid item sm={12} lg={4} xs={12}>
                <InputLabel required sx={{ color: "#7f7f7f" }}>
                Loan Request Date
                </InputLabel>
              </Grid>
              <Grid item xs={12} lg={8} sm={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  disableFuture
                  openTo="year"
                  views={["year", "month", "day"]}
                  value={requestDate}
                  onChange={(newValue) => {
                    setRequestDate(newValue);
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
                Total Disbursement Amount(<CurrencyRupee fontSize="small"/>)
                </InputLabel>
              </Grid>
              <Grid item xs={12} lg={8} sm={12}>
              <TextField
               
              id="outlined-basic"
              variant="outlined"
              type="number"
              value={1000000}
            />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Grid container spacing={1} sx={{ alignItems: "center" }}>
              <Grid item sm={12} lg={4} xs={12}>
                <InputLabel required sx={{ color: "#7f7f7f" }}>
                Current Disbursement Amount(<CurrencyRupee fontSize="small"/>)
                </InputLabel>
              </Grid>
              <Grid item xs={12} lg={8} sm={12}>
              <TextField
               
              id="outlined-basic"
              variant="outlined"
              type="number"
              value={1000000}
            />
              </Grid>
            </Grid>
          </Grid>


          <Grid item xs={12} sm={6}>
            <Grid container spacing={1} sx={{ alignItems: "center" }}>
              <Grid item sm={12} lg={4} xs={12}>
                <InputLabel required sx={{ color: "#7f7f7f" }}>
                Effective Rate(<Percent fontSize="small"/>)
                </InputLabel>
              </Grid>
              <Grid item xs={12} lg={8} sm={12}>
              <TextField
               
              id="outlined-basic"
              variant="outlined"
              value={18}
              type="number"
            />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Grid container spacing={1} sx={{ alignItems: "center" }}>
              <Grid item sm={12} lg={4} xs={12}>
                <InputLabel required sx={{ color: "#7f7f7f" }}>
                Number of Disbursement
                </InputLabel>
              </Grid>
              <Grid item xs={12} lg={8} sm={12}>
              <TextField
               
              id="outlined-basic"
              variant="outlined"
              type="number"
              value={1}
            />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Grid container spacing={1} sx={{ alignItems: "center" }}>
              <Grid item sm={12} lg={4} xs={12}>
                <InputLabel required sx={{ color: "#7f7f7f" }}>
                Proposal Type
                </InputLabel>
              </Grid>
              <Grid item xs={12} lg={8} sm={12}>
              <FormControl sx={{ minWidth: 220 }}>
              <Select displayEmpty value={1} >
                    <MenuItem value="">
                      <p className="placeHolder_text">Property Type</p>
                    </MenuItem>
                    <MenuItem value={1}>Agri Land</MenuItem>
                    <MenuItem value={2}>Site</MenuItem>
                    <MenuItem value={3}>Individual House</MenuItem>
                    <MenuItem value={3}>Apartment</MenuItem>
                  </Select>
                  </FormControl>
               </Grid>
            </Grid>
          </Grid>
          

          <Grid item xs={12} sm={6}>
            <Grid container spacing={1} sx={{ alignItems: "center" }}>
              <Grid item sm={12} lg={4} xs={12}>
                <InputLabel required sx={{ color: "#7f7f7f" }}>
                Sanction Date
                </InputLabel>
              </Grid>
              <Grid item xs={12} lg={8} sm={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  disableFuture
                  openTo="year"
                  views={["year", "month", "day"]}
                  value={sanctionDate}
                  onChange={(newValue) => {
                    setSanctionedDate(newValue);
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
                File Number
                </InputLabel>
              </Grid>
              <Grid item xs={12} lg={8} sm={12}>
              <TextField
               
              id="outlined-basic"
              variant="outlined"
              value={"Not Applicable"}
            />
              </Grid>
            </Grid>
          </Grid>
 
          <Grid item xs={12} sm={6}>
            <Grid container spacing={1} sx={{ alignItems: "center" }}>
              <Grid item sm={12} lg={4} xs={12}>
                <InputLabel required sx={{ color: "#7f7f7f" }}>
                Date of Disbursement
                </InputLabel>
              </Grid>
              <Grid item xs={12} lg={8} sm={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  disableFuture
                  openTo="year"
                  views={["year", "month", "day"]}
                  value={disbursementDate}
                  onChange={(newValue) => {
                    setDisbursementDate(newValue);
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
        marginTop: "1rem",
        marginBottom: "1rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Button variant="contained" onClick={processButtonClickHandler}>Process</Button>

    </Box>
        </Box>
    );
};
export default BasicInformation;
