import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import STButton from "../CustomComponents/STButton";
import { Box } from "@mui/material";


const FeesOutstanding = (props) => {
    const [pageSize, setPageSize] = React.useState(4);

    const nextClickHandler = () => {
      props.nav("3");
    };


    const rows = [
        {
            id: 7,
            details: "Mod Charges",
            due: "450",
            paid: "450",
            waited: "80",
            deduction: "Nill",
        },
        {
            id: 8,
            details: "Legal Charges",
            due: "3000",
            paid: "2500",
            waited: "500",
            deduction: "Nill",
        },
        {
            id: 9,
            details: "Technical Assistance Charges",
            due: "5000",
            paid: "5000",
            waited: "0",
            deduction: "Nill",
        },
        {
            id: 10,
            details: "Documentation Charges",
            due: "80",
            paid: "80",
            waited: "0",
            deduction: "Nill",
        },
        {
            id: 11,
            details: "File Processing Charges",
            due: "1000",
            paid: "1000",
            waited: "0",
            deduction: "Nill",
        },
        {
            id:1,
          details: "Application Fee",
          due: "10000",
          paid: "7000",
          waited: "3000",
          deduction: "3000",
        },
        {
            id:2,
            details: "Prepayment Charge",
            due: "100000",
            paid: "50000",
            waited: "50000",
            deduction: "Nill",
        },
        {
            id:3,
            details: "Partial prepayment charge",
            due: "30000",
            paid: "30000",
            waited: "0",
            deduction: "Nill",
        },
        {
            id: 4,
            details: "Late Fee charge",
            due: "250",
            paid: "0",
            waited: "250",
            deduction: "250",
        },
        {
            id: 5,
            details: "Recovery Charge",
            due: "2000",
            paid: "2000",
            waited: "2000",
            deduction: "Nill",
        },
        {
            id: 6,
            details: "Insurance Premium Charge",
            due: "784",
            paid: "784",
            waited: "0",
            deduction: "Nill",
        },
        
        {
            id: 12,
            details: "Other Charges",
            due: "0",
            paid: "0",
            waited: "0",
            deduction: "Nill",
        },
        
      ];
    
      const columns = [
        {
          field: "details",
          headerName: "Details",
          headerAlign: 'center',type: "string",
          
          sortable: false,
          width: 250,
        
        },
        {
          field: "due",
          headerName: "Due Amount (₹)",
          headerAlign: 'center',type: "string",
          width: 150,
          align:'right',
          editable: false,
        },
        {
          field: "paid",
          headerName: "Paid Amount (₹)",
          headerAlign: 'center',type: "string",
          width: 190,
          align:'right',
          editable: false,
        },
        {
          field: "waited",
          headerName: "Waved Amount (₹)",
          headerAlign: 'center',type: "string",
          width: 190, align:'right',
          editable: false,
        },
        {
          field: "deduction",
          headerName: "Deduction",
          headerAlign: 'center',type: "string",
          width: '200',
          editable: false,
        },
           
      ];
    //   let visibility = {
    //     details: false,
    //     due: false,
    //     paid: false,
    //     waited: false,
    //     deduction: false,
    //   };
    //   if(window.innerWidth > 700){
    //     visibility = {};
    //   }
    return(
<React.Fragment sx={{height:"100%"}}>
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
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[4, 8, 12, 16]}
        disableSelectionOnClick
        getRowClassName={(params) =>
          params.id % 2 ? `super-app-theme--even` : `super-app-theme--odd`
        }
        // columnVisibilityModel={visibility}
      />
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <STButton variant="contained" onClick={nextClickHandler}>
          Next
        </STButton>
      </Box>
</React.Fragment>
    )
};
export default FeesOutstanding;
