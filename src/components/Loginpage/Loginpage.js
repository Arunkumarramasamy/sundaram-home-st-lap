import React from 'react';
import PropTypes from "prop-types";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SfLogo from '../../images/SF_Logo.jpg';
import { AccountCircle, LockOpenOutlined, LoginOutlined, SupervisedUserCircleOutlined } from '@mui/icons-material';


const theme = createTheme();

export const Loginpage = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      mobile: data.get('mobile'),
      password: data.get('password'),
    });
  };

  return (
  <ThemeProvider theme={theme}>
  <Grid container component="main" sx={{ height: '100vh',backgroundColor:'blue' }}>
    <CssBaseline />
    <Grid
      item
      xs={false}
      sm={4}
      md={7}
      sx={{
        backgroundImage: `url(${SfLogo})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width:'40%',
        height:'60%',
        alignSelf:'center',
        backgroundColor:'lightblue'
      }}
    />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'blue',width:'80px',height:'80px' }}>
          <LoginOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="mobile"
            label="Mobile Number"
            name="mobile"
            autoComplete="mobile"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/" variant="body2">
                <strong>Forgot password?</strong>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {<strong>Don't have an account? Sign Up</strong>}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  </Grid>
</ThemeProvider>
  );
};

Loginpage.propTypes = {};