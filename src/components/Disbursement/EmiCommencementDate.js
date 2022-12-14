import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import Switch from "@mui/material/Switch";
import * as React from "react";
import CustomDateField from "../CustomComponents/CustomDateField";
import CustomDropDown from "../CustomComponents/CustomDropDown";
import CustomTextField from "../CustomComponents/CustomTextField";
import STButton from "../CustomComponents/STButton";

const EmiCommencementDate = (props) => {


  const emiOptionValues = [
    {
      value: 1,
      text: "Commence EMI",
    },
    {
      value: 2,
      text: "Continue EMI",
    },
  ];

  return (
    <Box sx={{ marginTop: "0.5rem" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <InputLabel required sx={{ color: "#7f7f7f" }}>
            Moratorium
          </InputLabel>
          <Switch  checked={props.dataMap.EmiCommencementDate.moratorium}/>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={true}
            label="Number of Months"
            id="months"
            variant="standard"
            value={props.dataMap.EmiCommencementDate.numberofMonths}
            type="number"
            placeholder="Enter Number of Months"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDropDown
            variant="standard"
            required={true}
            label="EMI Options"
            id="emiOptions"
            value={props.dataMap.EmiCommencementDate.emiOptions}
            placeholder="EMI Options"
            displayEmpty={true}
            dropDownValue={emiOptionValues}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDateField
            required={true}
            label="ECD"
            id="ecd"
            variant="standard"
            value={props.dataMap.EmiCommencementDate.ecd}
            type="date"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDateField
            required={true}
            label="FBD"
            id="fbd"
            variant="standard"
            value={props.dataMap.EmiCommencementDate.fbd}
            type="date"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDateField
            required={true}
            label="FEDD"
            id="fedd"
            variant="standard"
            value={props.dataMap.EmiCommencementDate.fedd}
            type="date"
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <STButton variant="contained" onClick={props.back}>
          Back to search
        </STButton>
      </Box>
    </Box>
  );
};
export default EmiCommencementDate;
