import React from "react";

export default function SelectType({ onChange, value }) {
  return (
    <p>
      <label>Type:</label>
      <select name="inputType" onChange={e => onChange(e)} value={value}>
        <option>Yes / No</option>
        <option>Text</option>
        <option>Number</option>
      </select>
    </p>
  );
}
