import React from "react";
import Button from '@mui/material/Button';
import { Dialog, DialogTitle, Typography } from "@mui/material";
import PreviewImage from "./PreviewImage";
import ImageIcon from '@mui/icons-material/Image';
import IconButton from '@mui/material/IconButton';
import { Stack } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import DoneIcon from '@mui/icons-material/Done';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import EcPatta from '../../images/ec_cert.png';

const FilePendingProcess = () => {
    const [open, setOpen] = React.useState(false);
    const [url, setUrl] = React.useState('');
const handleCellEvent =(event)=>{
if(event.field==='preview'){
    setUrl(event.value);
    setOpen(true);
}else{
    setOpen(true); 
}
}
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const rows = [
        {
            id: 1,
            name: "Legal Document",
            type: "450",
            status: "450",
            preview: EcPatta,
           
        },
        {
            id: 2,
            name: "Aadhar",
            type: "3000",
            status: "2500",
            preview: "500",
           
        },
        {
            id: 3,
            name: "Pan",
            type: "5000",
            status: "5000",
            preview: "0",
            
        },
        {
            id: 4,
            name: "Bank Pass Book",
            type: "80",
            status: "80",
            preview: "0",
           
        },
        {
            id: 5,
            name: "Patta",
            type: "1000",
            status: "1000",
            preview: "0",
            
        },
        {
            id:6,
          name: "Chitta",
          type: "10000",
          status: "7000",
          preview: "3000",
          
        },
        {
            id:7,
            name: "Adangal",
            type: "100000",
            status: "50000",
            preview: "50000",
            
        },
        {
            id:8,
            name: "EC document",
            type: "30000",
            status: "30000",
            preview: "0",
            
        },
        {
            id: 9,
            name: "",
            type: "250",
            status: "0",
            preview: "250",
            
        },
        {
            id: 10,
            name: "Recovery Charge",
            type: "2000",
            status: "2000",
            preview: "2000",
           
        },
        
        
      ];
    
      const columns = [
        {
          field: "id",
          headerName: "S.No",
          headerAlign: 'center',type: "string",
          sortable: false,
          width: 50,
        },
        
        {
          field: "name",
          headerName: "File Name",
          headerAlign: 'center',type: "string",
          width: 300,
          align:'left',
          editable: false,
        },
        {
            field: "type",
            headerName: "File Type",
            headerAlign: 'center',type: "string",
            width: 150,
            align:'center',
            editable: false,
            visibile:false,
          },
        {
          field: "status",
          headerName: "Status",
          headerAlign: 'center',type: "string",
          width: 190, align:'center',
          editable: false,
          renderCell:(row)=>row.id%2==0?<DoneIcon/>:<RemoveDoneIcon/>
         
        },
        {
          field: "preview",
          headerName: "Preview",
          headerAlign: 'center',type: "string",
          width: '200',
          editable: false,
          align:'center',
          renderHeader:()=> <ImageIcon/>,
          renderCell:()=><ImageIcon/>
        },
           
      ];

    return (

        <React.Fragment sx={{ height: "100%" }}>
            <DataGrid
        sx={{
          boxShadow: 2,
          border: 2,
          height: "400px",
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
        disableSelectionOnClick
        getRowClassName={(params) =>
          params.id % 2 ? `super-app-theme--even` : `super-app-theme--odd`
        }
        onCellClick={handleCellEvent}
        // columnVisibilityModel={visibility}
      />
            <Dialog onClose={handleClose} handleClose={handleClose} open={open}>
                <PreviewImage onClose={handleClose} url={url} open={open}></PreviewImage>

            </Dialog>
        </React.Fragment>
    )
};
export default FilePendingProcess;
