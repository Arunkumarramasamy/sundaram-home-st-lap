import { Chip, Grid ,Box} from "@mui/material";
import CustomButton from "../CustomComponents/CustomButton";
import CustomDataGrid from "../CustomComponents/CustomDataGrid";

const ConditionsAndDeviations = (props) => {

    const conditionColumns = [
        {
          field: "condition",
          headerName: "Condition",
          headerAlign: "center",
          type: "string",
          hideable: false,
          sortable: false,
          width: 250,
          align:"center",
        },
        {
          field: "date",
          headerName: "Date",
          headerAlign: "center",
          type: "string",
          width: 150,
          align: "right",
          editable: false,
        },
      ];

      const deviationColumns = [
        {
          field: "deviation",
          headerName: "Deviation",
          headerAlign: "center",
          type: "string",
          hideable: false,
          sortable: false,
          width: 250,
          align:"center",
        },
        {
          field: "status",
          headerName: "Status",
          headerAlign: "center",
          type: "string",
          width: 150,
          align: "right",
          editable: false,
          renderCell: (params) => {
            return (
              <Chip
              label={params.value}
              component="div"
              sx={{ color: "white", bgcolor: "Green", width:"90%" }}
            />
            );
          },
        },
      ];

      const conditionRows = [
        {
            id: 1,
            condition:"Legal Approved Date",
            date:"01/12/2022",          
          },
          {
            id: 2,
            condition:"Technical Approved Date",
            date:"04/12/2022",
          },
          {
            id: 3,
            condition:"Credit Approved Date",
            date:"10/12/2022",
          },
          {
            id: 4,
            condition:"RCU Approved Date",
            date:"11/12/2022",
          },
      ];

      const deviationRows = [
        {
            id: 1,
            deviation:"Legal Deviation Status",
            status:"Approved",          
          },
          {
            id: 2,
            deviation:"Technical Deviation Status",
            status:"Approved",
          },
          {
            id: 3,
            deviation:"Credit Deviation Status",
            status:"Approved",
          },
      ];

      
      return (
        <>
       <Grid container spacing={4}>
        
        <Grid item xs={12} sm={6} md={4} lg={6} xl={3}>
           <CustomDataGrid noDataMessage = "No Conditions."
                           noDataOnFilterMessage= "No Conditions on Applied Filter." 
                           rows={conditionRows}
                           columns={conditionColumns}
                           pageSize={5}
                           pageSizeOptions={[5,10,15,20,25]}
                           hideFooter={true}
                           gridHeight={"270px"}
                           //gridWidth={"40%"}
                           />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={6} xl={3}>
            <CustomDataGrid noDataMessage = "No Deviations."
                           noDataOnFilterMessage= "No Deviations on Applied Filter." 
                           rows={deviationRows}
                           columns={deviationColumns}
                           pageSize={5}
                           pageSizeOptions={[5,10,15,20,25]}
                           hideFooter={true}
                           gridHeight={"270px"}
                          // gridWidth={"40%"}
                           />
        </Grid></Grid>
        <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CustomButton variant="contained" sx={{marginTop:"2%"}} >
          Create Request
        </CustomButton>
        <CustomButton variant="contained" sx={{marginTop:"2%",marginLeft:"1%"}} onClick={()=>{props.setListVisibility(true);}}>
          Back to search
        </CustomButton>
        </Box>

     </>  );

};

export default ConditionsAndDeviations;