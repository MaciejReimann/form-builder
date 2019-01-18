import React from "react";

export default function QuestionInput({
  position,
  question,
  answer,
  warning,
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
      {warning && (
        <p className="warning">
          Sorry, your answer doesn't allow me to show you more questions
        </p>
      )}
    </fieldset>
  );
}
