import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CustomTextField from "../CustomComponents/CustomTextField";
import { useState } from "react";
import { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Tooltip from "@mui/material/Tooltip";
import SaveIcon from "@mui/icons-material/Save";
import { Skeleton } from "@mui/material";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import CustomDropDown from "../CustomComponents/CustomDropDown";
const ParameterMaintenance = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/parameter/getParameterById",
          {
            parameterId: 1,
          }
        );
        console.log(response);
        if (response.status === 200) {
          setminimumDisbursementAmount(
            response.data.minimumDisbursementAmount.toLocaleString("en-IN")
          );
          setPaymentMode(response.data.paymentMode);
          setallowableCash(
            response.data.maximumAllowableCashReceipt.toLocaleString("en-IN")
          );
          setstaleDays(response.data.chequeStaleDays);
          console.log(response.data);
        }
      } catch {
        setErrorMessage("Network Error");
        openAlertHandler();
      }
    };
    getData();
  }, []);

  /** Button Handler */
  const [editButton, setEditButton] = useState(true);
  const [saveButton, setSaveButton] = useState(false);
  const [disabled, setDisabled] = useState(true);

  /**Skeleton State */
  const [skeletonState, setskeletonState] = useState(false);

  /** Parameter Values state*/
  const [minimumDisbursementAmount, setminimumDisbursementAmount] =
    useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [allowableCash, setallowableCash] = useState("");
  const [staleDays, setstaleDays] = useState("");

  /** Touch state*/
  const [
    minimumDisbursementAmountTouched,
    setminimumDisbursementAmountTouched,
  ] = useState(false);
  const [paymentModeTouched, setPaymentModeTouched] = useState(false);
  const [allowableCashTouched, setallowableCashTouched] = useState(false);
  const [staleDaysTouched, setstaleDaysTouched] = useState(false);

  /** Input valid Handler */
  const minimumDisbursementAmountIsValid =
    minimumDisbursementAmount.length !== 0 && minimumDisbursementAmount !== "0";
  const paymentModeIsValid = paymentMode.trim() !== "";
  const allowableCashIsValid =
    allowableCash.length !== 0 && allowableCash !== "0";
  const staleDaysIsValid =
    staleDays.length !== 0 && staleDays !== "0" && staleDays >= "0";

  /** Has Error */
  const minimumDisbursementAmountHasError =
    minimumDisbursementAmountTouched && !minimumDisbursementAmountIsValid;
  const paymentModeTouchedhasError = paymentModeTouched && !paymentModeIsValid;
  const allowableCashHasError = allowableCashTouched && !allowableCashIsValid;
  const staleDaysTouchedHasError = staleDaysTouched && !staleDaysIsValid;

  /** Edit Button Handler */
  const editButtonHandler = () => {
    setEditButton(false);
    setDisabled(false);
    setSaveButton(true);
  };

  /**Alert Handler state and methods */
  const [alert, setAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const openAlertHandler = () => {
    setAlert(true);
  };
  const closeAlertHandler = () => {
    setAlert(false);
  };
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  /** Save Button Handler */
  const saveButtonHandler = () => {
    console.log(
      typeof minimumDisbursementAmount,
      typeof paymentMode,
      typeof allowableCash,
      typeof staleDays
    );
  };

  return (
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
          marginBottom: "2px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Tooltip title="Edit">
          <span>
            <IconButton
              aria-label="edit"
              color="primary"
              disabled={!editButton}
              onClick={editButtonHandler}
            >
              <ModeEditIcon />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title="Save">
          <span>
            <IconButton
              aria-label="save"
              color="primary"
              disabled={!saveButton}
              onClick={saveButtonHandler}
            >
              <SaveIcon />
            </IconButton>
          </span>
        </Tooltip>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
          <CustomTextField
            type="text"
            onChange={(event) => {
              let Value = event.target.value.replace(/\D/g, "");
              if (Value === "") {
                setminimumDisbursementAmount(Value);
              } else {
                setminimumDisbursementAmount(
                  parseInt(Value.replaceAll(",", "")).toLocaleString("en-IN")
                );
              }
            }}
            onBlur={() => {
              setminimumDisbursementAmountTouched(true);
            }}
            label="Minimum Disbursement Amount"
            variant="standard"
            disabled={disabled}
            value={minimumDisbursementAmount}
            error={minimumDisbursementAmountHasError}
          />
          {minimumDisbursementAmountHasError && (
            <p className="error">Please Enter valid disbursement Amount </p>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
          {/* <CustomTextField
            type="text"
            onChange={(event) => {
              setPaymentMode(event.target.value);
            }}
            onBlur={() => {
              setPaymentModeTouched(true);
            }}
            label="Payment Mode"
            variant="standard"
            disabled={disabled}
            value={paymentMode}
            error={paymentModeTouchedhasError}
          /> */}
          <CustomDropDown
            label="Payment Mode"
            variant="standard"
            type="text"
            error={paymentModeTouchedhasError}
            disabled={disabled}
            defaultValue={"RTGS"}
            dropDownValue={[
              { value: "RTGS", text: "RTGS", key: "1" },
              { value: "NEFT ", text: "NEFT ", key: "2" },
            ]}
            value={paymentMode}
            onChange={(event) => {
              setPaymentMode(event.target.value);
            }}
            onBlur={() => {
              setPaymentModeTouched(true);
            }}
          />
          {paymentModeTouchedhasError && (
            <p className="error">Please Enter valid Payment Mode</p>
          )}
        </Grid>

        <Grid xs={0} sm={0} md={0} lg={4} xl={3}></Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
          <CustomTextField
            onChange={(event) => {
              let Value = event.target.value.replace(/\D/g, "");
              if (Value === "") {
                setallowableCash(Value);
              } else {
                setallowableCash(
                  parseInt(Value.replaceAll(",", "")).toLocaleString("en-IN")
                );
              }
            }}
            onBlur={() => {
              setallowableCashTouched(true);
            }}
            label="Maximum Allowable Cash Receipt"
            variant="standard"
            disabled={disabled}
            value={allowableCash}
            error={allowableCashHasError}
          />
          {allowableCashHasError && (
            <p className="error">Please Enter valid Cash Receipt</p>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
          <CustomTextField
            type="number"
            onChange={(e) => {
              setstaleDays(e.target.value);
            }}
            onBlur={() => {
              setstaleDaysTouched(true);
            }}
            label="Cheque Stale Days"
            variant="standard"
            disabled={disabled}
            value={staleDays}
            error={staleDaysTouchedHasError}
          />
          {staleDaysTouchedHasError && (
            <p className="error">Please Enter valid Stale Days</p>
          )}
        </Grid>
      </Grid>
      <Snackbar
        open={alert}
        autoHideDuration={6000}
        anchorOrigin={{ vertical, horizontal }}
        onClose={closeAlertHandler}
      >
        <Alert
          onClose={closeAlertHandler}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ParameterMaintenance;
