import { Autocomplete, Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";

const FilterCondition = (props) => {

  const branchNames = [
    { label: 'Mylapore'},
    { label: 'Royapettah'},
    { label: 'Light House'},
    { label: 'Chennai'},
    { label: 'Tambaram'},
    { label: 'Egmore'},
  ];


   const [branch,setBranch] = useState(branchNames[0]);
   const [trnNo,setTrnNo] = useState('STLMYL202200001');
   const [inputBranchValue, setInputBranchValue] = React.useState('');

    

      const searchButtonClickHandler = () =>{
        console.log(branch);
        console.log(trnNo);
        props.searchButtonClickHandler(branch,trnNo);
      }

     

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
          <Autocomplete  
           value={branch}
           onChange={(event, newValue) => {
             setBranch(newValue.label);
           }}
           inputValue={inputBranchValue}
           onInputChange={(event, newInputValue) => {
             setInputBranchValue(newInputValue);
           }}
          options={branchNames} fullWidth  renderInput={(params) => <TextField placeholder="Select the Branch"   {...params}/>}
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
              onChange={(event) => {
             setTrnNo(event.target.value);
           }}
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
      <Button variant="contained" onClick={searchButtonClickHandler}>Search</Button>
      <Button sx={{marginLeft:"1rem",backgroundColor:"black"}} variant="contained">Clear</Button>
    </Box>
  </Box>
);

};

export default FilterCondition;