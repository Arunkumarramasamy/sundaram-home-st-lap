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
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { React, useEffect, useState } from "react";

const columns = [
  {
    field: "id",
    headerName: "",
    headerAlign: "center",
    type: "number",
    hide: true,
    sortable: false,
    align: "center",
    editable: false,
  },
  {
    field: "refNum",
    headerName: "Reference Number",
    headerAlign: "center",
    type: "number",
    hideable: false,
    sortable: false,
    align: "right",
    editable: false,
    width: 123,
  },
  {
    field: "modifiedContent",
    headerName: "Modified",
    headerAlign: "center",
    type: "string",
    hideable: false,
    sortable: false,
    width: 350,
    align: "left",
    editable: false,
  },
  {
    field: "modifiedValue",
    headerName: "Amount",
    headerAlign: "center",
    type: "number",
    hideable: false,
    sortable: false,
    width: 120,
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
    width: 200,
    align: "left",
    editable: false,
  },
  {
    field: "modifiedDate",
    headerName: "Modified At",
    headerAlign: "center",
    type: "String",
    hideable: false,
    sortable: false,
    
    minWidth:218,
    align: "left",
    editable: false,
    valueGetter: (value) => new Date(value.value).toLocaleString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit', hour: '2-digit', minute:'2-digit', second : '2-digit',
      hour12: false
    }),
  },
];
const AdditionalHistory = (props) => {
  const [applicationNum, setapplicationNum] = useState(
    props.applicationNum
  );
  const [feeType, setFeeType] = useState(props.feeType);
  useEffect(() => {
    loadHistory();
  }, []);
  const [rows, setRows] = useState([]);
  const [totalRowsCount, setTotalRowsCount] = useState(0);
  const closeDialog = () => {
    props.onClose();
  };
  const loadHistory = async (props) => {
    const dataMap = {};
    dataMap["applicationNum"] = applicationNum;
    dataMap["feeType"] = feeType;
    try {
      const response = await axios.post(
        "http://localhost:8080/additionalfee/getHistoryData",
        dataMap
        );
        if (response.data.historyData) {
          setRows(response.data.historyData);
          setTotalRowsCount(response.data.historyData.length);
        }
    } catch {
      console.log("Network Error");
    }
  };

  return (
    <>
      <h4>
        {props.feeType === "accrual" ? "Accrual History" : "Waiver History"}
      </h4>

      {useMediaQuery("(min-width:1200px)") && (
        <DataGrid
          sx={{
            boxShadow: 2,
            border: 2,
            minHeight: "280px",
            height:'80%',
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
          pageSize={10}
          rowHeight={40}
          hideFooterPagination
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
                        subheader={"Parameter Name : " + row.modifiedContent}
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
                            {`: ${row.refNum}`}
                          </Grid>

                          <Grid item xs={6} md={5}>
                            Modified
                          </Grid>
                          <Grid item xs={6} md={7}>
                            {`: ${row.modifiedContent}`}
                          </Grid>

                          <Grid item xs={6} md={5}>
                            Amount
                          </Grid>
                          <Grid item xs={6} md={7}>
                            {`: ${row.modifiedValue}`}
                          </Grid>

                          <Grid item xs={6} md={5}>
                            Modified By
                          </Grid>
                          <Grid item xs={6} md={7}>
                            {`: ${row.modifiedBy}`}
                          </Grid>
                          <Grid item xs={6} md={5}>
                            Modified At
                          </Grid>
                          <Grid item xs={6} md={7}>
                            {`: ${new Date(row.modifiedDate).toLocaleString()}`}
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
