import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Autocomplete, Box, Button, Grid, InputLabel, Tab, TextField } from "@mui/material";
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

    
   const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

      const searchButtonClickHandler = () =>{
        props.onSearchButtonClick(branch,trnNo,true);
      }
      

      const clearButtonClickHandler = () =>{
        setBranch("");
        setTrnNo("");
        props.onSearchButtonClick(branch,trnNo,false);
      }


      const BasicSearchValues = (<><Grid container spacing={2} >
      
      <Grid item xs={12} sm={6}>
              <Grid container spacing={1} sx={{ alignItems: "center" }}>
                <Grid item sm={12} lg={4} xs={12}>
                  <InputLabel required sx={{ color: "#7f7f7f" }}>
                  Branch
                  </InputLabel>
                </Grid>
                <Grid item xs={12} lg={8} sm={12}>
                <Autocomplete  
             value={""}
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
              <Grid container spacing={1} sx={{ alignItems: "center" }}>
                <Grid item sm={12} lg={4} xs={12}>
                  <InputLabel required sx={{ color: "#7f7f7f" }}>
                  Trn No.
                  </InputLabel>
                </Grid>
                <Grid item xs={12} lg={8} sm={12}>
                <TextField
                onChange={(event) => {
               setTrnNo(event.target.value);
             }}
                fullWidth 
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter TRN Number"
                value={""}
              />
                </Grid>
              </Grid>
            </Grid>
        
      </Grid>
      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button variant="contained" onClick={searchButtonClickHandler}>Search</Button>
        <Button sx={{marginLeft:"1rem"}} onClick={clearButtonClickHandler} variant="contained">Clear</Button>
      </Box></>);



const AdvancedSearchValues = (<><Grid container spacing={2} >
      
  <Grid item xs={12} sm={6}>
          <Grid container spacing={1} sx={{ alignItems: "center" }}>
            <Grid item sm={12} lg={4} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
              Branch
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={8} sm={12}>
            <Autocomplete  
         value={""}
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
          <Grid container spacing={1} sx={{ alignItems: "center" }}>
            <Grid item sm={12} lg={4} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
              Trn No.
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={8} sm={12}>
            <TextField
            onChange={(event) => {
           setTrnNo(event.target.value);
         }}
            fullWidth 
            id="outlined-basic"
            variant="outlined"
            placeholder="Enter TRN Number"
            value={""}
          />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid container spacing={1} sx={{ alignItems: "center" }}>
            <Grid item sm={12} lg={4} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
              Applicant Name
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={8} sm={12}>
            <TextField
            fullWidth 
            id="outlined-basic"
            variant="outlined"
            placeholder="Enter Applicant Name"
            value={""}
          />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid container spacing={1} sx={{ alignItems: "center" }}>
            <Grid item sm={12} lg={4} xs={12}>
              <InputLabel required sx={{ color: "#7f7f7f" }}>
              File Number
              </InputLabel>
            </Grid>
            <Grid item xs={12} lg={8} sm={12}>
            <TextField
            onChange={(event) => {
           setTrnNo(event.target.value);
         }}
            fullWidth 
            id="outlined-basic"
            variant="outlined"
            placeholder="Enter File Number"
            value={""}
          />
            </Grid>
          </Grid>
        </Grid>

        
    
  </Grid>
  <Box
    sx={{
      marginTop: "1rem",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <Button variant="contained" onClick={searchButtonClickHandler}>Search</Button>
    <Button sx={{marginLeft:"1rem"}} onClick={clearButtonClickHandler} variant="contained">Clear</Button>
  </Box></>);
     

    return ( <>
    <Box sx={{border: '2px solid grey',padding: '0.3rem',borderRadius:'10px'}}>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          TabIndicatorProps={{ hidden: true }}
          variant="scrollable"
          allowScrollButtonsMobile
          sx={{
            "& button.Mui-selected": {
              backgroundColor: "#004a92",
              color: "white",
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
              borderBottom: "none",
            },

            "& button": {
              outline: "none",
              marginRight: "0.2rem",
              background: "#fafafa",
              color: "#7f7f7f",
              transition: "all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)",
              borderBottom: "2px solid #AAAAAA",
              textTransform: "none",
            },
          }}
        >
          <Tab label="Basic Search" value="1" />
          <Tab label="Advanced Search" value="2" />
        </TabList>
      
      <TabPanel value="1">
       {BasicSearchValues}
      </TabPanel>
      <TabPanel value="2">
        {AdvancedSearchValues}
      </TabPanel>
    </TabContext>

        
    
  </Box></>
);

};

export default FilterCondition;