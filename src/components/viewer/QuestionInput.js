import React from "react";

export default function QuestionInput({
  position,
  question,
  answer,
  onChange
}) {
  return (
    <fieldset>
      <legend>Question: {position}</legend>
      <label>{question}</label>
      <input
        type="text"
        value={answer}
        onChange={e => onChange(e.target.value)}
      />
      {/* <button onClick={onAnswer}>Submit</button> */}
    </fieldset>
  );
}
