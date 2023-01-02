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
import dayjs from "dayjs";

const ParameterMaintenance = () => {
  const [rows, setRows] = useState([]);
  const [dateValue, setDateValue] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
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
      setTotalRowsCount(data.length);
      setParamId("");
    } catch {
      setState((pre) => {
        return { ...pre, vertical: "top", horizontal: "center" };
      });
      setAlertType("error");
      setMessage("Unable to Fetch the data");
      openAlertHandler();
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
        if (params.row.paramDataType === "Int") {
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
  const [columnsData, setColumns] = useState(columns);
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
  const [startDate, setstartDate] = useState(dayjs(todayDate));
  const [endDate, setEndDate] = useState(dayjs(todayDate));
  const [ParamValue, setParamValue] = useState("");
  // view cancel Button Handler
  const [showOkCancel, setShowOkCancel] = useState(false);
  /**Modify Click Handler */
  const setValues = (values) => {
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
  };
  const resetChecker = () => {
    setCheckObj((pre) => {
      return {
        ...pre,
        paramName: "",
        paramType: "",
        paramValu: "",
        effStartDate: new Date(today).toLocaleDateString(),
        effEndDate: new Date(today).toLocaleDateString(),
      };
    });
  };
  const viewClickHandler = (values) => {
    setDialogTitle("View Parameter");
    setValues(values);
    setShowOkCancel(true);
    setdisabled(true);
    handleClickDialogOpen();
    console.log(values);
    setParamMeterName(values.paramName);
    setparamDataType(values.paramDataType);
    setstartDate(values.paramEffStartDt);
    setEndDate(values.paramEffEndDt);
    if (values.paramDataType === "Int") {
      setParamValue(parseInt(values.paramValue).toLocaleString("en-IN"));
    } else {
      setParamValue(values.paramValue);
    }
  };
  const modifyClickHandler = (values) => {
    setDialogTitle("Modify Parameter");
    setValues(values);
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
    if (values.paramDataType === "Int") {
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
      const val =
        check.paramName == paraMeterName &&
        check.paramType == paramDataType &&
        check.effStartDate === startDate &&
        check.effEndDate === endDate &&
        (check.paramType === "Varchar" || check.paramType === "Date"
          ? check.paramValu == ParamValue
          : check.paramValu == ParamValue.replaceAll(",", ""));
      if (val) {
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
        setState((pre) => {
          return { ...pre, vertical: "bottom", horizontal: "left" };
        });
        setAlertType("success");
        setMessage("Record added Successfully");
        openAlertHandler();
      } else {
        setState((pre) => {
          return { ...pre, vertical: "bottom", horizontal: "left" };
        });
        setAlertType("success");
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
      setState((pre) => {
        return { ...pre, vertical: "top", horizontal: "center" };
      });
      setAlertType("error");
      if (paramaId == "") {
        setMessage("Unable to Perform add operation");
        openAlertHandler();
      } else {
        setMessage("Unable to Perform Update operation");
        openAlertHandler();
      }
    }
  };
  /** Show Dialog Handlers */
  const [Dialogopen, setDialogOpen] = React.useState(false);
  const handleClickDialogOpen = () => {
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    if (
      check.paramName == paraMeterName &&
      check.paramType == paramDataType &&
      check.effStartDate == startDate &&
      check.effEndDate == endDate &&
      (check.paramType === "Varchar" || check.paramType === "Date"
        ? check.paramValu == ParamValue
        : check.paramValu == ParamValue.replaceAll(",", ""))
    ) {
      setdisabled(true);
      setDialogOpen(false);
      Reset();
      ResetTouchHandler(false);
      resetChecker();
    } else {
      cancelHandleClickOpen();
    }
  };
  const addBtnHandler = () => {
    setDialogTitle("Create Parameter");
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
  if (paramDataType === "Varchar" || paramDataType === "Date") {
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
    effStartDate: new Date(today).toLocaleDateString(),
    effEndDate: new Date(today).toLocaleDateString(),
  });
  /**Ok Button Handler */
  const [OkButtonHandler, setOkButtonHandler] = useState(false);
  /**Discard Changes */
  const [cancelOpen, cancelSetOpen] = React.useState(false);
  const cancelHandleClickOpen = () => {
    cancelSetOpen(true);
  };

  const cancelHandleClose = () => {
    cancelSetOpen(false);
  };
  const cancelDialogOkButtonHandler = () => {
    resetChecker();
    cancelSetOpen(false);
    setdisabled(true);
    setDialogOpen(false);
    Reset();
    ResetTouchHandler(false);
  };
  return (
    <>
      <Box
        sx={{
          padding: "20px",
          backgroundColor: "white",
        }}
      >
        <h4>Parameter Maintenance</h4>
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
              columns={columnsData}
              pageSize={5}
              pageSizeOptions={[5, 10, 15, 20, 25]}
            />
          </Box>
        )}
        {useMediaQuery("(max-width:1200px)") && (
          <>
            <Box
              display="flex"
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
            </Box>
            <Box
              sx={{
                height: window.innerHeight - 300,
                overflow: "auto",
                flex: "1 auto",
              }}
            >
              <Grid container>
                {rows.map((row, index) => {
                  return (
                    <Grid item xs={12} md={6}>
                      <Card>
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

                        <CardContent>
                          <Grid container>
                            <Grid item xs={7} md={5}>
                              Paramete Data Type
                            </Grid>
                            <Grid item xs={5} md={7}>
                              {`: ${row.paramDataType}`}
                            </Grid>

                            <Grid item xs={7} md={5}>
                              Effective Start Date
                            </Grid>
                            <Grid item xs={5} md={7}>
                              {`: ${row.paramEffStartDt}`}
                            </Grid>

                            <Grid item xs={7} md={5}>
                              Effective End Date
                            </Grid>
                            <Grid item xs={5} md={7}>
                              {`: ${row.paramEffEndDt}`}
                            </Grid>

                            <Grid item xs={7} md={5}>
                              Parameter Value
                            </Grid>
                            <Grid item xs={5} md={7}>
                              {`: ${row.paramValue}`}
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

        <Dialog open={Dialogopen} onClose={handleDialogClose}>
          <DialogTitle>
            <h4>{dialogTitle}</h4>
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <CustomTextField
                  type="text"
                  label="Parameter Name"
                  variant="standard"
                  value={paraMeterName}
                  error={paramNameHasError}
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
                  error={paramTypeHasError}
                  dropDownValue={[
                    { key: 0, value: "Varchar", text: "Varchar" },
                    { key: 1, value: "Int", text: "Int" },
                    { key: 2, value: "Date", text: "Date" },
                  ]}
                  onChange={(e) => {
                    if (e.target.value === "Date") {
                      setDateValue(true);
                    } else {
                      setDateValue(false);
                    }
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
                  onChange={(newValue) => {
                    setOkButtonHandler(false);
                    console.log(newValue);
                    setstartDate(newValue);
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
                  onChange={(newValue) => {
                    setOkButtonHandler(false);
                    setEndDate(newValue);
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                {dateValue && (
                  <CustomDateField
                    disableFuture={false}
                    disablePast={true}
                    label="Date"
                    variant="standard"
                    disabled={disabled}
                  />
                )}
                {!dateValue && (
                  <CustomTextField
                    value={ParamValue}
                    label="Parameter Value"
                    variant="standard"
                    disabled={disabled}
                    error={paramValueHasError}
                    onChange={(e) => {
                      setOkButtonHandler(false);
                      if (paramDataType === "Varchar") {
                        let val = e.target.value.replace(/[0-9]/g, "");
                        setParamValue(val);
                      } else if (paramDataType === "Date") {
                        setParamValue(e.target.value);
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
                )}

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
      <Dialog
        open={cancelOpen}
        onClose={cancelHandleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are You Sure want to discard the Changes ?
        </DialogTitle>

        <DialogActions>
          <Button onClick={cancelHandleClose} autoFocus>
            Cancel
          </Button>
          <Button onClick={cancelDialogOkButtonHandler}>Yes</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ParameterMaintenance;
