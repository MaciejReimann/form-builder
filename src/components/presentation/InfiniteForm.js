import React from "react";

export default ({ onAddInput, inputs }) => {
  const onSubmit = e => e.preventDefault();
  return (
    <div onSubmit={onSubmit}>
      <h3>New Form</h3>
      {inputs}
      <button onClick={onAddInput}>Add Input</button>
    </div>
  );
};
