import React from "react";

export default function SelectCondition({ parentInput, value }) {
  console.log(parentInput);
  if (parentInput === "Text") {
    return (
      <p>
        <label>Conditon:</label>
        <select>
          <option>Equals</option>
        </select>
        <input type="text" />
      </p>
    );
  } else if (parentInput === "Yes / No") {
    return (
      <p>
        <label>Conditon:</label>
        <select>
          <option>Equals</option>
        </select>
        <select>
          <option>Yes</option>
          <option>No</option>
        </select>
      </p>
    );
  }
  return (
    <p>
      <label>Conditon:</label>
      <select>
        <option>Less Than</option>
        <option>Equals</option>
        <option>Greater Than</option>
      </select>
      <input type="text" />
    </p>
  );
}
