import React from "react";

export default function QuestionInput({ onChange }) {
  return (
    <p>
      <label>Question:</label>
      <input
        name="question"
        type="text"
        onChange={onChange}
        // value={this.props.values.question}
      />
    </p>
  );
}
