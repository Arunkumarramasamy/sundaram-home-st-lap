import { InputLabel, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";
import "./Custom.css";

const CustomDateField = (props) => {
    const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));


    return (<>
        <InputLabel required={props.required} >{props.label}</InputLabel>
        
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker      
        disabled={props.disabled}  
          disableFuture
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField fullWidth   id={props.id}  variant={props.variant}  value={props.value}  type={props.type} placeholder={props.placeholder} {...params} />}
        /> </LocalizationProvider>  
    </>);

};

export default CustomDateField;