import { ButtonGroup, Divider, InputLabel, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import "./Custom.css";

const CustomDateRangeField = (props) => {
    const [fromValue, setFromValue] = useState(props.fromValue);
    const [toValue, setToValue] = useState(props.toValue);


    return (<>
        <InputLabel required={props.required} >{props.label}</InputLabel>
        <ButtonGroup>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker   
        disabled={props.disabled}  
          disableFuture
          openTo="year"
          views={['year', 'month', 'day']}
          value={fromValue}
          defaultCalendarMonth
          onChange={(newValue) => {
            setFromValue(newValue);
          }}
          renderInput={(params) => <TextField fullWidth   id={props.id}  variant={props.variant}  value={props.value}  type={props.type} placeholder={props.placeholder} {...params} />}
        /> </LocalizationProvider> 

        <Divider
            sx={{
              width:"5%",
              backgroundColor:"auto"
            }}
          />


        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker      
        disabled={props.disabled}  
          disableFuture
          openTo="year"
          views={['year', 'month', 'day']}
          value= {toValue}
          defaultCalendarMonth
          onChange={(newValue) => {
            setToValue(newValue);
          }}
          renderInput={(params) => <TextField fullWidth   id={props.id}  variant={props.variant}  value={props.value}  type={props.type} placeholder={props.placeholder} {...params} />}
        /> </LocalizationProvider>  </ButtonGroup>
    </>);

};

export default CustomDateRangeField;