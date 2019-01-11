import React, { Component } from "react";

// import lastItemOf from "../helpers/lastItemOf";
import QuestionInput from "./QuestionInput";

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

  onChange(e) {
    // // console.log(this.props.values);
    // const { value, name } = e.target;
    // this.setState({
    //   [name]: value
    // });
  }

  addSubInput() {
    // this.setState({
    //   uniqueKey: this.state.uniqueKey + 1,
    //   subInputs: [
    //     ...this.state.subInputs,
    //     {
    //       uniqueKey: this.state.uniqueKey + 1,
    //       conditionType: "equals",
    //       conditionValue: "",
    //       question: "",
    //       type: "text",
    //       subInputs: []
    //     }
    //   ]
    // });
  }

  render() {
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
        {/* {this.state.subInputs.map(id => (
          <InputGroup key={this.state.uniqueKey} />
        ))} */}
        <button onClick={this.addSubInput}>Add Sub-Input</button>
        <button onClick={() => this.props.onDelete(this.state.key)}>
          Delete This
        </button>
      </fieldset>
    );
  }
}
