import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Tab
} from "@mui/material";
import React from "react";
import CustomTextField from "../CustomComponents/CustomTextField";
import AccordianContainer from "../CustomComponents/AccordianContainer";
import CustomAutoComplete from "../CustomComponents/CustomAutoComplete";
import CustomDropDown from "../CustomComponents/CustomDropDown";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useReducer } from "react";


const filterValues = {
  tabIndex: 'tabIndex',
  applicationNumber: 'applicationNumber',
  applicantName: 'applicantName',
  customerType: 'customerType',
  roi: 'roi',
  loanAmountRangeFrom: 'loanAmountRangeFrom',
  loanAmountRangeTo: 'loanAmountRangeTo',

};

const initialState = {
  tabIndex: '1',
  applicationNumber: '',
  applicantName: '',
  customerType: '',
  roi: '',
  loanAmountRangeFrom: '',
  loanAmountRangeTo: '',
  branchName: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case filterValues.tabIndex:
      return { ...state, tabIndex: action.value }
    case filterValues.applicationNumber:
      return { ...state, applicationNumber: action.value }
    case filterValues.applicantName:
      return { ...state, applicantName: action.value }
    case filterValues.customerType:
      return { ...state, customerType: action.value }
    case filterValues.roi:
      return { ...state, roi: action.value }
    case filterValues.loanAmountRangeFrom:
      return { ...state, loanAmountRangeFrom: action.value }
      case filterValues.loanAmountRangeTo:
        return { ...state, loanAmountRangeTo: action.value }
    case filterValues.branchName:
        return { ...state, branchName: action.value }
    default:
      return initialState;
  }
}

