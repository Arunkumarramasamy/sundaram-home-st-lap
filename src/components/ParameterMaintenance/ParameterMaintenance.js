import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CustomTextField from "../CustomComponents/CustomTextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Tooltip from "@mui/material/Tooltip";
import SaveIcon from "@mui/icons-material/Save";
import Mask from "./Mask";
const ParameterMaintenance = () => {
  useEffect(() => {
    // setminimumDisbursementAmount(99999);
    // setPaymentMode("RTGS");
    // setallowableCash(100000);
    // setstaleDays(10);
  }, []);

  /** Button Handler */
  const [editButton, setEditButton] = useState(true);
  const [saveButton, setSaveButton] = useState(false);
  const [disabled, setDisabled] = useState(true);

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
  const staleDaysIsValid = staleDays.length !== 0 && staleDays !== "0";

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

  /** Save Button Handler */
  const saveButtonHandler = () => {
    setSaveButton(false);
    setEditButton(true);
  };

  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "white",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: "#004a92", fontWeight: 500 }}
      >
        Parameter Maintenance
      </Typography>
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
              let value = event.target.value.replace(/\D/g, "");
              setminimumDisbursementAmount(
                Number(value.replaceAll(",", "")).toLocaleString("en-IN")
              );
            }}
            onBlur={() => {
              setminimumDisbursementAmountTouched(true);
            }}
            label="Minimum disbursement Amount"
            variant="standard"
            disabled={disabled}
            value={minimumDisbursementAmount}
            error={minimumDisbursementAmountHasError}
          />
          {minimumDisbursementAmountHasError && (
            <p className="error">
              Please Enter Minimum valid disbursement Amount{" "}
            </p>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
          <CustomTextField
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
          />
          {paymentModeTouchedhasError && (
            <p className="error">Please Enter valid Payment Mode</p>
          )}
        </Grid>

        <Grid xs={0} sm={0} md={0} lg={4} xl={3}></Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
          <CustomTextField
            onChange={(event) => {
              let value = event.target.value.replace(/\D/g, "");
              setallowableCash(
                Number(value.replaceAll(",", "")).toLocaleString("en-IN")
              );
            }}
            onBlur={() => {
              setallowableCashTouched(true);
            }}
            label="Maximum allowable Cash Receipt"
            variant="standard"
            disabled={disabled}
            value={allowableCash}
            error={allowableCashHasError}
          />
          {allowableCashHasError && (
            <p className="error">
              Please Enter valid Maximum allowable Cash Receipt
            </p>
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
            <p className="error">Please Enter valid Cheque Stale Days</p>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ParameterMaintenance;
