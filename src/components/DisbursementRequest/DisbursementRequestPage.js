import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function DisbursementRequestPage() {
    const [pageSize, setPageSize] = React.useState(10);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [rowValues,setRowValues] =  React.useState({});
    const handleClose = () => {
        setOpenDialog(false);
      };

      
    const rows = [
        { id: 1, trnno: 'STL20220001', name: 'Sundaram1' , date: '11/10/2022', amount: '5,00,000', status:'Not Disbursed' },
        { id: 2, trnno: 'STL20220002', name: 'Sundaram2' , date: '11/10/2022', amount: '2,00,000', status:'Not Disbursed' },
        { id: 3, trnno: 'STL20220003', name: 'Sundaram3' , date: '12/10/2022', amount: '12,00,000', status:'Not Disbursed' },
        { id: 4, trnno: 'STL20220004', name: 'Sundaram4' , date: '12/10/2022', amount: '2,00,000', status:'Not Disbursed' },
        { id: 5, trnno: 'STL20220005', name: 'Sundaram5' , date: '12/10/2022', amount: '13,00,000', status:'Not Disbursed' },
        { id: 6, trnno: 'STL20220006', name: 'Sundaram6' , date: '13/10/2022', amount: '4,00,000', status:'Not Disbursed' },
        { id: 7, trnno: 'STL20220007', name: 'Sundaram7' , date: '13/10/2022', amount: '6,00,000', status:'Not Disbursed' },
        { id: 8, trnno: 'STL20220008', name: 'Sundaram8' , date: '14/10/2022', amount: '8,00,000', status:'Not Disbursed' },
        { id: 9, trnno: 'STL20220009', name: 'Sundaram9' , date: '14/10/2022', amount: '9,00,000', status:'Not Disbursed' },
        { id: 10, trnno: 'STL202200010', name: 'Sundaram10' , date: '15/11/2022', amount: '6,50,000', status:'Not Disbursed' },
        { id: 11, trnno: 'STL202200011', name: 'Sundaram11' , date: '15/11/2022', amount: '5,05,000', status:'Not Disbursed' },
        { id: 12, trnno: 'STL202200012', name: 'Sundaram12' , date: '15/11/2022', amount: '9,00,000', status:'Not Disbursed' },
        { id: 13, trnno: 'STL202200013', name: 'Sundaram13' , date: '15/11/2022', amount: '3,00,000', status:'Not Disbursed' },
      ];


    const columns = [
        { field: 'id',  renderHeader: () => (<strong>ID</strong>), width: 90 },
        {
          field: 'trnno',
          renderHeader: () => (<strong>Trn No</strong>),
          description: 'Click here to update the status.',
          sortable: false,
          width: 160,
          renderCell: (params) =>{
            const trnnoClickHandler = (event) => {
                   const currentRow = params.row;
                   setRowValues(JSON.parse(JSON.stringify(currentRow)));
                   setOpenDialog(true);
            };
            return (<Button variant='contained' onClick={trnnoClickHandler}>{params.value}</Button>)
          },
        },
        {
          field: 'name',
          renderHeader: () => (<strong>Applicant Name</strong>),
          width: 150,
          editable: false,
        },
        {
          field: 'date',
          renderHeader: () => (<strong>Loan Sanctioned Date</strong>),
          type: 'number',
          width: 190,
          editable: false,
        },
        {
          field: 'amount',
          renderHeader: () => (<strong>Sanctioned Amount</strong>),
          type: 'number',
          width: 190,
          editable: false,
        },
        {
          field: 'status',
          renderHeader: () => (<strong>Disbursement Status</strong>),
          type: 'number',
          width: 160,
          editable: false,
        },
        
      ];
      
      


  return (
    <Box sx={{ height: 500 }}>
      <DataGrid sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-row:hover': {
            color: 'primary.main',
          },
          '& .MuiDataGrid-columnHeaders':{
            color: 'black',
            fontFamily: 'Roboto',
            backgroundColor:'#169BD5',
          },
        }}
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        disableSelectionOnClick 
      />
       <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Update Disbursement Status</DialogTitle>
        <DialogContent>
        <InputLabel required sx={{ color: "#7f7f7f" }}>
                Trn No:
              </InputLabel>
        <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder=""
                defaultValue={rowValues.trnno}
                disabled
              />
              <InputLabel required sx={{ color: "#7f7f7f" }}>
                Applicant Name:
              </InputLabel>
        <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder=""
                defaultValue={rowValues.name}
                disabled
              />
              <InputLabel required sx={{ color: "#7f7f7f" }}>
               Loan Sanctioned Date:
              </InputLabel>
        <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder=""
                defaultValue={rowValues.date}
                disabled
              />
              <InputLabel required sx={{ color: "#7f7f7f" }}>
               Sanctioned Amount:
              </InputLabel>
        <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder=""
                defaultValue={rowValues.amount}
                disabled
              />
               <InputLabel required sx={{ color: "#7f7f7f" }}>
               Disbursement Status:
              </InputLabel>
              <Select displayEmpty value='' variant='filled'>
                  <MenuItem value="">
                    <p className="placeHolder_text">Select Mode of Debit</p>
                  </MenuItem>
                  <MenuItem value={10}>Disbursed</MenuItem>
                  <MenuItem value={21}>Not Disbursed</MenuItem>
                  <MenuItem value={22}>Rejected</MenuItem>
                </Select>
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Update</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
