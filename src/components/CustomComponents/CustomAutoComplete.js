import {
  Autocomplete,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
import "./Custom.css";

const CustomAutoComplete = (props) => {
  return (
    <>
      <InputLabel
        required={props.required}
        size="small"
        sx={{
          color: "#004A92",
          mb: 2,
          fontWeight: 400,
          fontSize: "0.875rem",
          fontFamily: "Roboto",
        }}
      >
        {props.label}
      </InputLabel>
      <FormControl fullWidth>
        <Autocomplete
          sx={{ fontFamily: "Roboto" }}
          id={props.id}
          value={props.value}
          disabled={props.disabled}
          onChange={props.onChange}
          onBlur={props.onBlur}
          onInputChange={props.onInputChange}
          clearText={props.clearText}
          clearicon={(event) => console.log("cleared")}
          options={props.autoCompleteValues}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          renderInput={(params) => (
            <TextField
              required={props.required}
              {...params}
              variant={props.variant}
              placeholder={props.placeholder}
            />
          )}
        />
      </FormControl>
    </>
  );
};

export default CustomAutoComplete;
