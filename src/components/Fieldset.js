import React, { Component } from "react";

// import Fieldset from "./Fieldset";

export default class Fieldset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subInputs: []
    };
    this.addSubInput = this.addSubInput.bind(this);
  }
  addSubInput() {
    const { subInputs } = this.state;
    this.setState({
      subInputs: [...subInputs, <Fieldset key={subInputs.length} />]
    });
  }

  render() {
    return (
      <fieldset>
        {this.state.subInputs}
        <button onClick={this.addSubInput}>Add Sub-Input</button>
      </fieldset>
    );
  }
}
