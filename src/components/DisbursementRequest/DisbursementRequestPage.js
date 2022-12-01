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
import { lighten } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";


export default function DisbursementRequestPage() {
  const [pageSize, setPageSize] = React.useState(4);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [rowValues, setRowValues] = React.useState({});
  const [statusValue, setStatusValue] = React.useState("");
  const [dummyValue, setDummyValue] = React.useState("");

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
      amount1: "5,00,000",
      disbursementDate: "02/11/2022",
      rate: "18%",
      sanctionedDate: "25/10/2022",
      file: "STL20220001"
      
    },
    {
      id: 2,
      trnno: "STL20220002",
      name: "Sundaram2",
      date: "01/11/2022",
      amount: "2,00,000",
      status: "Not Disbursed",
      amount1: "1,90,000",
      disbursementDate: "20/11/2022",
      rate: "18%",
      sanctionedDate: "10/11/2022",
      file: "STL20220002"
    },
    {
      id: 3,
      trnno: "STL20220003",
      name: "Sundaram3",
      date: "12/10/2022",
      amount: "12,00,000",
      status: "Not Disbursed",
      amount1: "11,50,000",
      disbursementDate: "01/11/2022",
      rate: "18%",
      sanctionedDate: "25/10/2022",
      file: "STL20220003"
    },
    {
      id: 4,
      trnno: "STL20220004",
      name: "Sundaram4",
      date: "12/10/2022",
      amount: "2,00,000",
      status: "Not Disbursed",
      amount1: "2,00,000",
      disbursementDate: "22/10/2022",
      rate: "18%",
      sanctionedDate: "19/10/2022",
      file: "STL20220004"
    },
    {
      id: 5,
      trnno: "STL20220005",
      name: "Sundaram5",
      date: "12/10/2022",
      amount: "13,00,000",
      status: "Not Disbursed",
      amount1: "5,00,00",
      disbursementDate: "25/11/2022",
      rate: "18%",
      sanctionedDate: "25/10/2022",
      file: "STL20220005"
    },
    {
      id: 6,
      trnno: "STL20220006",
      name: "Sundaram6",
      date: "13/10/2022",
      amount: "4,00,000",
      status: "Not Disbursed",
      amount1: "5,00,00",
      disbursementDate: "25/11/2022",
      rate: "18%",
      sanctionedDate: "25/10/2022",
      file: "STL20220006"
    },
    {
      id: 7,
      trnno: "STL20220007",
      name: "Sundaram7",
      date: "13/10/2022",
      amount: "6,00,000",
      status: "Not Disbursed",
      amount1: "5,00,00",
      disbursementDate: "25/11/2022",
      rate: "18%",
      sanctionedDate: "25/10/2022",
      file: "STL20220007"
    },
    {
      id: 8,
      trnno: "STL20220008",
      name: "Sundaram8",
      date: "14/10/2022",
      amount: "8,00,000",
      status: "Not Disbursed",
      amount1: "5,00,00",
      disbursementDate: "25/11/2022",
      rate: "18%",
      sanctionedDate: "25/10/2022",
      file: "STL20220008"
    },
    {
      id: 9,
      trnno: "STL20220009",
      name: "Sundaram9",
      date: "14/10/2022",
      amount: "9,00,000",
      status: "Not Disbursed",
      amount1: "5,00,00",
      disbursementDate: "25/11/2022",
      rate: "18%",
      sanctionedDate: "25/10/2022",
      file: "STL20220009"
    },
    {
      id: 10,
      trnno: "STL202200010",
      name: "Sundaram10",
      date: "15/11/2022",
      amount: "6,50,000",
      status: "Not Disbursed",
      amount1: "5,00,00",
      disbursementDate: "25/11/2022",
      rate: "18%",
      sanctionedDate: "25/10/2022",
      file: "STL20220010"
    },
    {
      id: 11,
      trnno: "STL202200011",
      name: "Sundaram11",
      date: "15/11/2022",
      amount: "5,05,000",
      status: "Not Disbursed",
      amount1: "5,00,000",
      disbursementDate: "25/11/2022",
      rate: "18%",
      sanctionedDate: "20/11/2022",
      file: "STL20220011"
    },
    {
      id: 12,
      trnno: "STL202200012",
      name: "Sundaram12",
      date: "15/11/2022",
      amount: "9,00,000",
      status: "Not Disbursed",
      amount1: "9,00,000",
      disbursementDate: "29/11/2022",
      rate: "18%",
      sanctionedDate: "25/11/2022",
      file: "STL20220012"
    },
    {
      id: 13,
      trnno: "STL202200013",
      name: "Sundaram13",
      date: "15/11/2022",
      amount: "3,00,000",
      status: "Not Disbursed",
      amount1: "2,50,000",
      disbursementDate: "01/12/2022",
      rate: "18%",
      sanctionedDate: "25/11/2022",
      file: "STL20220013"
    },
  ];

  const columns = [
    {
      field: "trnno",
      headerName: "Trn No",
      headerAlign: 'center',type: "string",
      description: "Click here to update the status.",
      sortable: false,
      width: 160,
      hideable: false,
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
      headerAlign: 'center',type: "string",
      width: 150,
      editable: false,
    },
    {
      field: "date",
      headerName: "Loan Request Date",
      headerAlign: 'center',type: "string",
      width: 190,
      editable: false,
    },
    {
      field: "amount",
      headerName: "Total Disbursement Amount",
      headerAlign: 'center',type: "string",
      width: 190,
      editable: false,
    },
    {
      field: "amount1",
      headerName: "Current Disbursement Amount",
      headerAlign: 'center',type: "string",
      width: 190,
      editable: false,
    },
    {
      field: "disbursementDate",
      headerName: "Disbursement Date",
      headerAlign: 'center',type: "string",
      width: 190,
      editable: false,
    },
    {
      field: "rate",
      headerName: "Effective Rate",
      headerAlign: 'center',type: "string",
      width: 190,
      editable: false,
    },
    {
      field: "sanctionedDate",
      headerName: "Sanction Date",
      headerAlign: 'center',type: "string",
      width: 190,
      editable: false,
    },
    {
      field: "file",
      headerName: "File Number",
      headerAlign: 'center',type: "string",
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

let visibility = {
  status: false,
  amount: false,
  date: false,
  name: false,
  amount1: false,
  rate: false,
  sanctionedDate: false,
  disbursementDate: false,
  file: false
};

if(window.innerWidth > 700){
  visibility = {};
}

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


    <Box sx={{border: '3px grey',marginTop:'2%'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={12} lg={4.5} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                Branch
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={6.5} sm={12}>
              <FormControl sx={{ minWidth: 210 }}>
                <Select displayEmpty value={dummyValue} >
                  <MenuItem value="">
                    <p className="placeHolder_text">Branch</p>
                  </MenuItem>
                  <MenuItem value={10}>Royapettah</MenuItem>
                  <MenuItem value={21}>Mylapore</MenuItem>
                  <MenuItem value={22}>Light House</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={12} lg={4.5} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                TRN Number
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={6.5} sm={12}>
              <TextField
                fullWidth 
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter TRN Number"
              />
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
        <Button variant="contained">Search</Button>
        <Button sx={{marginLeft:"1rem",backgroundColor:"black"}} variant="contained">Clear</Button>
      </Box>
    </Box>

      <DataGrid
        sx={{
          boxShadow: 2,
          border: 2,
          height: "70%",
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
        columns={columns }
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[4, 8, 12, 16]}
        disableSelectionOnClick
        getRowClassName={(params) =>
          params.id % 2 ? `super-app-theme--even` : `super-app-theme--odd`
        }
        initialState={{
          columns: {
            columnVisibilityModel: {
             ...visibility
            },
          },
        }}
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
