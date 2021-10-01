import React from "react";
import { InputAdornment, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import Add from "@material-ui/icons/AddBoxOutlined";

// Styling for input field and label text
const useStyle = makeStyles({
  textField: {
    margin: "2rem",
    marginLeft: "calc(3.5rem + 2vw)",
    marginRight: "calc(3.5rem + 2vw)",
  },

  labelStyle: {
    fontSize: "calc(1rem + 0.2vw)",
    fontWeight: 600,
  },
});

// Returns input field components with button
export default function AddTODO(props) {
  const classes = useStyle();

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
              size="medium"
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
