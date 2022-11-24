import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import StButton from "../NACH/CustomStyles/StButton";
const CustomerInformationNew = (props) => {
  const onClickNext = () => {
    props.next();
  };
  return (
    <Box sx={{ marginTop: "3rem" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item lg={3} xs={12} sm={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                UMRN Number
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={9} sm={12}>
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
            <Grid item lg={3} xs={12} sm={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                Full Name
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={9} sm={12}>
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
            <Grid item lg={3} xs={12} sm={12}>
              <InputLabel sx={{ color: "#7f7f7f" }}>Loan Number</InputLabel>
            </Grid>
            <Grid item xs={12} lg={9} sm={12}>
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
            <Grid item sm={12} lg={3} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                Mobile Number
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={9} sm={12}>
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
            <Grid item sm={12} lg={3} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                E-mail ID
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={9} sm={12}>
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
            <Grid item sm={12} lg={3} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                Loan Amount
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={9} sm={12}>
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
            <Grid item sm={12} lg={3} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                PAN Number
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={9} sm={12}>
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
            <Grid item sm={12} lg={3} xs={12}>
              <InputLabel sx={{ color: "#7f7f7f" }}>Aadhar Number</InputLabel>
            </Grid>
            <Grid item xs={12} lg={9} sm={12}>
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
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <StButton variant="contained" onClick={onClickNext}>
          Next
        </StButton>
      </Box>
    </Box>
  );
};
export default CustomerInformationNew;
