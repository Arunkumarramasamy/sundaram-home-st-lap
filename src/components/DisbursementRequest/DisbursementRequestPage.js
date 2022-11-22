import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import { lighten } from "@mui/material/styles";

export default function DisbursementRequestPage() {
  const [pageSize, setPageSize] = React.useState(20);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [rowValues, setRowValues] = React.useState({});
  const [statusValue, setStatusValue] = React.useState("");
  const handleClose = () => {
    setOpenDialog(false);
  };

  const rows = [
    {
      id: 1,
      trnno: "STL20220001",
      name: "Sundaram1",
      date: "11/10/2022",
      amount: "5,00,000",
      status: "Not Disbursed",
    },
    {
      id: 2,
      trnno: "STL20220002",
      name: "Sundaram2",
      date: "11/10/2022",
      amount: "2,00,000",
      status: "Not Disbursed",
    },
    {
      id: 3,
      trnno: "STL20220003",
      name: "Sundaram3",
      date: "12/10/2022",
      amount: "12,00,000",
      status: "Not Disbursed",
    },
    {
      id: 4,
      trnno: "STL20220004",
      name: "Sundaram4",
      date: "12/10/2022",
      amount: "2,00,000",
      status: "Not Disbursed",
    },
    {
      id: 5,
      trnno: "STL20220005",
      name: "Sundaram5",
      date: "12/10/2022",
      amount: "13,00,000",
      status: "Not Disbursed",
    },
    {
      id: 6,
      trnno: "STL20220006",
      name: "Sundaram6",
      date: "13/10/2022",
      amount: "4,00,000",
      status: "Not Disbursed",
    },
    {
      id: 7,
      trnno: "STL20220007",
      name: "Sundaram7",
      date: "13/10/2022",
      amount: "6,00,000",
      status: "Not Disbursed",
    },
    {
      id: 8,
      trnno: "STL20220008",
      name: "Sundaram8",
      date: "14/10/2022",
      amount: "8,00,000",
      status: "Not Disbursed",
    },
    {
      id: 9,
      trnno: "STL20220009",
      name: "Sundaram9",
      date: "14/10/2022",
      amount: "9,00,000",
      status: "Not Disbursed",
    },
    {
      id: 10,
      trnno: "STL202200010",
      name: "Sundaram10",
      date: "15/11/2022",
      amount: "6,50,000",
      status: "Not Disbursed",
    },
    {
      id: 11,
      trnno: "STL202200011",
      name: "Sundaram11",
      date: "15/11/2022",
      amount: "5,05,000",
      status: "Not Disbursed",
    },
    {
      id: 12,
      trnno: "STL202200012",
      name: "Sundaram12",
      date: "15/11/2022",
      amount: "9,00,000",
      status: "Not Disbursed",
    },
    {
      id: 13,
      trnno: "STL202200013",
      name: "Sundaram13",
      date: "15/11/2022",
      amount: "3,00,000",
      status: "Not Disbursed",
    },
  ];

  const columns = [
    { field: "id", headerName: "S.No", width: 90 },
    {
      field: "trnno",
      headerName: "Trn No",
      type: "string",
      description: "Click here to update the status.",
      sortable: false,
      width: 160,
      renderCell: (params) => {
        const trnnoClickHandler = (event) => {
          const currentRow = params.row;
          setRowValues(JSON.parse(JSON.stringify(currentRow)));
          setOpenDialog(true);
        };
        return (
          <Button variant="contained" onClick={trnnoClickHandler}>
            {params.value}
          </Button>
        );
      },
    },
    {
      field: "name",
      headerName: "Applicant Name",
      type: "string",
      width: 150,
      editable: false,
    },
    {
      field: "date",
      headerName: "Loan Sanctioned Date",
      type: "string",
      width: 190,
      editable: false,
    },
    {
      field: "amount",
      headerName: "Sanctioned Amount",
      type: "string",
      width: 190,
      editable: false,
    },
    {
      field: "status",
      headerName: "Disbursement Status",
      type: "string",
      width: 160,
      editable: false,
    },
  ];

  const statusChangeHandler = (event) => {
    setStatusValue(event.target.value);
  };

  return (
    <Box
      sx={{
        height: window.innerHeight - 160,
        "& .super-app-theme--odd": {
          bgcolor: lighten("#D7D7D7", 0.15),
        },
        "& .super-app-theme--even": {
          bgcolor: lighten("#AAAAAA", 0.15),
        },
      }}
    >
      <DataGrid
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: "white",
          "& .MuiDataGrid-row:hover": {
            color: "#004A92",
            backgroundColor: "#B8E4F4",
          },
          "& .MuiDataGrid-columnHeaders": {
            color: "white",
            fontFamily: "Roboto",
            backgroundColor: "#7f7f7f",
          },
        }}
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        disableSelectionOnClick
        getRowClassName={(params) =>
          params.id % 2 ? `super-app-theme--even` : `super-app-theme--odd`
        }
      />
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Update Disbursement Status</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={1}>
                <Grid item sm={12} lg={12} xs={12}>
                  <InputLabel required sx={{ color: "#7f7f7f" }}>
                    Trn No:
                  </InputLabel>
                </Grid>
                <Grid item xs={12} lg={12} sm={12}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Enter Collection Amount"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={1}>
                <Grid item sm={12} lg={12} xs={12}>
                  <InputLabel required sx={{ color: "#7f7f7f" }}>
                    Applicant Name:
                  </InputLabel>
                </Grid>
                <Grid item xs={12} lg={12} sm={12}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder=""
                    defaultValue={rowValues.name}
                    disabled
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={1}>
                <Grid item sm={12} lg={12} xs={12}>
                  <InputLabel required sx={{ color: "#7f7f7f" }}>
                    Loan Sanctioned Date:
                  </InputLabel>
                </Grid>
                <Grid item xs={12} lg={12} sm={12}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder=""
                    defaultValue={rowValues.date}
                    disabled
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={1}>
                <Grid item sm={12} lg={12} xs={12}>
                  <InputLabel required sx={{ color: "#7f7f7f" }}>
                    Sanctioned Amount:
                  </InputLabel>
                </Grid>
                <Grid item xs={12} lg={12} sm={12}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder=""
                    defaultValue={rowValues.amount}
                    disabled
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={1}>
                <Grid item sm={12} lg={12} xs={12}>
                  <InputLabel required sx={{ color: "#7f7f7f" }}>
                    Disbursement Status:
                  </InputLabel>
                </Grid>
                <Grid item xs={12} lg={12} sm={12}>
                  <Select
                    displayEmpty
                    value={statusValue}
                    variant="filled"
                    onChange={statusChangeHandler}
                  >
                    <MenuItem value="">
                      <p className="placeHolder_text">Select Mode of Debit</p>
                    </MenuItem>
                    <MenuItem value={10}>Disbursed</MenuItem>
                    <MenuItem value={21}>Not Disbursed</MenuItem>
                    <MenuItem value={22}>Rejected</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Update</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
