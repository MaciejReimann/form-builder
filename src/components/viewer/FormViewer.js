import React, { Component } from "react";

import QuestionInput from "./QuestionInput";
import Goodbye from "./Goodbye";

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
      finished: false,
      currentPosition: "1",
      answer: "",
      example:
        '{"subInputs":[{"id":1,"conditionType":"equals","conditionValue":"","question":"1?","type":"text","subInputs":[{"id":1,"conditionType":"equals","conditionValue":"","question":"1.1?","type":"text","subInputs":[{"id":1,"conditionType":"equals","conditionValue":"","question":"1.1.1?","type":"text","subInputs":[],"position":"1.1.1"},{"id":2,"conditionType":"equals","conditionValue":"","question":"1.1.2?","type":"text","subInputs":[],"position":"1.1.2"}],"position":"1.1"}],"position":"1"},{"id":2,"conditionType":"equals","conditionValue":"","question":"2?","type":"text","subInputs":[{"id":1,"conditionType":"equals","conditionValue":"","question":"2.1?","type":"text","subInputs":[],"position":"2.1"},{"id":2,"conditionType":"equals","conditionValue":"","question":"2.2?","type":"text","subInputs":[{"id":1,"conditionType":"equals","conditionValue":"","question":"2.2.1?","type":"text","subInputs":[],"position":"2.2.1"}],"position":"2.2"}],"position":"2"},{"id":3,"conditionType":"equals","conditionValue":"","question":"3?","type":"text","subInputs":[],"position":"3"}]}'
    };
    this.submit = this.submit.bind(this);
  }
  submit(e) {
    e.preventDefault();
    this.next();
  }

  next() {
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
      nextPosition = position;
      this.setState({ finished: true });
    }

    this.setState({ currentPosition: nextPosition });
  }

  getCurrentQuestionData(pos) {
    const data = JSON.parse(this.state.example).subInputs;
    return findItemByPosition(data, pos);
  }

  render() {
    const { finished, currentPosition } = this.state;
    const { id, position, question, subInputs } = this.getCurrentQuestionData(
      currentPosition
    );
    const currentQuestion = (
      <QuestionInput
        key={id}
        position={position}
        question={question}
        answer={this.state.answer}
        onChange={answer => this.setState({ answer })}
        onSubmit={this.submit}
        followups={subInputs}
      />
    );
    return (
      <form onSubmit={e => this.submit(e)}>
        This is From Viewer:
        {finished ? <Goodbye /> : currentQuestion}
      </form>
    );
  }
}
