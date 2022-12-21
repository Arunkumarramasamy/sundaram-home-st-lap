import {
  Box,
  Button,
  Grid
} from "@mui/material";
import React, { useState } from "react";
import CustomDropDown from "../CustomComponents/CustomDropDown";
import CustomTextField from "../CustomComponents/CustomTextField";
import AccordianContainer from "../CustomComponents/AccordianContainer";
import CustomAutoComplete from "../CustomComponents/CustomAutoComplete";
import CustomButton from "../CustomComponents/CustomButton";

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

  const [branch, setBranch] = useState("");
  const [trnNo, setTrnNo] = useState("");
  const [applicantName, setApplicantName] = useState("");


  const searchButtonClickHandler = (event) => {
    event.preventDefault();
    props.onSearchButtonClick(branch, trnNo, true);
  };

  const clearButtonClickHandler = () => {
    setBranch("");
    setTrnNo("");
    props.onSearchButtonClick(branch, trnNo, false);
  };

  const branchValues = [
    {
      value: 1,
      text: "Royapettah",
    },
    {
      value: 2,
      text: "Mylapore",
    },
    {
      value: 3,
      text: "Light House",
    },
    {
      value: 4,
      text: "Egmore",
    },
  ];

  const branchNameChangeHandler = (evt) => {
    setBranch(evt.target.value);
  }

  const trnNoChangeHandler = (evt) => {
    setTrnNo(evt.target.value);
  }

  const applicantNameChangeHandler = (evt) => {
    setApplicantName(evt.target.value);
  }

  const BasicSearchValues = (
    <><Box component="form"  validate    onSubmit={searchButtonClickHandler}  >
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
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={true}
            label="Trn No."
            id="trnno"
            variant="standard"
            value={trnNo}
            type="text"
            placeholder="Enter Trn No."
            onChange={trnNoChangeHandler}
          />
        </Grid>


        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={false}
            label="Applicant Name"
            id="applicantName"
            variant="standard"
            value={applicantName}
            type="text"
            placeholder="Applicant Name"
            onChange={applicantNameChangeHandler}
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
        <CustomButton variant="contained" type="submit">
          Search
        </CustomButton>
        <CustomButton
          sx={{ marginLeft: "1rem", color:"white",backgroundColor:"black" }}
          onMouseOver={({target})=>{target.style.backgroundColor="black";target.style.color="white"}}
          
          onClick={clearButtonClickHandler}
          variant="contained"
        >
          Clear
        </CustomButton>
      </Box>
      </Box>
    </>
  );


  return (
    <><AccordianContainer title={props.title} initialOpen={true}>
      <Box sx={{ width: "100%", backgroundColor: "white" }}>
        {BasicSearchValues}
      </Box>
      </AccordianContainer>
    </>
  );
};

export default FilterCondition;
