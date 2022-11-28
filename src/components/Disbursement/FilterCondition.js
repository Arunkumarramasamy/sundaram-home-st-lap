import { Autocomplete, Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";

const FilterCondition = () => {

    

    const branchNames = [
        { label: 'Mylapore'},
        { label: 'Royapettah'},
        { label: 'Light House'},
        { label: 'Chennai'},
        { label: 'Tambaram'},
        { label: 'Egmore'},
      ];

    return (
        
        <Box sx={{border: '2px solid grey',padding: '0.3rem',borderRadius:'10px'}}>
    <Grid container spacing={2} sx={{marginTop:'2%'}}>
      <Grid item xs={12} sm={6}>
        <Grid container spacing={2}>
          <Grid item >
            <InputLabel required sx={{ color: "#7f7f7f" }}>
              Branch
            </InputLabel>
          </Grid>
          <Grid item xs={8}>
          <Autocomplete options={branchNames} fullWidth  renderInput={(params) => <TextField placeholder="Select the Branch"  {...params}/>}
    />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container spacing={2}>
          <Grid item>
            <InputLabel required sx={{ color: "#7f7f7f" }}>
              TRN Number
            </InputLabel>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth 
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter TRN Number"
            />
          </Grid>
        </Grid>
      </Grid>
      
    </Grid>
    <Box
      sx={{
        marginTop: "1rem",
        marginBottom: "1rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Button variant="contained">Search</Button>
      <Button sx={{marginLeft:"1rem",backgroundColor:"black"}} variant="contained">Clear</Button>
    </Box>
  </Box>
);

};

export default FilterCondition;