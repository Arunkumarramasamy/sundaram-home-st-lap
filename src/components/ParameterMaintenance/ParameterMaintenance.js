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
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
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
  const [rows, setRows] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/parameter/getAllParameterData"
      );
      console.log(response.data);
      const data = response.data.map((data) => {
        return { ...data, id: data.paramId };
      });
      setRows(data);
      setTotalRowsCount(rows.length);
      setParamId("");
    } catch {
      console.log("Network Error");
    }
  };
  useEffect(() => {
    getData();
    // const rows = [
    //   {
    //     id: "1",
    //     parameterName: "Minimum Disbursement Amount",
    //     parameterDatatype: "Int",
    //     parameterValue: 100000,
    //     effectiveStartDate: "01/01/2021",
    //     effectiveEndDate: "10/06/2022",
    //   },

    //   {
    //     id: "2",
    //     parameterName: "Maximum Allowable Cash Receipt",
    //     parameterDatatype: "BigInt",
    //     parameterValue: 10000,
    //     effectiveStartDate: "10/11/2021",
    //     effectiveEndDate: "12/03/2022",
    //   },
    // ];
  }, []);

  const columns = [
    {
      field: "action",
      headerName: "",
      headerAlign: "center",
      align: "center",
      width: 50,
      hideable: false,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        return (
          <MoreAction
            params={params.row}
            viewClickHandler={viewClickHandler}
            modifyClickHandler={modifyClickHandler}
          />
        );
      },
    },
    {
      field: "paramName",
      headerName: "Parameter Name",
      editable: "true",
      headerAlign: "center",
      align: "center",
      width: 350,
    },
    {
      field: "paramDataType",
      headerName: "Parameter Data Type",
      headerAlign: "center",
      align: "center",
      width: 160,
    },
    {
      field: "paramValue",
      headerName: "Parameter Value",
      headerAlign: "center",
      align: "center",
      width: 160,
      renderCell: (params) => {
        if (params.row.paramDataType !== "Varchar") {
          return parseInt(params.value).toLocaleString("en-IN");
        } else {
          return params.value;
        }
      },
    },
    {
      field: "paramEffStartDt",
      headerName: "Effective Start Date",
      headerAlign: "center",
      align: "center",
      width: 160,
    },
    {
      field: "paramEffEndDt",
      headerName: "Effective End Date",
      headerAlign: "center",
      align: "center",
      width: 160,
    },
  ];
  //ROw count
  const rowsPerPage = 10;

  const [totalRowsCount, setTotalRowsCount] = useState(0);
  /** Getting Current date */
  var today = new Date();
  var todayDate =
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
  /**Disabled State */
  const [disabled, setdisabled] = useState(false);
  const [mode, setMode] = useState("0");
  /**Parameter Values */
  const [paramaId, setParamId] = useState("");
  const [paraMeterName, setParamMeterName] = useState("");
  const [paramDataType, setparamDataType] = useState("");
  const [startDate, setstartDate] = useState(todayDate);
  const [endDate, setEndDate] = useState(todayDate);
  const [ParamValue, setParamValue] = useState("");
  // view cancel Button Handler
  const [showOkCancel, setShowOkCancel] = useState(false);
  /**Modify Click Handler */
  const viewClickHandler = (values) => {
    setShowOkCancel(true);
    setdisabled(true);
    handleClickDialogOpen();
    console.log(values);
    setParamMeterName(values.paramName);
    setparamDataType(values.paramDataType);
    setstartDate(values.paramEffStartDt);
    setEndDate(values.paramEffEndDt);
    if (values.paramDataType !== "Varchar") {
      setParamValue(parseInt(values.paramValue).toLocaleString("en-IN"));
    } else {
      setParamValue(values.paramValue);
    }
  };
  const modifyClickHandler = (values) => {
    setCheckObj((pre) => {
      return {
        ...pre,
        paramName: values.paramName,
        paramType: values.paramDataType,
        paramValu: values.paramValue,
        effStartDate: values.paramEffStartDt,
        effEndDate: values.paramEffEndDt,
      };
    });
    setShowOkCancel(false);
    setOkButtonHandler(true);
    setdisabled(false);
    handleClickDialogOpen();
    console.log(values);
    setParamId(values.paramId);
    setParamMeterName(values.paramName);
    setparamDataType(values.paramDataType);
    setstartDate(values.paramEffStartDt);
    setEndDate(values.paramEffEndDt);
    if (values.paramDataType !== "Varchar") {
      setParamValue(parseInt(values.paramValue).toLocaleString("en-IN"));
    } else {
      setParamValue(values.paramValue);
    }
    console.log(check);
  };
  /**Dialog Click Handler */
  const DialogOkHandler = () => {
    // setdisabled(true);

    console.log(mode);

    //if save click happen
    if (paramNameIsValid && paramTypeIsValid && paramValueIsValid) {
      if (
        check.paramName == paraMeterName &&
        check.paramType == paramDataType &&
        check.paramValu == ParamValue &&
        check.effStartDate == startDate &&
        check.effEndDate == endDate
      ) {
        setState((pre) => {
          return { ...pre, vertical: "top", horizontal: "center" };
        });
        setAlertType("error");
        setMessage("No changes Made");
        openAlertHandler();
      } else {
        SendData();
        setDialogOpen(false);
        ResetTouchHandler(false);
      }
    } else {
      ResetTouchHandler(true);
      return;
    }
  };
  const SendData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/parameter/insertOrUpdate",
        {
          paramDataType: paramDataType,
          paramEffStartDt: new Date(startDate),
          paramEffEndDt: new Date(endDate),
          paramName: paraMeterName,
          paramValue: ParamValue.replaceAll(",", ""),
          paramId: paramaId,
        }
      );
      console.log(response.data);
      getData();
      setParamId("");
      if (paramaId == "") {
        setMessage("Record added Successfully");
        openAlertHandler();
      } else {
        setMessage("Record Updated Successfully");
        openAlertHandler();
      }

      Reset();
      // let data = response.data;
      // const newRow = { ...data, id: data.paramId };

      // let existrows = [...rows];
      // existrows.push(newRow);
      // // setRows((oldArray) => [...oldArray, newElement]);
      // setRows([...existrows]);
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
    Reset();
    ResetTouchHandler(false);
  };
  const addBtnHandler = () => {
    setMode(0);
    setOkButtonHandler(false);
    Reset();
    setdisabled(false);
    setDialogOpen(true);
    setShowOkCancel(false);
  };
  /**Reset All values */
  const Reset = () => {
    setParamId("");
    setParamMeterName("");
    setparamDataType("");
    setstartDate(todayDate);
    setEndDate(todayDate);
    setParamValue("");
  };
  /**Validation Handlers */
  /**Valid Handler */
  const paramNameIsValid =
    paraMeterName.trim() !== "" && paraMeterName.trim().length < 50;
  const paramTypeIsValid = paramDataType.trim() !== "";
  let paramValueIsValid;
  if (paramDataType === "Varchar") {
    paramValueIsValid = ParamValue.trim() !== "";
  } else {
    paramValueIsValid = ParamValue.length !== 0 && ParamValue.length < 50;
  }
  /**Touch State Handlers */
  const [paramNameTouched, setParamNameTouched] = useState(false);
  const [paramTypeTouched, setParamTypeTouched] = useState(false);
  const [startDateTouched, setStartDateTouched] = useState(false);
  const [endDateTouched, setEndDateTouched] = useState(false);
  const [paramValueTouched, setParamValueTouched] = useState(false);

  const ResetTouchHandler = (value) => {
    setParamNameTouched(value);
    setParamTypeTouched(value);
    setStartDateTouched(value);
    setEndDateTouched(value);
    setParamValueTouched(value);
  };
  /**Has Error */
  const paramNameHasError = paramNameTouched && !paramNameIsValid;
  const paramTypeHasError = paramTypeTouched && !paramTypeIsValid;
  const paramValueHasError = paramValueTouched && !paramValueIsValid;

  //SnackBar Handler
  const [message, setMessage] = useState("");
  const [alertType, setAlertType] = useState("success");
  const [state, setState] = React.useState({
    open: false,
    vertical: "bottom",
    horizontal: "left",
  });
  const { vertical, horizontal, open } = state;
  const [alert, setAlert] = useState(false);

  const openAlertHandler = () => {
    setAlert(true);
  };
  const closeAlertHandler = () => {
    setAlert(false);
  };
  /**Checking value Changes */
  const [check, setCheckObj] = useState({
    paramName: "",
    paramType: "",
    paramValu: "",
    effStartDate: "",
    effEndDate: "",
  });
  /**Ok Button Handler */
  const [OkButtonHandler, setOkButtonHandler] = useState(false);
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
          <Button
            sx={{ fontWeight: "bold" }}
            variant="contained"
            onClick={addBtnHandler}
          >
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
                                    modifyClickHandler={modifyClickHandler}
                                  />
                                }
                              </React.Fragment>
                            }
                            subheader={"Parameter Name : " + row.paramName}
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
                            direction="column"
                            alignItems="flex-start"
                            justifyContent="flex-start"
                          >
                            <Typography padding="1px">
                              {"Paramete Data Type : " + row.paramDataType}
                            </Typography>
                            <Typography padding="1px">
                              {" Effective Start Date : " + row.paramEffStartDt}
                            </Typography>
                            <Typography padding="1px">
                              {"Effective End Date : " + row.paramEffEndDt}
                            </Typography>
                            <Typography padding="1px">
                              {`Parameter Value :   ${
                                row.paramDataType === "Varchar"
                                  ? row.paramValue
                                  : parseInt(row.paramValue).toLocaleString(
                                      "en-IN"
                                    )
                              }`}
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
                    setOkButtonHandler(false);
                    setParamMeterName(e.target.value);
                  }}
                  onBlur={(e) => {
                    setParamNameTouched(true);
                  }}
                />
                {paramNameHasError && (
                  <p className="error">Please Enter valid Parameter Name </p>
                )}
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
                    setOkButtonHandler(false);
                    setparamDataType(e.target.value);
                    setParamValue("");
                  }}
                  onBlur={(e) => {
                    setParamTypeTouched(true);
                  }}
                />
                {paramTypeHasError && (
                  <p className="error">Please Enter valid Parameter Type </p>
                )}
              </Grid>

              <Grid item xs={12} md={6}>
                <CustomDateField
                  value={startDate}
                  disableFuture={false}
                  disablePast={true}
                  label="Effective Start Date"
                  variant="standard"
                  disabled={disabled}
                  onChange={(event) => {
                    setOkButtonHandler(false);
                    setstartDate(
                      event.$M + 1 + "/" + event.$D + "/" + event.$y
                    );
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomDateField
                  value={endDate}
                  disableFuture={false}
                  disablePast={true}
                  label="Effective End Date"
                  variant="standard"
                  disabled={disabled}
                  onChange={(event) => {
                    setOkButtonHandler(false);
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
                    setOkButtonHandler(false);
                    if (paramDataType === "Varchar") {
                      let val = e.target.value.replace(/[0-9]/g, "");
                      setParamValue(val);
                    } else {
                      let Value = e.target.value.replace(/\D/g, "");
                      if (Value === "") {
                        setParamValue(Value);
                      } else {
                        setParamValue(
                          parseInt(Value.replaceAll(",", "")).toLocaleString(
                            "en-IN"
                          )
                        );
                      }
                    }
                  }}
                  onBlur={(e) => {
                    setParamValueTouched(true);
                  }}
                />
                {paramValueHasError && (
                  <p className="error">Please Enter valid Parameter Value </p>
                )}
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            {showOkCancel ? (
              <Button
                sx={{ fontWeight: "bold" }}
                variant="contained"
                onClick={() => {
                  setDialogOpen(false);
                }}
              >
                OK
              </Button>
            ) : (
              <>
                <Button
                  sx={{
                    marginLeft: "1rem",
                    color: "white",
                    backgroundColor: "black",
                    fontWeight: "bold",
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

                <Button
                  sx={{ fontWeight: "bold" }}
                  variant="contained"
                  onClick={DialogOkHandler}
                  disabled={OkButtonHandler}
                >
                  OK
                </Button>
              </>
            )}
          </DialogActions>
        </Dialog>
      </Box>
      <Box>
        <StlapFooter />
      </Box>
      <Snackbar
        open={alert}
        autoHideDuration={6000}
        anchorOrigin={{ vertical, horizontal }}
        onClose={closeAlertHandler}
      >
        <Alert
          onClose={closeAlertHandler}
          severity={alertType}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ParameterMaintenance;
