import React, { Component } from "react";
import "./app.css";

import InputGroup from "./components/InputGroup";
import Welcome from "./components/Welcome";

import lastItemOf from "./helpers/lastItemOf";
import deleteItemByKeyValue from "./helpers/deleteItemByKeyValue";

const dataModel = {
  conditionType: "equals",
  conditionValue: "",
  question: "",
  type: "text",
  subInputs: []
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subInputs: []
    };
    this.addInput = this.addInput.bind(this);
    this.deleteInput = this.deleteInput.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(data) {
    // const { subInputs } = this.state;
    // console.log(data);
    // this.setState({
    //   subInputs: [
    //     ...subInputs.slice(0, data.position),
    //     data,
    //     ...subInputs.slice(data.position + 1, subInputs.length)
    //   ]
    // });
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
      subInputs.map((el, i) => (
        <InputGroup
          key={el.key}
          position={i}
          dataPreset={subInputs[i]}
          onUpdate={this.updateState}
          onDelete={this.deleteInput}
        />
      ))
    ) : (
      <Welcome />
    );
    return (
      <div className="app">
        <header className="header" />
        <main>
          <fieldset>
            <legend>Form Builder</legend>
            {inputGroups}
            <button onClick={this.addInput}>Add Input</button>
          </fieldset>
        </main>
      </div>
    );
  }
}

export default App;
