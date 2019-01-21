import React from "react";

import { TextField, MenuItem } from "@material-ui/core";

export default function SelectType({ onChange, value }) {
  const types = ["Yes / No", "Text", "Number"];
  return (
    <TextField
      name="inputType"
      id="select-type"
      select
      label="Type:"
      // className={classes.textField}
      value={value}
      onChange={e => onChange(e)}
      // SelectProps={{
      //   MenuProps: {
      //     className: classes.menu
      //   }
      // }}
      helperText="Please select ....."
      margin="normal"
    >
      {types.map(option => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}
