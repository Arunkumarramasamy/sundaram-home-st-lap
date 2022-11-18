import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
const CustomerInformation = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={4} lg={3} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                UMRN Number
              </InputLabel>
            </Grid>
            <Grid item xs={8} lg={9}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter UMRN Number"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={4} lg={3} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                Full Name
              </InputLabel>
            </Grid>
            <Grid item xs={8} lg={9}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter Full Name"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={4} lg={3} xs={12}>
              <InputLabel sx={{ color: "#7f7f7f" }}>Loan Number</InputLabel>
            </Grid>
            <Grid item xs={8} lg={9}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter Loan Number"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={4} lg={3} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                Mobile Number
              </InputLabel>
            </Grid>
            <Grid item xs={8} lg={9}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter Mobile Number"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={4} lg={3} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                E-mail ID
              </InputLabel>
            </Grid>
            <Grid item xs={8} lg={9}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter E-mail ID"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={4} lg={3} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                Loan Amount
              </InputLabel>
            </Grid>
            <Grid item xs={8} lg={9}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter Loan Amount"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={4} lg={3} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                PAN Number
              </InputLabel>
            </Grid>
            <Grid item xs={8} lg={9}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter PAN Number"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={4} lg={3} xs={12}>
              <InputLabel sx={{ color: "#7f7f7f" }}>Aadhar Number</InputLabel>
            </Grid>
            <Grid item xs={8} lg={9}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter Aadhar Number"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          marginTop: "2rem",
        }}
      >
        <Button className="sub_btn" variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  );
};
export default CustomerInformation;
