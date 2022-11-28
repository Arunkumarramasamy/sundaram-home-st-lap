import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SfTeam from "../../images/sundaramteam.png";
import SfLogo from "../../images/SF_Logo.png";
import LoginImg from "../../images/login.jpg";
import { Container } from "@mui/material";
import { isMobile } from "react-device-detect";
import { InputAdornment, Paper } from "@material-ui/core";
import { LoginOutlined, PasswordOutlined } from "@mui/icons-material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PersonIcon from "@mui/icons-material/Person";
import PageLayout from "../Pagelayout/Pagelayout";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="footer" color="text.secondary" sx={{ color: "white" }}>
      {"Copyright © Sundaram Home Finance Pvt Ltd "} {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const screenHeight = window.innerHeight;

export default function Loginpage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      userId: data.get("userId"),
      password: data.get("password"),
    });
    Cookies.set("islogin", true);
    navigate("/stlap/home/dashboard");
  };

  return Cookies.get("islogin") ? (
    <PageLayout />
  ) : (
    <React.Fragment>
      <Box
        component="header"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "#004A92",
          width: "100%",
          backgroundImage: `url(${SfLogo})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
        }}
      />
      {isMobile ? (
        <React.Fragment>
          <ThemeProvider theme={theme}>
            <Grid
              container
              component="main"
              sx={{
                backgroundPosition: "center",
                width: "100%",
              }}
            >
              <Grid
                item
                component={Paper}
                elevation={1}
                square={true}
                sx={{
                  backgroundColor:
                "#b1e3dc",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "100%",
                }}
              >
                <ThemeProvider theme={theme}>
                  <Container component="main">
                    <CssBaseline />
                    <Box
                      sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: screenHeight - 184,
                        textAlign: "center",
                      }}
                    >
                      <Avatar
                        sx={{
                          m: 1,
                          bgcolor: "#2F7DC4",
                          width: "50px",
                          height: "50px",
                        }}
                      >
                        <LoginOutlined />
                      </Avatar>
                      {/* <Typography
                        component="h1"
                        variant="h5"
                        sx={{ color: "black" }}
                      >
                        Login
                      </Typography> */}
                      <Box
                        component="form"
                        validate
                        onSubmit={handleSubmit}
                        sx={{ mt: 1 }}
                      >
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <TextField
                              required
                              fullWidth
                              id="userId"
                              label="User ID"
                              name="userId"
                              autoComplete="userId"
                              placeholder="Enter Employee Id / Mobile No."
                              size="small"
                              autoFocus
                              sx={{ color: "#7F7F7F" }}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <PersonIcon />
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              required
                              fullWidth
                              name="password"
                              label="Password"
                              type="password"
                              id="password"
                              autoComplete="new-password"
                              placeholder="Enter the Password"
                              size="small"
                              sx={{ color: "#7F7F7F" }}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <PasswordOutlined />
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Grid>
                        </Grid>
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                          size="small"
                        >
                          Login
                        </Button>
                      </Box>
                    </Box>
                  </Container>
                </ThemeProvider>
              </Grid>
            </Grid>
          </ThemeProvider>
        </React.Fragment>
      ) : (
        /* below for browser */
        <ThemeProvider theme={theme}>
          <Grid container component="main" sx={{ width: "100%" }}>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: `url(${SfTeam})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "50%",
                height: "81.8vh",
              }}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              square="true"
              sx={{
                borderColor: "#AAAAAA",
                backgroundColor:
                "#b1e3dc",
                borderRadius: "80%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "50%",
                height: "81.8vh",
              }}
            >
              <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <Box
                    sx={{
                      marginTop: 18,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Avatar
                      sx={{
                        m: 1,
                        bgcolor: "#2F7DC4",
                        width: "50px",
                        height: "50px",
                      }}
                    >
                      <LoginOutlined />
                    </Avatar>
                    {/* <Typography
                      component="h1"
                      variant="h5"
                      sx={{ color: "black" }}
                    >
                      Login
                    </Typography> */}
                    <Box
                      component="form"
                      validate
                      onSubmit={handleSubmit}
                      sx={{ mt: 1 }}
                    >
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id="userId"
                            label="User ID"
                            name="userId"
                            autoComplete="userId"
                            placeholder="Enter Employee Id / Mobile Number"
                            size="small"
                            autoFocus
                            sx={{ color: "#7F7F7F" }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <PersonIcon />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            placeholder="Enter the Password"
                            size="small"
                            sx={{ color: "#7F7F7F" }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <PasswordOutlined />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        size="small"
                      >
                        Login
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            </Grid>
          </Grid>
        </ThemeProvider>
      )}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "#004A92",
          textAlign: "center",
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </React.Fragment>
  );
}

Loginpage.propTypes = {};
