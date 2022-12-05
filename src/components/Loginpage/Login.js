import React from "react";
import LockIcon from "@mui/icons-material/Lock";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import { loginAction } from "../Store/LoginAuth";
import TextField from "@mui/material/TextField";
import "./Login.css";
const Login = () => {
  const dispatch = useDispatch();
  const navigateToID = () => {
    dispatch(loginAction.updateLogin(false));
    dispatch(loginAction.updateEmployeeIDScreen(true));
  };
  const navigateToMobileLogin = () => {
    dispatch(loginAction.updateLogin(false));
    dispatch(loginAction.updateEmployeeIDScreen(false));
    dispatch(loginAction.updateMobileScreen(true));
  };
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "1rem",
        boxShadow: "0 2px 5px 0 rgb(113 113 113 / 24%)",
        borderRadius: "1.4rem",
        height: "23rem",
      }}
    >
      <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <LockIcon sx={{ color: "#004a92" }} />
        <Typography variant="body" sx={{ color: "#004a92", fontWeight: 700 }}>
          Login to Sundaram Home
        </Typography>
      </Box>
      <Box sx={{ marginTop: "1.5rem" }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid container spacing={1} sx={{ alignItems: "center" }}>
              <Grid item xs={12}>
                <InputLabel sx={{ color: "#004a92", fontWeight: 550 }}>
                  Employee ID
                </InputLabel>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onClick={navigateToID}
                  sx={{
                    boxShadow: "0 2px 5px 0 rgb(113 113 113 / 24%)",
                    border: "none",
                  }}
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <ArrowRightAltSharpIcon sx={{ color: "#004a92" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <h2 className="partition-line">
          <p className="partition-circle">OR</p>
        </h2>
        <Grid container spacing={1} sx={{ marginBottom: "4rem" }}>
          <Grid item xs={12}>
            <Grid container spacing={1} sx={{ alignItems: "center" }}>
              <Grid item xs={12}>
                <InputLabel sx={{ color: "#004a92", fontWeight: 550 }}>
                  Registered Mobile Number
                </InputLabel>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onClick={navigateToMobileLogin}
                  sx={{
                    boxShadow: "0 2px 5px 0 rgb(113 113 113 / 24%)",
                    border: "none",
                  }}
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <ArrowRightAltSharpIcon sx={{ color: "#004a92" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;
