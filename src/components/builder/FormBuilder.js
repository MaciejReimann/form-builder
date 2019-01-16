import React, { Component } from "react";

import InputGroup from "./InputGroup";
import Welcome from "./Welcome";

import lastItemOf from "../../helpers/lastItemOf";
import deleteItemById from "../../helpers/deleteItemById";

export default class FormBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subInputs: []
    };
    this.addSubInputId = this.addSubInputId.bind(this);
    this.deleteSubInput = this.deleteSubInput.bind(this);
    this.updateSubInput = this.updateSubInput.bind(this);
  }

  addSubInputId() {
    const { subInputs } = this.state;
    const nextId = subInputs.length ? lastItemOf(subInputs).id + 1 : 1;
    this.setState({
      subInputs: [...subInputs, { id: nextId }]
    });
  }

  deleteSubInput(id) {
    this.setState({
      subInputs: deleteItemById(this.state.subInputs, id)
    });
  }

  updateSubInput(subInput) {
    this.setState({
      subInputs: [
        ...deleteItemById(this.state.subInputs, subInput.id),
        subInput
      ]
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const hasInputValuesChanged = Object.values(prevState).some(
      (value, i) => value !== Object.values(this.state)[i]
    );
    if (hasInputValuesChanged) {
      this.props.onUpdate(this.state);
    }
  }

  render() {
    const { subInputs } = this.state;
    const inputGroups = subInputs.length ? (
      subInputs.map((subInput, i) => (
        <InputGroup
          key={i + 1}
          id={subInput.id}
          position={`${i + 1}`}
          onUpdate={this.updateSubInput}
          onDelete={this.deleteSubInput}
        />
      ))
    ) : (
      <Welcome />
    );
    return (
      <fieldset>
        <legend>Form Builder</legend>
        {inputGroups}
        <button onClick={this.addSubInputId}>Add Input</button>
      </fieldset>
    );
  }
}
