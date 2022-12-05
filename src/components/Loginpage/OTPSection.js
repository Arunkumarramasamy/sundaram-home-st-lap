import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";
import { useEffect } from "react";
import "./MobileLogin.css";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";

const OTPSection = () => {
  const [otpValue, setOtpValue] = useState("");
  const [otpValueIsTouched, setOtpValueIsTouched] = useState(false);
  const otpValueIsValid = otpValue.trim().length === 6;
  const otpValueHasError = otpValueIsTouched && !otpValueIsValid;

  const [resendState, setResendState] = useState(false);
  const [verifyState, setVerifyState] = useState(true);
  const [seconds, setSeconds] = useState(10);
  var timer;

  useEffect(() => {
    timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        setOtpValueIsTouched(false);
        setResendState(true);
        setVerifyState(false);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });
  const OtpChangeHandler = (event) => {
    setOtpValue(event.target.value);
  };
  const OtpTouchHandler = () => {
    setOtpValueIsTouched(true);
  };
  const resendOTPHadler = () => {
    setOtpValueIsTouched(false);
    setSeconds(10);
    setVerifyState(true);
    setResendState(false);
  };
  const VerifyHandler = () => {
    setOtpValueIsTouched(true);
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
                Enter OTP
              </InputLabel>
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={otpValueHasError ? true : false}
                onChange={OtpChangeHandler}
                onBlur={OtpTouchHandler}
                autoFocus
                placeholder="Enter 6 digit OTP"
                sx={{
                  boxShadow: "0 2px 5px 0 rgb(113 113 113 / 24%)",
                  border: "none",
                }}
                size="small"
                id="outlined-basic"
                variant="outlined"
              />
              {otpValueHasError && (
                <p className="error">Please Enter 6 digit OTP </p>
              )}
              <p className="otp">
                Resend OTP in <span className="timer">00:{seconds}s</span>
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          disabled={!resendState}
          variant="contained"
          sx={{ backgroundColor: "#004a92" }}
          onClick={resendOTPHadler}
        >
          Resend OTP
        </Button>
        <Button
          onClick={VerifyHandler}
          disabled={!verifyState}
          variant="contained"
          sx={{ backgroundColor: "#004a92" }}
        >
          Verify
        </Button>
      </Box>
    </Box>
  );
};

export default OTPSection;
