import React, { Component } from "react";

import QuestionInput from "./QuestionInput";

import lastItemOf from "../helpers/lastItemOf";
import deleteItemByKeyValue from "../helpers/deleteItemByKeyValue";

import dataModel from "../dataModel";

export default class InputGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addSubInput = this.addSubInput.bind(this);
    this.deleteSubInput = this.deleteSubInput.bind(this);
    this.sendStateUp = this.sendStateUp.bind(this);
  }

  componentDidMount() {
    this.setState(this.props.dataPreset);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   this.sendStateUp(this.state);
  // }

  updateState(data, position) {
    const { subInputs } = this.state;
    console.log(data, position);
    this.setState({
      subInputs: [
        ...subInputs.slice(0, position),
        data,
        ...subInputs.slice(position + 1, subInputs.length)
      ]
    });
  }

  sendStateUp(data, position) {
    // console.log(data);
    this.props.onUpdate(data, position);
    // this.props.onUpdate(`${this.props.position}.subinputs: ${data.length}`);
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
      subInputs: [...subInputs, { ...dataModel, key }]
    });
    this.sendStateUp(this.state, this.props.position - 1);
    console.log("added from input");
  }

  deleteSubInput(key) {
    this.setState({
      subInputs: deleteItemByKeyValue(this.state.subInputs, key)
    });
    // this.sendStateUp(this.state.subInputs);
    // this is not fired from level 0, no sense to send state Up from here?
    console.log("deleted from input");
  }

  render() {
    const { subInputs } = this.state;
    const inputGroup = subInputs
      ? subInputs.map((input, i) => (
          <InputGroup
            key={input.key}
            position={`${this.props.position}.${i + 1}`}
            dataPreset={subInputs[i]}
            onUpdate={this.sendStateUp}
            onDelete={this.deleteSubInput}
          />
        ))
      : null;

    return (
      <fieldset>
        <legend>Question no: {this.props.position}</legend>
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
