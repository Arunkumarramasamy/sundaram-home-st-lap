import { InputLabel, MenuItem, Select, TextField } from "@mui/material";

const CustomDropDown = (props) => {

    return (<><InputLabel required={props.required} >{props.label}</InputLabel>
    <Select displayEmpty={props.displayEmpty} value={props.value} fullWidth id={props.id}>
                    <MenuItem value="">
                      <p className="placeHolder_text">{props.placeholder}</p>
                    </MenuItem>
                    { props.dropDownValue.map((item) => {
                      return  (<MenuItem value={item.value}>{item.text}</MenuItem>);
                    })
                    }
                  </Select></>);

};

export default CustomDropDown;