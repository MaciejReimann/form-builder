import React, { Component } from "react";

import Fieldset from "./Fieldset";

export default class FormBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rootInputs: []
    };
    this.addRootInput = this.addRootInput.bind(this);
  }
  addRootInput() {
    const { rootInputs } = this.state;
    this.setState({
      rootInputs: [...rootInputs, <Fieldset key={rootInputs.length} />]
    });
  }
  render() {
    return (
      <fieldset>
        <legend>Form Builder</legend>
        {this.state.rootInputs}
        <button onClick={this.addRootInput}>Add Input</button>
      </fieldset>
    );
  }
}
