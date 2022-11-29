import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import STButton from "../CustomComponents/STButton";

const CurrentDisbursementDetails = () => {
  const [ReadValue, ] = React.useState(false);
  const [dummyValue, ] = React.useState("");
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "amout",
      headerName: "Amount",
      width: 150,
    },
    {
      field: "paymentMode",
      headerName: "Payment Mode",
      width: 150,
    },
    {
      field: "emiType",
      headerName: "EMI Type",
      width: 150,
    },
    {
      field: "entityName",
      headerName: "Entity Name",
      width: 150,
    },
    {
      field: "accountNumber",
      headerName: "Account Number",
      width: 150,
    },
    {
      field: "ifscCode",
      headerName: "IFSC Code",
      width: 150,
    },
  ];
  const rows = [
    {
      id: 1,
      amout: 10000,
      paymentMode: "Cash",
      emiType: "Fixed Amount",
      entityName: "Tom",
      accountNumber: "182728928282",
      ifscCode: "HDFC000007",
    },
    {
      id: 2,
      amout: 10000,
      paymentMode: "Cash",
      emiType: "Fixed Amount",
      entityName: "Tom",
      accountNumber: "182728928282",
      ifscCode: "HDFC000007",
    },
  ];
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
                  <Select  displayEmpty value={dummyValue} disabled={ReadValue}>
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
      <Box sx={{ height: 210, marginTop: "3rem" }}>
        <DataGrid
          sx={{
            "& div.MuiDataGrid-columnHeaders": {
              backgroundColor: "#2f7dc4",
              color: "white",
            },
            "& button.MuiIconButton-root": {
              color: "white",
            },
          }}
          rows={rows}
          columns={columns}
          rowsPerPageOptions={[4, 8, 12, 16]}
        ></DataGrid>
      </Box>

      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <STButton variant="contained">Submit and Download</STButton>
      </Box>
    </>
  );
};
export default CurrentDisbursementDetails;
