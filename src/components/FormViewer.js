import React, { Component } from "react";

import QuestionInput from "./viewer/QuestionInput";

import findItemByPosition from "../helpers/findItemByPosition";
import InputGroup from "./InputGroup";
// import InputGroup from "./InputGroup";

export default class FormViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: "1",
      example:
        '{"subInputs":[{"id":1,"conditionType":"equals","conditionValue":"","question":"Do you have a car?","type":"text","subInputs":[{"id":1,"conditionType":"equals","conditionValue":"","question":"What color?","type":"text","subInputs":[{"id":1,"conditionType":"equals","conditionValue":"","question":"Do you like white?","type":"text","subInputs":[],"position":"1.1.1"}],"position":"1.1"}],"position":"1"},{"id":2,"conditionType":"equals","conditionValue":"","question":"Do you have a dog?","type":"text","subInputs":[{"id":1,"conditionType":"equals","conditionValue":"","question":"What breed?","type":"text","subInputs":[],"position":"2.1"}],"position":"2"}]}'
    };
    // this.update = this.update.bind(this);
    // this.logExemplaryData = this.logExemplaryData.bind(this);
  }

  //   update() {
  //     const q = findItemByPosition(
  //       JSON.parse(this.state.example).subInputs,
  //       "1.1"
  //     );
  //     console.log(q);
  //   }

  logExemplaryData() {
    // const topLevelQuestions = JSON.parse(this.props.data).subInputs;
    // console.log(this.props.data);
  }

  render() {
    const { currentPosition } = this.state;
    const data = JSON.parse(this.state.example).subInputs;
    const currentQuestionData = findItemByPosition(data, currentPosition);
    const { id, position, question } = currentQuestionData;
    const currentQuestion = (
      <QuestionInput key={id} number={position} question={question} />
    );
    return <div> This is From Viewer: {currentQuestion}</div>;
  }
}
