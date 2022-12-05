import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import LockIcon from "@mui/icons-material/Lock";
import { loginAction } from "../Store/LoginAuth";
import { MobileLoginAction } from "../Store/MobileLogin";
import Button from "@mui/material/Button";
import "./Idlogin.css";
import { useState } from "react";
import axios from "axios";
const Idlogin = () => {
  const dispatch = useDispatch();
  const navigateToMobileNumberLogin = () => {
    dispatch(loginAction.updateLogin(false));
    dispatch(loginAction.updateEmployeeIDScreen(false));
    dispatch(loginAction.updateMobileScreen(true));
    dispatch(MobileLoginAction.updateNumberSection(true));
    dispatch(MobileLoginAction.updateOTPSection(false));
  };
  const [employeeID, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [employeeIdIsTouched, setEmployeeIdIsTouched] = useState(false);
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);
  const nameValid = employeeID.trim() !== "";
  const passwordValid = password.trim() !== "";
  const nameHasError = employeeIdIsTouched && !nameValid;
  const passwordHasError = passwordIsTouched && !passwordValid;
  const onChangeEmployeeID = (event) => {
    setEmployeeId(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const SendData = async () => {
    try {
      const response = await axios.post("http://localhost:8080/authenticate", {
        employeeId: employeeID,
        password: password,
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  const loginHandler = () => {
    SendData();
    setPasswordIsTouched(true);
    if (nameValid && passwordValid) {
      console.log(employeeID, password);
    }
  };
  const employeeBlurHandler = () => {
    setEmployeeIdIsTouched(true);
  };
  const passwordBlurHandler = () => {
    setPasswordIsTouched(true);
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "1rem",
        boxShadow: "0 2px 5px 0 rgb(113 113 113 / 24%)",
        borderRadius: "1.4rem",
        height: "23rem",
        position: "relative",
      }}
    >
      <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <LockIcon sx={{ color: "#004a92" }} />
        <Typography variant="body" sx={{ color: "#004a92", fontWeight: 700 }}>
          Login to Sundaram Home
        </Typography>
      </Box>
      <Grid container spacing={1} sx={{ marginTop: "1.5rem" }}>
        <Grid item xs={12}>
          <Grid container spacing={1} sx={{ alignItems: "center" }}>
            <Grid item xs={12}>
              <InputLabel
                sx={{ color: "#004a92", fontWeight: 550, fontSize: "14px" }}
              >
                Employee ID
              </InputLabel>
            </Grid>
            <Grid item xs={12}>
              <TextField
                placeholder="Enter Employee ID"
                error={nameHasError ? true : false}
                value={employeeID}
                autoFocus
                onBlur={employeeBlurHandler}
                onChange={onChangeEmployeeID}
                sx={{
                  boxShadow: "0 2px 5px 0 rgb(113 113 113 / 24%)",
                  border: "none",
                }}
                size="small"
              />
              {nameHasError && (
                <p className="error">Please Enter Employee ID</p>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: "1.4rem" }}>
          <Grid container spacing={1} sx={{ alignItems: "center" }}>
            <Grid item xs={12}>
              <InputLabel
                sx={{ color: "#004a92", fontWeight: 550, fontSize: "14px" }}
              >
                Password
              </InputLabel>
            </Grid>
            <Grid item xs={12}>
              <TextField
                placeholder="Enter Password"
                error={passwordHasError ? true : false}
                value={password}
                onBlur={passwordBlurHandler}
                onChange={onChangePassword}
                sx={{
                  boxShadow: "0 2px 5px 0 rgb(113 113 113 / 24%)",
                  border: "none",
                }}
                size="small"
                id="outlined-basic"
                variant="outlined"
              />
              {passwordHasError && (
                <p className="error">Please Enter Password </p>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={loginHandler}
          variant="contained"
          sx={{ backgroundColor: "#004a92" }}
        >
          Login
        </Button>
      </Box>
      <Box className="login-info" sx={{ marginTop: "2rem" }}>
        <Link
          onClick={navigateToMobileNumberLogin}
          underline="none"
          sx={{
            cursor: "pointer",
            fontSize: "0.9rem",
            color: "#004a92",
            paddingTop: "0.2rem",
            fontWeight: 540,
          }}
        >
          Login with Mobile Number
        </Link>
      </Box>
    </Box>
  );
};

export default Idlogin;
