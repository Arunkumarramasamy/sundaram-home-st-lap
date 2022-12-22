import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const CustomDropDown = (props) => {
  return (
    <>
      <InputLabel required={props.required}>{props.label}</InputLabel>
      <FormControl fullWidth variant={props.variant}>
        <Select
          onChange={props.onChange}
          onBlur={props.onBlur}
          error={props.error}
          defaultValue={props.defaultValue}
          displayEmpty={props.displayEmpty}
          value={props.value}
          id={props.id}
          disabled={props.disabled}
        >
          {props.placeholder ? (
            <MenuItem value="">
              <p className="placeHolder_text">{props.placeholder}</p>
            </MenuItem>
          ) : null}

          {props.dropDownValue.map((item) => {
            return (
              <MenuItem value={item.value} key={item.key}>
                {item.text}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default CustomDropDown;
