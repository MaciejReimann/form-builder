import React, { Component } from "react";

import QuestionInput from "./QuestionInput";

import findItemByPosition from "../../helpers/findItemByPosition";
import nextOnDeeperLevel from "../../helpers/nextOnDeeperLevel";
import nextOnTheSameLevel from "../../helpers/nextOnTheSameLevel";

// import shallowIndex from "../helpers/shallowIndex";

// import InputGroup from "./InputGroup";
// import InputGroup from "./InputGroup";

export default class FormViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: "1",
      answer: "",
      example:
        '{"subInputs":[{"id":1,"conditionType":"equals","conditionValue":"","question":"Do you have a license?","type":"text","subInputs":[],"position":"1"},{"id":3,"conditionType":"equals","conditionValue":"","question":"Do you have family?","type":"text","subInputs":[],"position":"3"},{"id":2,"conditionType":"equals","conditionValue":"","question":"Do you have a car?","type":"text","subInputs":[{"id":2,"conditionType":"equals","conditionValue":"","question":"What brand?","type":"text","subInputs":[],"position":"2.2"},{"id":1,"conditionType":"equals","conditionValue":"","question":"What color?","type":"text","subInputs":[{"id":1,"conditionType":"equals","conditionValue":"","question":"Do you like white?","type":"text","subInputs":[],"position":"2.2.1"}],"position":"2.2"}],"position":"2"}]}'
    };
    this.next = this.next.bind(this);
  }

  next(e) {
    e.preventDefault();

    let nextPosition;
    const { position, subInputs } = this.getCurrentQuestionData(
      this.state.currentPosition
    );
    const canGoDeeper = subInputs.length > 0;
    const canGoFurther =
      this.getCurrentQuestionData(nextOnTheSameLevel(position)) !== undefined;

    if (canGoDeeper) {
      nextPosition = nextOnDeeperLevel(position);
    } else if (canGoFurther) {
      nextPosition = nextOnTheSameLevel(position);
    } else {
      console.log("going up");
    }

    this.setState({ currentPosition: nextPosition });
  }

  getCurrentQuestionData(pos) {
    const data = JSON.parse(this.state.example).subInputs;
    return findItemByPosition(data, pos);
  }

  render() {
    const { id, position, question, subInputs } = this.getCurrentQuestionData(
      this.state.currentPosition
    );
    const currentQuestion = (
      <QuestionInput
        key={id}
        number={position}
        question={question}
        answer={this.state.answer}
        onChange={answer => this.setState({ answer })}
        onSubmit={this.next}
        followups={subInputs}
      />
    );
    return (
      <form onSubmit={e => this.next(e)}>
        This is From Viewer:
        {currentQuestion}
      </form>
    );
  }
}
