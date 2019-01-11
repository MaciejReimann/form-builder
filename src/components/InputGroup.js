import React, { Component } from "react";

import QuestionInput from "./QuestionInput";

import lastItemOf from "../helpers/lastItemOf";
import deleteItemByKeyValue from "../helpers/deleteItemByKeyValue";

const dataModel = {
  conditionType: "equals",
  conditionValue: "",
  question: "",
  type: "text",
  subInputs: []
};

export default class InputGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addSubInput = this.addSubInput.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    this.setState(this.props.dataPreset);
  }

  calculatePosition() {
    // return (this.props.position + 1).toString() +
  }

  onChange(e) {
    // // console.log(this.props.values);
    // const { value, name } = e.target;
    // this.setState({
    //   [name]: value
    // });
  }

  addSubInput() {
    const { subInputs } = this.state;
    // Assign value to key if different than default
    let key;
    if (subInputs.length) {
      key = lastItemOf(subInputs).key + 1;
    } else {
      key = 1;
    }
    this.setState({
      subInputs: [...this.state.subInputs, { ...dataModel, key }]
    });
  }

  deleteInput(key) {
    this.setState({
      subInputs: deleteItemByKeyValue(this.state.subInputs, key)
    });
  }

  render() {
    const { subInputs } = this.state;
    const inputGroup = subInputs.map((input, i) => (
      <InputGroup
        key={input.key}
        position={i}
        dataPreset={subInputs[i]}
        onUpdate={this.updateState}
        onDelete={this.deleteInput}
      />
    ));

    return (
      <fieldset>
        <legend>Question no: {this.props.position + 1}</legend>
        <p>
          <label>Conditon:</label>
          <select>
            <option>Equals</option>
          </select>
          <select>
            <option>Yes</option>
            <option>No</option>
          </select>
        </p>
        <QuestionInput />
        <p>
          <label>Type:</label>
          <select>
            <option>Yes / No</option>
            <option>Text</option>
            <option>Number</option>
          </select>
        </p>
        {inputGroup}
        <button onClick={this.addSubInput}>Add Sub-Input</button>
        <button onClick={() => this.props.onDelete(this.state.key)}>
          Delete This
        </button>
      </fieldset>
    );
  }
}
