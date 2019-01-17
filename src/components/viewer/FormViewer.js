import React, { Component } from "react";

import QuestionInput from "./QuestionInput";
import Goodbye from "./Goodbye";

import findItemByPosition from "../../helpers/findItemByPosition";
import nextOnDeeperLevel from "../../helpers/nextOnDeeperLevel";
import nextOnTheSameLevel from "../../helpers/nextOnTheSameLevel";
import nextOnShallowerLevel from "../../helpers/nextOnShallowerLevel";

export default class FormViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noMoreQuestions: false,
      position: "1",
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
    const { position, noMoreQuestions } = this.state;
    const can = n => this.getCurrentQuestionData(n);
    const goDeeper = nextOnDeeperLevel(position);
    const goFurther = nextOnTheSameLevel(position);
    const goShallower = pos => {
      const shallow = nextOnShallowerLevel(pos);
      if (can(shallow)) {
        return shallow;
      } else if (shallow === "") {
        this.setState({ noMoreQuestions: true });
      } else if (!noMoreQuestions) {
        return goShallower(shallow);
      }
    };

    if (can(goDeeper)) {
      this.setState({ position: goDeeper });
    } else if (can(goFurther)) {
      this.setState({ position: goFurther });
    } else {
      this.setState({ position: goShallower(position) });
    }
  }

  getCurrentQuestionData(pos) {
    const data = JSON.parse(this.state.example).subInputs;
    return findItemByPosition(data, pos);
  }

  render() {
    const { noMoreQuestions, position } = this.state;
    const current = this.getCurrentQuestionData(position);
    return (
      <form onSubmit={e => this.submit(e)}>
        This is From Viewer:
        {noMoreQuestions ? (
          <Goodbye />
        ) : (
          <QuestionInput
            key={current.id}
            position={current.position}
            question={current.question}
            answer={this.state.answer}
            onChange={answer => this.setState({ answer })}
            onSubmit={this.submit}
            followups={current.subInputs}
          />
        )}
      </form>
    );
  }
}
