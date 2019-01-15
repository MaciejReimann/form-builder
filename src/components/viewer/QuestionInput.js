import React, { Component } from "react";

export default class QuestionInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: ""
    };
  }
  render() {
    const { question, followingQuestions, number, onAnswer } = this.props;
    const { answer } = this.state;
    return (
      <fieldset>
        <legend>Question: {number}</legend>
        <label>{question}</label>
        <input
          type="text"
          value={answer}
          onChange={e => this.setState({ answer: e.target.value })}
        />
        <button onClick={onAnswer}>Submit</button>
        {followingQuestions}
      </fieldset>
    );
  }
}
