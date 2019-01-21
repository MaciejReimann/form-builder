import React from "react";

import { TextField } from "@material-ui/core";

export default function InputQuestion({ onChange, value }) {
  return (
    <TextField
      id="name"
      label="Question:"
      placeholder="Placeholder"
      // className={classes.textField}
      margin="normal"
      name="question"
      onChange={onChange}
      value={value}
    />
  );
}
