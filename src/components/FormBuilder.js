import React, { Component } from "react";

import Fieldset from "./Fieldset";

export default class FormBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      subInputs: []
    };
    this.addRootInput = this.addRootInput.bind(this);
    this.deleteRootInput = this.deleteRootInput.bind(this);
  }
  addInput() {}

  //   addRootInput() {
  //     const { counter, rootInputs } = this.state;
  //     const index = rootInputs.length;
  //     const nextCounter = counter + 1;
  //     this.setState({
  //       counter: nextCounter,
  //       rootInputs: [
  //         ...rootInputs,
  //         <Fieldset
  //           key={nextCounter}
  //           id={nextCounter}
  //           onDelete={() => this.deleteRootInput(nextCounter.toString())}
  //         />
  //       ]
  //     });
  //   }
  //   deleteRootInput(key) {
  //     const { rootInputs } = this.state;
  //     console.log(rootInputs.map(el => el));
  //     const deletedElementIndex = rootInputs.indexOf(
  //       ...rootInputs.filter(el => key === el.key)
  //     );
  //     this.setState({
  //       rootInputs: [
  //         ...rootInputs.slice(0, deletedElementIndex),
  //         ...rootInputs.slice(deletedElementIndex + 1, rootInputs.length)
  //       ]
  //     });
  //   }
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
