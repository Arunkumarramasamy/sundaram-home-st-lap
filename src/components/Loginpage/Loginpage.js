import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SfTeam from '../../images/sundaramteam.png';
import SfLogo from '../../images/SF_Logo.png';
import LoginImg from '../../images/login.jpg';
import { Container } from '@mui/material';
import { isMobile } from 'react-device-detect';
import { InputAdornment, Paper } from '@material-ui/core';
import { LoginOutlined, PasswordOutlined } from '@mui/icons-material';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
      {'Copyright © Sundaram Home Finance Pvt Ltd '}
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Loginpage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      mobile: data.get('mobile'),
      password: data.get('password'),
    });
  };

  return (
    <React.Fragment>
      <Box component="header" sx={{
        py: 3, px: 2, mt: 'auto',
        backgroundColor: '#004A92',
        height: '60%',
        width: '100vw',
        backgroundImage: `url(${SfLogo})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left'
      }}
      />
      {isMobile ? <React.Fragment><ThemeProvider theme={theme}>
        <Grid container component="main" sx={{
          height: '82vh',
          backgroundPosition: 'center',
          width : '100%'
        }}>
          <Grid item component={Paper} elevation={1} square={true} sx={{
            borderColor: '#AAAAAA',
            backgroundImage: 'linear-gradient(#019CAD,white,#4880EC,#004A92)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
            width:'100%'
          }}>
            <ThemeProvider theme={theme}>
              <Container component="main">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: '#2F7DC4', width: '50px', height: '50px' }}>
                    <LoginOutlined />
                  </Avatar>
                  <Typography component="h1" variant="h5" sx={{ color: 'black' }}>
                    Login
                  </Typography>
                  <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="mobile"
                          label="Mobile Number"
                          name="mobile"
                          autoComplete="mobile"
                          size="small"
                          autoFocus
                          sx={{ color: '#7F7F7F' }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PhoneAndroidIcon />
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
                          size="small"
                          sx={{ color: '#7F7F7F' }}
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
                      Submit
                    </Button>
                    <Grid item justifyContent="center">
                      <Link href="/" variant="body2" sx={{ color: 'black' }}>
                        <strong>Forgot password?</strong>
                      </Link>
                    </Grid>
                    <Grid item justifyContent="center" sx={{ marginTop: 1 }}>
                      <Link href="/signup" variant="body2" sx={{ color: 'black' }}>
                        {<strong>Don't have an account? Sign Up</strong>}
                      </Link>
                    </Grid>
                  </Box>
                </Box>
              </Container>
            </ThemeProvider>
          </Grid>
        </Grid>
      </ThemeProvider>
      </React.Fragment> :
        /* below for browser */
        <ThemeProvider theme={theme}>
          <Grid container component="main" sx={{ height: '82vh' }}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7}
              sx={{
                backgroundImage: `url(${SfTeam})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <Grid item xs={12} sm={8} md={5} square sx={{
              borderColor: '#AAAAAA',
              backgroundImage: 'linear-gradient(#019CAD,white,#4880EC,#004A92)', borderRadius: '80%',
              backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
            }}>
              <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <Box
                    sx={{
                      marginTop: 8,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Avatar sx={{ m: 1, bgcolor: '#2F7DC4', width: '50px', height: '50px' }}>
                      <LoginOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ color: 'black' }}>
                      Login
                    </Typography>
                    <Box component="form" validate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id="mobile"
                            label="Mobile Number"
                            name="mobile"
                            autoComplete="mobile"
                            size="small"
                            autoFocus
                            sx={{ color: '#7F7F7F' }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <PhoneAndroidIcon />
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
                            size="small"
                            sx={{ color: '#7F7F7F' }}
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
                        Submit
                      </Button>
                      <Grid item justifyContent="center">
                        <Link href="/" variant="body2" sx={{ color: 'black' }}>
                          <strong>Forgot password?</strong>
                        </Link>
                      </Grid>
                      <Grid item justifyContent="center" sx={{ marginTop: 1 }}>
                        <Link href="/signup" variant="body2" sx={{ color: 'black' }}>
                          {<strong>Don't have an account? Sign Up</strong>}
                        </Link>
                      </Grid>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            </Grid>
          </Grid>
        </ThemeProvider>}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: '#004A92',
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