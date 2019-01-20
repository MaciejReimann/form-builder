import React from "react";

export default function InputQuestion({ onChange, value }) {
  return (
    <p>
      <label>Question:</label>
      <input name="question" type="text" onChange={onChange} value={value} />
    </p>
  );
}
