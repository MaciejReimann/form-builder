import React, { Component } from "react";

import InputGroup from "./InputGroup";
import Welcome from "./Welcome";

import lastItemOf from "../helpers/lastItemOf";
import deleteItemByKeyValue from "../helpers/deleteItemByKeyValue";

import dataModel from "../dataModel";

export default class FormBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subInputs: []
    };
    this.addInput = this.addInput.bind(this);
    this.deleteInput = this.deleteInput.bind(this);
  }

  addInput() {
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
    const inputGroups = subInputs.length ? (
      subInputs.map((input, i) => (
        <InputGroup
          key={input.key}
          position={i + 1}
          dataPreset={subInputs[i]}
          onUpdate={this.updateState}
          onDelete={this.deleteInput}
        />
      ))
    ) : (
      <Welcome />
    );
    return (
      <fieldset>
        <legend>Form Builder</legend>
        {inputGroups}
        <button onClick={this.addInput}>Add Input</button>
      </fieldset>
    );
  }
}
