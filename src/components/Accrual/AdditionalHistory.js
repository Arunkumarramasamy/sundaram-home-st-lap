import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { React, useEffect, useState } from "react";

const columns = [
  {
    field: "id",
    headerName: "S.No",
    headerAlign: "center",
    type: "number",
    hideable: false,
    sortable: false,
    align: "center",
    editable: false,
  },
  {
    field: "modified",
    headerName: "Modified",
    headerAlign: "center",
    type: "string",
    hideable: false,
    sortable: false,
    width: 300,
    align: "center",
    editable: false,
  },
  {
    field: "amount",
    headerName: "Amount",
    headerAlign: "center",
    type: "number",
    hideable: false,
    sortable: false,
    width: 100,
    align: "right",
    editable: false,
  },
  {
    field: "modifiedBy",
    headerName: "Modified By",
    headerAlign: "center",
    type: "String",
    hideable: false,
    sortable: false,
    width: 100,
    align: "right",
    editable: false,
  },
];
const AdditionalHistory = (props) => {
  const [rows, setRows] = useState([]);
  const [totalRowsCount, setTotalRowsCount] = useState(0);
  const closeDialog = () => {
    props.onClose();
  };

  useEffect(() => {
    const rows = [
      {
        id: 1234561,
        modified: "File Processing Charges",
        amount: 1000,
        modifiedBy: "Arun",
      },
      {
        id: 23456,

        modified: "File Processing Charges",
        amount: 1000,
        modifiedBy: "Raagesh",
      },
      {
        id: 376,

        modified: "File Processing Charges",
        amount: 1000,
        modifiedBy: "Bala",
      },
      {
        id: 4765,
        modified: "File Processing Charges",
        amount: 1000,
        modifiedBy: "Vignesh",
      },
      {
        id: 5765,
        modified: "File Processing Charges",
        amount: 1000,
        modifiedBy: "Naveen",
      },
    ];
    setRows(rows);
    setTotalRowsCount(rows.length);
  }, []);

  return (
    <>
      <h4>{props.title}</h4>

      {useMediaQuery("(min-width:1200px)") && (
        <DataGrid
          sx={{
            boxShadow: 2,
            border: 2,
            minHeight: "280px",
            borderColor: "white",
            "& .MuiDataGrid-columnHeaders": {
              color: "white",
              fontFamily: "Roboto",
              backgroundColor: "#004A92",
            },
          }}
          rows={rows}
          columns={columns}
          disableSelectionOnClick
          autoHeight
          hideFooterPagination
          hideFooterSelectedRowCount
          // onCellEditCommit={(event)=>handleCellChangedEvent(event)}
          getRowClassName={(params) =>
            params.id % 2 ? `super-app-theme--even` : `super-app-theme--odd`
          }
        />
      )}

      {useMediaQuery("(max-width:1200px)") && (
        <>
          <Box
            display="flex"
            alignItems="flex-end"
            justifyContent="flex-end"
            sx={{ height: "40px", bgcolor: "white" }}
          >
            <Typography
              padding="1px"
              sx={{ color: "#004A92", fontWeight: 700 }}
            >
              {"Total Records : " + totalRowsCount}
            </Typography>
          </Box>
          <Box
            sx={{
              height: window.innerHeight - 300,
              overflow: "auto",
              flex: "1 auto",
            }}
          >
            {" "}
            <Grid container>
              {rows.map((row, index) => {
                return (
                  <Grid item xs={12}>
                    <Card>
                      <CardHeader
                        subheader={"Parameter Name : " + row.id}
                        subheaderTypographyProps={{
                          color: "#004A92",
                          fontWeight: "700",
                        }}
                        sx={{
                          textAlign: "left",
                          padding: "16px 16px 0px 16px !important",
                        }}
                      />

                      <CardContent>
                        <Grid container>
                          <Grid item xs={6} md={5}>
                            Reference Number
                          </Grid>
                          <Grid item xs={6} md={7}>
                            {`: ${row.id}`}
                          </Grid>

                          <Grid item xs={6} md={5}>
                            Modified
                          </Grid>
                          <Grid item xs={6} md={7}>
                            {`: ${row.modified}`}
                          </Grid>

                          <Grid item xs={6} md={5}>
                            Amount
                          </Grid>
                          <Grid item xs={6} md={7}>
                            {`: ${row.amount}`}
                          </Grid>

                          <Grid item xs={6} md={5}>
                            Modified By
                          </Grid>
                          <Grid item xs={6} md={7}>
                            {`: ${row.modifiedBy}`}
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </>
      )}

      <Box style={{ width: "100%", direction: "rtl" }}>
        <Button
          sx={{
            marginLeft: "1rem",
            color: "white",
            backgroundColor: "black",
            fontWeight: "bold",
            marginTop: "10px",
          }}
          onMouseOver={({ target }) => {
            target.style.backgroundColor = "black";
            target.style.color = "white";
          }}
          variant="contained"
          onClick={closeDialog}
        >
          close
        </Button>
      </Box>
    </>
  );
};
export default AdditionalHistory;
