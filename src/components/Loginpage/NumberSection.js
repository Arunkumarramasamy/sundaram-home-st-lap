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
const NumberSection = () => {
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
      dispatch(MobileLoginAction.updateNumberSection(false));
      dispatch(MobileLoginAction.updateOTPSection(true));
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
    </Box>
  );
};

export default NumberSection;
