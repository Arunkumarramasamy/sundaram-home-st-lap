import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Autocomplete, Box, Button, Grid, InputLabel, Tab, TextField } from "@mui/material";
import React, { useState } from "react";
import CustomDropDown from "../CustomComponents/CustomDropDown";
import CustomTextField from "../CustomComponents/CustomTextField";

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

      const branchValues = [
        {
        value:1,
        text:"Royapettah"
        },
        {
          value:2,
          text:"Mylapore"
        },
        {
          value:3,
          text:"Light House"
        },
        {
          value:4,
          text:"Egmore"
        }          
    ];


      const BasicSearchValues = (<>
               <Grid container spacing={2}>

               <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <CustomDropDown required={true} label="Branch" id="branch" value={""} placeholder="Property Type" displayEmpty={true} dropDownValue={branchValues}/>
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField required={true} label="Trn No." id="trnno"  variant="outlined" value={""} type="text" placeholder="Enter Trn No."/>
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



const AdvancedSearchValues = (<>
  <Grid container spacing={2}>

  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
   <CustomDropDown required={true} label="Branch" id="branch" value={""} placeholder="Property Type" displayEmpty={true} dropDownValue={branchValues}/>
 </Grid>

 <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
 <CustomTextField required={true} label="Trn No." id="trnno"  variant="outlined" value={""} type="text" placeholder="Enter Trn No."/>
 </Grid>

 <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
 <CustomTextField required={true} label="Applicant Name" id="applicantName"  variant="outlined" value="" type="text" placeholder="Enter Applicant Name"/>
 </Grid>

 <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
 <CustomTextField required={true} label="File Number" id="fileNumber"  variant="outlined" value="" type="text" placeholder="Enter File Number"/>
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
    <Box sx={{ width: "100%", backgroundColor: "white" }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderColor: "divider",
              backgroundColor: "#eeeeee",
            }}
          >
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              TabIndicatorProps={{ hidden: true }}
              sx={{
                "& button.Mui-selected": {
                  backgroundColor: "#004a92",
                  color: "white",
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                  borderBottom: "none",
                },
                "& div.MuiTabs-flexContainer": {
                  flexWrap: "wrap",
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
          </Box>
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