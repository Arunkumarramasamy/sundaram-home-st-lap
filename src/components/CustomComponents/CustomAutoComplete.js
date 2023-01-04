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
        sx={{ color: "#004A92", fontWeight: 600 }}
      >
        {props.label}
      </InputLabel>
      <FormControl fullWidth>
        <Autocomplete
          id={props.id}
          value={props.value}
          disabled={props.disabled}
          onChange={props.onChange}
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
