import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const CustomDropDown = (props) => {
  const [value, setValue] = useState("");
  return (
    <>
      <InputLabel required={props.required}>{props.label}</InputLabel>
      <FormControl fullWidth variant={props.variant}>
        <Select
          onChange={(event)=>setValue(event.target.value)}
          displayEmpty={props.displayEmpty}
          value={value}
          id={props.id}
          disabled={props.disabled}
          defaultValue={props.defaultValue}
          required={props.required}
        >
          <MenuItem value="">
            <p className="placeHolder_text">{props.placeholder}</p>
          </MenuItem>
          {props.dropDownValue.map((item) => {
            return <MenuItem value={item.value}>{item.text}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default CustomDropDown;
