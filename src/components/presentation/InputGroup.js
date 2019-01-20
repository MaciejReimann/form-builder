import React from "react";

import InputGroupContainer from "../logic/InputGroupContainer";

import InputQuestion from "./InputQuestion";
import SelectType from "./SelectType";
import SelectCondition from "./SelectCondition";

export default function InputGroup({
  isNotTopLevel,
  parentinputType,
  parentPosition,
  question,
  inputType,
  subInputs,
  onChange,
  onUpdate,
  onAdd,
  onDelete,
  onDeleteFromContainer
}) {
  return (
    <fieldset>
      <legend>
        Question no:
        {parentPosition}
      </legend>
      {isNotTopLevel && <SelectCondition parentInput={parentinputType} />}
      <InputQuestion onChange={onChange} value={question} />
      <SelectType onChange={onChange} value={inputType} />

      {subInputs.map((subInput, i) => (
        <InputGroupContainer
          key={subInput.id}
          id={subInput.id}
          inputType={inputType}
          position={`${parentPosition}.${i + 1}`}
          onUpdate={onUpdate}
          deleteFromParent={onDeleteFromContainer}
        />
      ))}
      <button onClick={onAdd}>Add Sub-Input</button>
      <button onClick={onDelete}>Delete This</button>
    </fieldset>
  );
}
