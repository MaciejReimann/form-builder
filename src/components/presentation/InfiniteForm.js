import React from "react";

export default function InfiniteForm({ onAddInput, inputs }) {
  const onSubmit = e => e.preventDefault();
  return (
    <form className="InfiniteForm" onSubmit={onSubmit}>
      <fieldset>
        <legend>
          <h4>Your New Form</h4>
        </legend>
        {inputs}
        <button onClick={onAddInput}>Click To Add Input</button>
      </fieldset>
    </form>
  );
}
