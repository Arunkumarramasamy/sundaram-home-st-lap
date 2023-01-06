import { InputLabel, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./Custom.css";

const CustomDateField = (props) => {
  return (
    <>
      <InputLabel
        required={props.required}
        size="small"
        sx={{ color: "#004A92", mb:2 }}
      >
        {props.label}
      </InputLabel>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          disabled={props.disabled}
          disableFuture={props.disableFuture}
          disablePast={props.disablePast}
          openTo="day"
          inputFormat="DD/MM/YYYY"
          views={["year", "month", "day"]}
          value={props.value}
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
              sx={{
                "& div.MuiInputBase-adornedEnd.css-1a1fmpi-MuiInputBase-root-MuiInput-root:after":
                  {
                    borderBottom: "none",
                  },
              }}
            />
          )}
        />
      </LocalizationProvider>
    </>
  );
};

export default CustomDateField;
