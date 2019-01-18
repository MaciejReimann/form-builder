import React, { Component } from "react";

import InputGroup from "./InputGroup";
import Welcome from "./Welcome";

import lastItemOf from "../../helpers/lastItemOf";
import deleteItemById from "../../helpers/deleteItemById";
import hasObjectValuesChanged from "../../helpers/hasObjectValuesChanged";

export default class FormBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subInputs: []
    };
  }

  addSubInputId = () =>
    this.setState({
      subInputs: [
        ...this.state.subInputs,
        {
          id: this.state.subInputs.length
            ? lastItemOf(this.state.subInputs).id + 1
            : 1
        }
      ]
    });

  deleteSubInput = id =>
    this.setState({
      subInputs: deleteItemById(this.state.subInputs, id)
    });

  updateSubInput = subInput =>
    this.setState({
      subInputs: [
        ...deleteItemById(this.state.subInputs, subInput.id),
        subInput
      ]
    });

  componentDidUpdate(prevProps, prevState) {
    if (hasObjectValuesChanged(prevState, this.state)) {
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