const FilterCondition = (props) => {

  const branchNames = [
    { label: "Red Hills" },
    { label: "Royapuram" },
    { label: "Korukkupet" },
    { label: "Vyasarpadi" },
    { label: "Tondiarpet" },
    { label: "Tiruvottiyur" },
    { label: "Ennore" },
    { label: "Minjur" },
    { label: "Old Washermenpet" },
    { label: "Madhavaram" },
    { label: "Manali New Town" },
    { label: "Naravarikuppam" },
    { label: "Sowcarpet" },
    { label: "Puzhal" },
    { label: "Moolakadai" },
    { label: "Central" },
    { label: "Kodungaiyur" },
    { label: "Madhavaram Milk Colony" },
    { label: "Mathur MMDA" },
    { label: "Kolathur" },
    { label: "Surapet" },
    { label: "Parry's Corner" },
    { label: "Manali" },
    { label: "Vallalar Nagar" },
    { label: "New Washermenpet" },
    { label: "Mannadi" },
    { label: "George Town" },
    { label: "Basin Bridge" },
    { label: "Park Town" },
    { label: "Periamet" },
    { label: "Pattalam" },
    { label: "Pulianthope" },
    { label: "M.K.B. Nagar" },
    { label: "Selavoyal" },
    { label: "Manjambakkam" },
    { label: "Ponniammanmedu" },
    { label: "Sembiam" },
    { label: "T.V.K. Nagar" },
    { label: "ICF Colony" },
    { label: "Lakshmipuram" },
    { label: "Kathivakkam" },
    { label: "Kathirvedu" },
    { label: "Erukanchery" },
    { label: "Broadway" },
    { label: "Jamalia, Chennai" },
    { label: "Kosapet" },
    { label: "Otteri" },
    { label: "Porur" },
    { label: "manapakkam" },
    { label: "Anna Nagar" },
    { label: "Aminjikarai" },
    { label: "Ayanavaram" },
    { label: "Ambattur" },
    { label: "Kundrathur" },
    { label: "Defence Colony" },
    { label: "Mannurpet" },
    { label: "Padi" },
    { label: "Ayappakkam" },
    { label: "Korattur" },
    { label: "Mogappair" },
    { label: "Arumbakkam" },
    { label: "Avadi" },
    { label: "Pudur" },
    { label: "Maduravoyal" },
    { label: "Koyambedu" },
    { label: "Ashok Nagar" },
    { label: "K.K. Nagar" },
    { label: "Karambakkam" },
    { label: "Vadapalani" },
    { label: "Saligramam" },
    { label: "Virugambakkam" },
    { label: "Alwarthirunagar" },
    { label: "Valasaravakkam" },
    { label: "Thirunindravur" },
    { label: "Pattabiram" },
    { label: "Thirumangalam" },
    { label: "Thirumullaivayal" },
    { label: "Thiruverkadu" },
    { label: "Nandambakkam" },
    { label: "Nerkundrum" },
    { label: "Nesapakkam" },
    { label: "Nolambur" },
    { label: "Ramapuram" },
    { label: "Mugalivakkam" },
    { label: "Mangadu" },
    { label: "M.G.R. Nagar" },
    { label: "M.G.R. Garden" },
    { label: "Alapakkam" },
    { label: "Poonamallee" },
    { label: "Mowlivakkam" },
    { label: "Gerugambakkam" },
    { label: "CMDA Colony" },
    { label: "Thirumazhisai" },
    { label: "Iyyapanthangal" },
    { label: "Annanur" },
    { label: "Teynampet" },
    { label: "Thousand Lights" },
    { label: "Gopalapuram" },
    { label: "Mylapore" },
    { label: "Chromepet" },
    { label: "Egmore" },
    { label: "Chetpet" },
    { label: "Perungudi" },
    { label: "Sholinganallur" },
    { label: "Alandur" },
    { label: "Adambakkam" },
    { label: "Adyar" },
    { label: "Besant Nagar" },
    { label: "Triplicane" },
    { label: "T. Nagar" },
    { label: "Thiruvanmiyur" },
    { label: "Saidapet" },
    { label: "Guindy" },
    { label: "Madipakkam" },
    { label: "Nanganallur" },
    { label: "Velachery" },
    { label: "Taramani" },
    { label: "Pallikaranai" },
    { label: "Keelkattalai" },
    { label: "Kovilambakkam" },
    { label: "Thoraipakkam" },
    { label: "Neelankarai" },
    { label: "Injambakkam" },
    { label: "Hastinapuram" },
    { label: "Pallavaram" },
    { label: "Pozhichur" },
    { label: "Pammal" },
    { label: "Nagalkeni" },
    { label: "Tambaram" },
    { label: "Selaiyur" },
    { label: "Irumbuliyur" },
    { label: "Kadaperi" },
    { label: "Perungalathur" },
    { label: "Pazhavanthangal" },
    { label: "Peerkankaranai" },
    { label: "Mudichur" },
    { label: "Vandalur" },
    { label: "Kolappakkam" },
    { label: "Mambakkam" },
    { label: "Palavakkam" },
    { label: "Varadharajapuram" },
    { label: "Medavakkam" },
    { label: "West Mambalam" },
    { label: "Kottivakkam" },    
  ];

  
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchButtonClickHandler = (event) => {
    event.preventDefault();
    console.log(state);
  };



  const BasicSearchValues = (
    <><Box component="form"  validate   onSubmit={searchButtonClickHandler}  >
      <Grid container spacing={2}>
        
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomAutoComplete
            required={true}
            label="Branch"
            id="branch"
            variant="standard"
            type="text"
            placeholder="Branch"
            autoCompleteValues={branchNames}
            value={state.branchName}
            onChange={(event,value) => {
              dispatch({ type: filterValues.branchName, value: value.label })
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={true}
            label="Application Number"
            id="applicationNumber"
            variant="standard"
            value={state.applicationNumber}
            type="text"
            placeholder="Enter Application No."
            onChange={event => {
              dispatch({ type: filterValues.applicationNumber, value: event.target.value })
            }}
          />
        </Grid>


        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={false}
            label="Applicant Name"
            id="applicantName"
            variant="standard"
            value={state.applicantName}
            type="text"
            placeholder="Applicant Name"
            onChange={event => {
              dispatch({ type: filterValues.applicantName, value: event.target.value })
            }}
          />
        </Grid>

      </Grid>
      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button variant="contained" type="submit">
          Search
        </Button>
        <Button
          sx={{ marginLeft: "1rem", color:"white",backgroundColor:"black" }}
          onMouseOver={({target})=>{target.style.backgroundColor="black";target.style.color="white"}}
          variant="contained"
          onClick={event => {
            dispatch({ type: "", value: "" })
          }}
        >
          Clear
        </Button>
      </Box>
      </Box>
    </>
  );

  const AdvancedSearchValues = (
    <><Box component="form"  validate    onSubmit={searchButtonClickHandler}  >
      <Grid container spacing={2}>
        
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomAutoComplete
            required={false}
            label="Branch"
            id="branch"
            variant="standard"
            type="text"
            placeholder="Branch"
            autoCompleteValues={branchNames}
            value={state.branchName}
            onChange={event => {
              dispatch({ type: filterValues.branchName, value: event.target.value })
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={false}
            label="Application Number"
            id="applicationNumber"
            variant="standard"
            value={state.applicationNumber}
            type="text"
            placeholder="Enter Application No."
            onChange={event => {
              dispatch({ type: filterValues.applicationNumber, value: event.target.value })
            }}
          />
        </Grid>


        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={false}
            label="Applicant Name"
            id="applicantName"
            variant="standard"
            value={state.applicantName}
            type="text"
            placeholder="Applicant Name"
            onChange={event => {
              dispatch({ type: filterValues.applicantName, value: event.target.value })
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDropDown
            required={false}
            label="Customer Type"
            id="customerType"
            variant="standard"
            type="text"
            placeholder="Customer Type"
            dropDownValue={[{value:0,text:"New"},{value:1,text:"Old"}]}
            value={state.customerType}
            onChange={event => {
              dispatch({ type: filterValues.customerType, value: event.target.value })
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={false}
            label="Rate of Interest(%)"
            id="roi"
            variant="standard"
            value={state.roi}
            type="text"
            placeholder="Enter Rate of Interest."
            onChange={event => {
              dispatch({ type: filterValues.roi, value: event.target.value })
            }}
          />
        </Grid>


        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={false}
            label="Loan Amount Range From"
            id="loanAmountRangeFrom"
            variant="standard"
            value={state.loanAmountRangeFrom}
            type="text"
            placeholder="From"
            onChange={event => {
              dispatch({ type: filterValues.loanAmountRangeFrom, value: event.target.value })
            }}
          />
        </Grid>

        
    
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={false}
            label="Loan Amount Range To"
            id="loanAmountRangeTo"
            variant="standard"
            value={state.loanAmountRangeTo}
            type="text"
            placeholder="To"
            onChange={event => {
              dispatch({ type: filterValues.loanAmountRangeTo, value: event.target.value })
            }}
          /></Grid>
          
       





      </Grid>
      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button variant="contained" type="submit">
          Search
        </Button>
        <Button
          sx={{ marginLeft: "1rem", color:"white",backgroundColor:"black" }}
          onMouseOver={({target})=>{target.style.backgroundColor="black";target.style.color="white"}}
          variant="contained"
          onClick={event => {
            dispatch({ type: "", value: "" })
          }}
        >
          Clear
        </Button>
      </Box>
      </Box>
    </>
  );


  return (
    <><AccordianContainer title={props.title} initialOpen={true}>
      <Box sx={{ width: "100%",  backgroundColor: "white" }}>
        <TabContext value={state.tabIndex}>
          <Box
            sx={{
              borderColor: "divider",
              backgroundColor: "#eeeeee",
            }}
          >
            <TabList
               onChange={(event,value) => {
                dispatch({ type: filterValues.tabIndex, value: value })
              }}
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
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                  backgroundColor:"#D7D7D7",
                },
              }}
            >
              <Tab label="Basic Details:" value="1" />
              <Tab label="Advanced Details:" value="2" />

            </TabList>
          </Box>
          <TabPanel value="1">
            {BasicSearchValues}
          </TabPanel>
          <TabPanel value="2">
            {AdvancedSearchValues}
          </TabPanel>
         
        </TabContext>
      </Box>
      </AccordianContainer>
    </>
  );
};

export default FilterCondition;
