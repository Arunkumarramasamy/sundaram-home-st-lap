import React from "react";
import Box from "@mui/material/Box";
import "./ParameterMaintenance.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CustomTextField from "../CustomComponents/CustomTextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useEffect } from "react";
const ParameterMaintenance = () => {
  useEffect(() => {
    setminimumDisbursementAmount(99999);
    setPaymentMode("RTGS");
    setallowableCash(10);
    setstaleDays(10);
  }, []);
  const [editButton, setEditButton] = useState(true);
  const [saveButton, setSaveButton] = useState(false);
  const [disabled, setDisabled] = useState(true);

  /** Parameter Values */
  const [minimumDisbursementAmount, setminimumDisbursementAmount] =
    useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [allowableCash, setallowableCash] = useState("");
  const [staleDays, setstaleDays] = useState("");

  /** Edit Button Handler */
  const editButtonHandler = () => {
    setEditButton(false);
    setDisabled(false);
    setSaveButton(true);
  };
  /* *********************************************/

  /** Save Button Handler */
  const saveButtonHandler = () => {};
  /* *********************************************/

  const minimumDisbursementAmountChangeHandler = (event) => {
    console.log(event.target.value);
  };
  const minimumDisbursementAmountBlurHandler = (event) => {
    console.log(event.target.value);
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
        <Button
          variant="contained"
          onClick={editButtonHandler}
          sx={{ backgroundColor: "#004a92" }}
        >
          Edit
        </Button>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <CustomTextField
            onChange={minimumDisbursementAmountChangeHandler}
            onBlur={minimumDisbursementAmountBlurHandler}
            label="Minimum disbursement Amount"
            variant="standard"
            disabled={disabled}
            value={minimumDisbursementAmount}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <CustomTextField
            label="Payment Mode"
            variant="standard"
            disabled={disabled}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <CustomTextField
            label="Maximum allowable Cash Receipt per customer"
            variant="standard"
            disabled={disabled}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <CustomTextField
            label="Cheque Stale Days"
            variant="standard"
            disabled={disabled}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          marginTop: "25px",
          marginBottom: "2px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button variant="contained" sx={{ backgroundColor: "#004a92" }}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default ParameterMaintenance;
