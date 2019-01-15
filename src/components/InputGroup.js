import React, { Component } from "react";

import QuestionInput from "./QuestionInput";

import lastItemOf from "../helpers/lastItemOf";
import deleteItemById from "../helpers/deleteItemById";

export default class InputGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      conditionType: "equals",
      conditionValue: "",
      question: "",
      type: "text",
      subInputs: []
    };
    this.addSubInputId = this.addSubInputId.bind(this);
    this.deleteSubInput = this.deleteSubInput.bind(this);
    this.updateSubInput = this.updateSubInput.bind(this);
    this.changeValues = this.changeValues.bind(this);
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
    this.props.onUpdate(this.state);
  }

  changeValues(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const hasInputValuesChanged = Object.values(prevState).some(
      (value, i) => value !== Object.values(this.state)[i]
    );
    if (hasInputValuesChanged) {
      this.props.onUpdate({ ...this.state, position: this.props.position });
    }
  }

  componentDidMount() {
    this.props.onUpdate(this.state);
  }

  render() {
    const { subInputs } = this.state;
    return (
      <fieldset>
        <legend>Question no: {this.props.position}</legend>
        <p>
          <label>Conditon:</label>
          <select>
            ;<option>Equals</option>
          </select>
          <select>
            <option>Yes</option>
            <option>No</option>
          </select>
        </p>
        <QuestionInput
          onChange={e => this.changeValues(e)}
          value={this.state.question}
        />
        <p>
          <label>Type:</label>
          <select>
            <option>Yes / No</option>
            <option>Text</option>
            <option>Number</option>
          </select>
        </p>
        {subInputs.map((subInput, i) => (
          <InputGroup
            key={subInput.id}
            id={subInput.id}
            position={`${this.props.position}.${i + 1}`}
            onUpdate={this.updateSubInput}
            onDelete={this.deleteSubInput}
          />
        ))}
        <button onClick={this.addSubInputId}>Add Sub-Input</button>
        <button onClick={() => this.props.onDelete(this.state.id)}>
          Delete This
        </button>
      </fieldset>
    );
  }
}
