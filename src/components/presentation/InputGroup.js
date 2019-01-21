import React from "react";

import { Button, Card } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

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
    <Card>
      <fieldset>
        <legend>
          Question no:
          {parentPosition}
        </legend>
        <div className="InputGroup">
          {isNotTopLevel && (
            <SelectCondition
              parentInput={parentinputType}
              onChange={onChange}
            />
          )}
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
        </div>

        <button onClick={onAdd}>Add Sub-Input</button>
        <Button variant="contained" color="secondary" onClick={onDelete}>
          Delete This
          <DeleteIcon />
        </Button>
        {/* <button onClick={onDelete}>Delete This</button> */}
      </fieldset>
    </Card>
  );
}
