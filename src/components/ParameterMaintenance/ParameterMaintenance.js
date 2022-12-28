import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  useMediaQuery,
} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import axios from "axios";
import CustomDataGrid from "../CustomComponents/CustomDataGrid";
import CustomDateField from "../CustomComponents/CustomDateField";
import CustomDropDown from "../CustomComponents/CustomDropDown";
import CustomTextField from "../CustomComponents/CustomTextField";
import NoDataFound from "../CustomComponents/NoDataFound";
import StlapFooter from "../CustomComponents/StlapFooter";
import MoreAction from "./MoreAction";

const ParameterMaintenance = () => {
  useEffect(() => {
    const rows = [
      {
        id: "1",
        parameterName: "Minimum Disbursement Amount",
        parameterDatatype: "Int",
        parameterValue: 100000,
        effectiveStartDate: "01/01/2021",
        effectiveEndDate: "10/06/2022",
      },

      {
        id: "2",
        parameterName: "Maximum Allowable Cash Receipt",
        parameterDatatype: "BigInt",
        parameterValue: 10000,
        effectiveStartDate: "10/11/2021",
        effectiveEndDate: "12/03/2022",
      },
    ];
    setRows(rows);
    setTotalRowsCount(rows.length);
  }, []);

  const columns = [
    {
      field: "action",
      headerName: "Actions",
      headerAlign: "center",
      align: "center",
      width: 130,
      hideable: false,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        return (
          <MoreAction params={params.row} viewClickHandler={viewClickHandler} />
        );
      },
    },
    {
      field: "parameterName",
      headerName: "Parameter Name",
      editable: "true",
      headerAlign: "center",
      align: "center",
      width: 350,
    },
    {
      field: "parameterDatatype",
      headerName: "Parameter Data Type",
      headerAlign: "center",
      align: "center",
      width: 160,
    },
    {
      field: "parameterValue",
      headerName: "Parameter Value",
      headerAlign: "center",
      align: "center",
      width: 160,
      renderCell: (params) => {
        return params.value.toLocaleString("en-IN");
      },
    },
    {
      field: "effectiveStartDate",
      headerName: "Effective Start Date",
      headerAlign: "center",
      align: "center",
      width: 160,
    },
    {
      field: "effectiveEndDate",
      headerName: "Effective End Date",
      headerAlign: "center",
      align: "center",
      width: 160,
    },
  ];
  //ROw count
  const rowsPerPage = 10;
  const [rows, setRows] = useState([]);
  const [totalRowsCount, setTotalRowsCount] = useState(0);
  /** Getting Current date */
  var today = new Date();
  var todayDate =
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
  /**Disabled State */
  const [disabled, setdisabled] = useState(false);
  const [mode, setMode] = useState("0");
  /**Parameter Values */
  const [paraMeterName, setParamMeterName] = useState("");
  const [paramDataType, setparamDataType] = useState("");
  const [startDate, setstartDate] = useState(todayDate);
  const [endDate, setEndDate] = useState(todayDate);
  const [ParamValue, setParamValue] = useState("");
  /**Modify Click Handler */
  const viewClickHandler = (values) => {
    setdisabled(true);
    handleClickDialogOpen();
    console.log(values);
    setParamMeterName(values.parameterName);
    setparamDataType(values.parameterDatatype);
    setstartDate(values.effectiveStartDate);
    setEndDate(values.effectiveEndDate);
    setParamValue(values.parameterValue);
    setParamValue(() => {
      return values.parameterValue.toLocaleString("en-IN");
    });
  };
  /**Dialog Click Handler */
  const DialogOkHandler = () => {
    // setdisabled(true);
    setDialogOpen(false);
    console.log(mode);
    //if save click happen
    SendData();
  };
  const SendData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/parameter/insert",
        {
          paramDataType: paramDataType,
          paramEffStartDt: new Date(startDate),
          paramEffEndDt: new Date(endDate),
          paramName: paraMeterName,
          paramValue: ParamValue,
        }
      );
    } catch {
      console.log("error");
    }
  };
  /** Show Dialog Handlers */
  const [Dialogopen, setDialogOpen] = React.useState(false);
  const handleClickDialogOpen = () => {
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setdisabled(true);
    setDialogOpen(false);
  };
  const addBtnHandler = () => {
    setMode(0);
    Reset();
    setdisabled(false);
    setDialogOpen(true);
  };
  /**Reset All values */
  const Reset = () => {
    setParamMeterName("");
    setparamDataType("");
    setstartDate(todayDate);
    setEndDate(todayDate);
    setParamValue("");
  };

  return (
    <>
      <Box
        sx={{
          padding: "20px",
          backgroundColor: "white",
        }}
      >
        <h4> Parameter Maintenance</h4>
        <Box
          sx={{
            marginTop: "5px",
            marginBottom: "5px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button variant="contained" onClick={addBtnHandler}>
            Add
          </Button>
        </Box>
        {useMediaQuery("(min-width:1200px)") && (
          <Box>
            <CustomDataGrid
              noDataMessage="No Data."
              noDataOnFilterMessage="No Data on Applied Filter."
              rows={rows}
              // gridHeight={window.innerHeight - 230}
              columns={columns}
              pageSize={5}
              pageSizeOptions={[5, 10, 15, 20, 25]}
            />
          </Box>
        )}
        {useMediaQuery("(max-width:1200px)") && (
          <React.Fragment>
            <Grid
              container
              item
              direction="row"
              alignItems="flex-end"
              justifyContent="flex-end"
              sx={{ height: "60px", bgcolor: "white" }}
            >
              {totalRowsCount > 10 && (
                <Typography sx={{ mr: 2, color: "#004A92", fontWeight: 700 }}>
                  {"Page Max Records : " + rowsPerPage}
                </Typography>
              )}
              <Typography
                padding="1px"
                sx={{ color: "#004A92", fontWeight: 700 }}
              >
                {"Total Records : " + totalRowsCount}
              </Typography>
              {/* <Pagination
                count={totalPageCount}
                color="primary"
                onChange={handlePageChange}
                page={page}
                renderItem={(item) => (
                  <PaginationItem
                    slots={{ previous: ArrowBack, next: ArrowForward }}
                    {...item}
                  />
                )}
              /> */}
            </Grid>
            <Grid container>
              <Box
                sx={{
                  height: window.innerHeight - 300,
                  overflow: "auto",
                  flex: "1 auto",
                }}
              >
                {rows.map((row, index) => (
                  <React.Fragment>
                    <Grid container direction="column" sx={{ flex: "1 auto" }}>
                      <Card>
                        {
                          <CardHeader
                            action={
                              <React.Fragment>
                                {
                                  <MoreAction
                                    params={row}
                                    viewClickHandler={viewClickHandler}
                                  />
                                }
                              </React.Fragment>
                            }
                            subheader={"Parameter Name : " + row.parameterName}
                            subheaderTypographyProps={{
                              color: "#004A92",
                              fontWeight: "700",
                            }}
                            sx={{
                              textAlign: "left",
                              padding: "16px 16px 0px 16px !important",
                            }}
                          />
                        }

                        <CardContent>
                          <Grid
                            container
                            item
                            direction="column"
                            alignItems="flex-start"
                            justifyContent="flex-start"
                          >
                            <Typography padding="1px">
                              {"parameteData type : " + row.parameterDatatype}
                            </Typography>
                            <Typography padding="1px">
                              {" effectiveStartDate : " +
                                row.effectiveStartDate}
                            </Typography>
                            <Typography padding="1px">
                              {"effectiveEndDate : " + row.effectiveEndDate}
                            </Typography>
                            <Typography padding="1px">
                              {"parameterValue : " + row.parameterValue}
                            </Typography>
                          </Grid>
                          {/* <Grid
                            container
                            item
                            direction="row"
                            alignItems="flex-end"
                            justifyContent="flex-end"
                          >
                            <Typography sx={{ width: "40%" }}>
                              {loadStatus(row.status)}
                            </Typography>
                          </Grid> */}
                        </CardContent>
                      </Card>
                    </Grid>
                    <Divider />
                  </React.Fragment>
                ))}
                {rows.length === 0 && (
                  <NoDataFound
                    message={"No Disbursement Record Found."}
                    imageStyle={{
                      marginTop: window.innerHeight < 1000 ? "20px" : "20%",
                    }}
                  />
                )}
              </Box>
            </Grid>
          </React.Fragment>
        )}

        <Dialog open={Dialogopen} onClose={handleDialogClose}>
          <DialogTitle>
            <h4>Create Parameter</h4>
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <CustomTextField
                  type="text"
                  label="Parameter Name"
                  variant="standard"
                  value={paraMeterName}
                  disabled={disabled}
                  onChange={(e) => {
                    setParamMeterName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomDropDown
                  label="Parameter Data Type"
                  variant="standard"
                  disabled={disabled}
                  value={paramDataType}
                  dropDownValue={[
                    { key: 0, value: "Varchar", text: "Varchar" },
                    { key: 1, value: "Int", text: "Int" },
                    { key: 2, value: "BigInt", text: "BigInt" },
                    { key: 3, value: "Float", text: "Float" },
                  ]}
                  onChange={(e) => {
                    setparamDataType(e.target.value);
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <CustomDateField
                  value={startDate}
                  label="Effective Start Date"
                  variant="standard"
                  disabled={disabled}
                  onChange={(event) => {
                    setstartDate(
                      event.$M + 1 + "/" + event.$D + "/" + event.$y
                    );
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomDateField
                  value={endDate}
                  label="Effective End Date"
                  variant="standard"
                  disabled={disabled}
                  onChange={(event) => {
                    setEndDate(event.$M + 1 + "/" + event.$D + "/" + event.$y);
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomTextField
                  value={ParamValue}
                  label="Parameter Value"
                  variant="standard"
                  disabled={disabled}
                  onChange={(e) => {
                    setParamValue(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              sx={{
                marginLeft: "1rem",
                color: "white",
                backgroundColor: "black",
              }}
              onMouseOver={({ target }) => {
                target.style.backgroundColor = "black";
                target.style.color = "white";
              }}
              variant="contained"
              onClick={handleDialogClose}
            >
              Cancel
            </Button>

            <Button variant="contained" onClick={DialogOkHandler}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Box>
        <StlapFooter />
      </Box>
    </>
  );
};

export default ParameterMaintenance;
