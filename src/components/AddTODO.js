import React from "react";
import { InputAdornment, TextField } from "@material-ui/core";
import { useStyle } from "./componentStyles/AddTODOStyle";
import { IconButton } from "@material-ui/core";
import Add from "@material-ui/icons/AddBoxOutlined";


// Returns input field components with button
export default function AddTODO(props) {
  const classes = useStyle();

  let iconSize = null;

  if (window.innerWidth < 430) {
    iconSize = 'small';
  } else {
    iconSize = 'medium';
  }


  return (
    <TextField
      value={props.textEvent}
      onChange={props.onChange}
      label={props.labelText}
      variant="outlined"
      className={classes.textField}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <IconButton
              size={iconSize}
              color="primary"
              onClick={props.handleAdd}
              style={{ backgroundColor: "rgba(43, 56, 86, 0.1)" }}
            >
              <Add />
            </IconButton>
          </InputAdornment>
        ),
        className: classes.labelStyle,
      }}
      InputLabelProps={{
        className: classes.labelStyle,
      }}
    />
  );
}
