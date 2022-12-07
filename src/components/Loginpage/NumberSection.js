import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import { useDispatch } from "react-redux";
import "./MobileLogin.css";
import { MobileLoginAction } from "../Store/MobileLogin";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
const NumberSection = () => {
  // Alert Content
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const [alert, setAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const openAlertHandler = () => {
    setAlert(true);
  };
  const closeAlertHandler = () => {
    setAlert(false);
  };
  //Success Alert

  // const [Salert, SsetAlert] = useState(false);
  // const [SMessage, setSMessage] = useState("");
  // const openSAlertHandler = () => {
  //   SsetAlert(true);
  // };
  // const closeSAlertHandler = () => {
  //   SsetAlert(false);
  // };

  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberIsTouched, setPhoneNumberIsTouched] = useState(false);
  const phoneNumberISValid = phoneNumber.trim().length == 10;
  const phoneNumberError = phoneNumberIsTouched && !phoneNumberISValid;
  const phoneNumberChangeHandler = (event) => {
    setPhoneNumber(event.target.value);
  };
  const phoneNumberTouchHandler = () => {
    setPhoneNumberIsTouched(true);
  };

  const getOTP = () => {
    setPhoneNumberIsTouched(true);
    if (phoneNumberISValid) {
      dispatch(MobileLoginAction.updateMobileNumber(phoneNumber));
      getOTPData();
    }
  };
  const getOTPData = async () => {
    try {
      const response = await axios.post("http://localhost:8080/generateOtp", {
        employeeId: phoneNumber,
        password: "",
      });
      console.log(response);
      // setSMessage(response.data);
      // openSAlertHandler();
      dispatch(MobileLoginAction.updateNumberSection(false));
      dispatch(MobileLoginAction.updateOTPSection(true));
    } catch (e) {
      console.log(e);
      if (e.code === "ERR_NETWORK" || e.code === "ERR_BAD_RESPONSE") {
        setErrorMessage("Network Error");
      } else {
        setErrorMessage(e.response.data);
      }
      openAlertHandler();
    }
  };

  // Enter key Handler
  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      getOTP();
    }
  };
  return (
    <Box>
      <Grid container spacing={1} sx={{ marginTop: "1.5rem" }}>
        <Grid item xs={12}>
          <Grid container spacing={1} sx={{ alignItems: "center" }}>
            <Grid item xs={12}>
              <InputLabel
                sx={{ color: "#004a92", fontWeight: 550, fontSize: "14px" }}
              >
                Registered Mobile Number
              </InputLabel>
            </Grid>
            <Grid item xs={12}>
              <TextField
                placeholder="Enter Mobile Number"
                autoFocus
                error={phoneNumberError ? true : false}
                onChange={phoneNumberChangeHandler}
                onBlur={phoneNumberTouchHandler}
                onKeyDown={handleKeypress}
                sx={{
                  boxShadow: "0 2px 5px 0 rgb(113 113 113 / 24%)",
                  border: "none",
                }}
                size="small"
                id="outlined-basic"
                variant="outlined"
              />
              {phoneNumberError && (
                <p className="error">Please Enter 10 digit Number </p>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="contained"
          onClick={getOTP}
          sx={{ backgroundColor: "#004a92" }}
        >
          Get OTP
        </Button>
      </Box>
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
      {/* <Snackbar
        open={Salert}
        autoHideDuration={6000}
        anchorOrigin={{ vertical, horizontal }}
        onClose={closeSAlertHandler}
      >
        <Alert
          onClose={closeSAlertHandler}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {SMessage}
        </Alert>
      </Snackbar> */}
    </Box>
  );
};

export default NumberSection;
