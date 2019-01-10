import React, { Component } from "react";

export default class Fieldset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      uniqueKey: 0,
      conditionType: "equals",
      conditionValue: "",
      question: "",
      type: "text",
      subInputs: []
    };
    this.addSubInput = this.addSubInput.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    // console.log(this.props.values);
    const { value, name } = e.target;
    this.props.onUpdate({ ...this.props.values, [name]: value });
  }

  addSubInput() {
    this.setState({
      uniqueKey: this.state.uniqueKey + 1,
      subInputs: [
        ...this.state.subInputs,
        {
          uniqueKey: this.state.uniqueKey + 1,
          conditionType: "equals",
          conditionValue: "",
          question: "",
          type: "text",
          subInputs: []
        }
      ]
    });
    // this.props.onChange();
  }

  render() {
    return (
      <fieldset>
        <legend>Question no: {this.props.base}</legend>
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
        <p>
          <label>Question:</label>
          <input
            name="question"
            type="text"
            onChange={this.onChange}
            value={this.props.values.question}
          />
        </p>
        <p>
          <label>Type:</label>
          <select>
            <option>Yes / No</option>
            <option>Text</option>
            <option>Number</option>
          </select>
        </p>
        {this.state.subInputs.map(id => (
          <Fieldset key={this.state.uniqueKey} />
        ))}
        <button onClick={this.addSubInput}>Add Sub-Input</button>
        <button
          onClick={() => this.props.onDelete(this.props.values.uniqueKey)}
        >
          Delete This
        </button>
      </fieldset>
    );
  }
}
