import React, { Component } from "react";

import QuestionTextInput from "../QuestionTextInput";

import lastItemOf from "../../helpers/lastItemOf";
import deleteItemById from "../../helpers/deleteItemById";
import hasObjectValuesChanged from "../../helpers/hasObjectValuesChanged";

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

  updateSubInput = subInput => {
    this.setState({
      subInputs: [
        ...deleteItemById(this.state.subInputs, subInput.id),
        subInput
      ]
    });
    this.props.onUpdate(this.state);
  };

  changeValues = ({ name, value }) =>
    this.setState({
      [name]: value
    });

  componentDidUpdate(prevProps, prevState) {
    if (hasObjectValuesChanged(prevState, this.state)) {
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
            <option>Equals</option>
          </select>
          <select>
            <option>Yes</option>
            <option>No</option>
          </select>
        </p>
        <QuestionTextInput
          onChange={e => this.changeValues(e.target)}
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
            key={i + 1}
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
