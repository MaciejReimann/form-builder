import React from "react";

export default function SelectCondition({ parentInput, onChange }) {
  if (parentInput === "Text") {
    return (
      <p>
        <label className="label">Conditon:</label>
        <select name="conditionType" onChange={onChange} value="Equals">
          <option value="Equals">Equals</option>
        </select>
        <input type="text" name="conditionValue" onChange={onChange} />
      </p>
    );
  } else if (parentInput === "Yes / No") {
    return (
      <p>
        <label className="label">Conditon:</label>
        <select name="conditionType" onChange={onChange}>
          <option value="Equals">Equals</option>
        </select>
        <select name="conditionValue" onChange={onChange}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </p>
    );
  }
  return (
    <p>
      <label className="label">Conditon:</label>
      <select name="conditionType" onChange={onChange} value="Equals">
        <option value="Less Than">Less Than</option>
        <option value="Equals">Equals</option>
        <option value="Greater Than">Greater Than</option>
      </select>
      <input type="text" name="conditionValue" onChange={onChange} />
    </p>
  );
}
