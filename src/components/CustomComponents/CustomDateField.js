import { InputLabel, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";
import "./Custom.css";

const CustomDateField = (props) => {
  return (
    <>
      <InputLabel required={props.required}>{props.label}</InputLabel>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          disabled={props.disabled}
          disableFuture
          openTo="year"
          views={["year", "month", "day"]}
          value={props.value}
          defaultCalendarMonth
          onChange={props.onChange}
          renderInput={(params) => (
            <TextField
              fullWidth
              id={props.id}
              variant={props.variant}
              value={props.value}
              type={props.type}
              placeholder={props.placeholder}
              {...params}
            />
          )}
        />{" "}
      </LocalizationProvider>
    </>
  );
};

export default CustomDateField;
