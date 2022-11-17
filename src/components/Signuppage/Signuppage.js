import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SfTeam from '../../images/sundaramteam.png';
import SfLogo from '../../images/SF_Logo.png';
import LoginImg from '../../images/login.jpg';
import { Container } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" sx={{color:'white'}}>
      {'Copyright © Sundaram Home Finance Pvt Ltd '}
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Signuppage() {
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
      <Box
        component="header"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor:'#004A92',
          height:'60%',
          width:'100vw',
          backgroundImage: `url(${SfLogo})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left'
        }}
      >
      </Box>
      <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '82vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${SfTeam})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div style={{height:450,width:450, borderRadius:'80%',background:'#AAAAAA', margin:16,
      backgroundImage: `url(${LoginImg})`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
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
          <Avatar sx={{ m: 1, bgcolor: '#2F7DC4' }}>
          <LockOutlinedIcon />
        </Avatar>
          <Typography component="h1" variant="h5" sx={{color:'black'}}>
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt:  1}}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mobile"
                  label="Mobile Number"
                  name="mobile"
                  autoComplete="mobile"
                  size="small"
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
                  
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              size="small"
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item sx={{color:'black', marginTop:2}}>
                <Link href="/login" variant="body2" sx={{color:'black'}}>
                  <strong>Already have an account?  Sign in</strong>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
        </Grid>
    </ThemeProvider>
    <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor:'#004A92',
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </React.Fragment>
    
  );
}