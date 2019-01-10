import React, { Component } from "react";
import "./app.css";

import Fieldset from "./components/Fieldset";
import Welcome from "./components/Welcome";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueKey: 0,
      subInputs: []
    };
    this.addInput = this.addInput.bind(this);
    this.deleteInput = this.deleteInput.bind(this);
    this.update = this.update.bind(this);
  }

  update(data) {
    const { subInputs } = this.state;
    console.log(data);
    this.setState({
      subInputs: [
        ...subInputs.slice(0, data.position),
        data,
        ...subInputs.slice(data.position + 1, subInputs.length)
      ]
    });
  }

  addInput() {
    this.setState({
      uniqueKey: this.state.uniqueKey + 1,
      subInputs: [
        ...this.state.subInputs,
        {
          position: this.state.subInputs.length,
          uniqueKey: this.state.uniqueKey + 1,
          conditionType: "equals",
          conditionValue: "",
          question: "",
          type: "text",
          subInputs: []
        }
      ]
    });
  }

  deleteInput(key) {
    const { subInputs } = this.state;
    const deletedElementIndex = subInputs.indexOf(
      ...subInputs.filter(input => key === input.uniqueKey)
    );
    this.setState({
      subInputs: [
        ...subInputs.slice(0, deletedElementIndex),
        ...subInputs.slice(deletedElementIndex + 1, subInputs.length)
      ]
    });
  }

  render() {
    const fieldsets =
      this.state.subInputs.length > 0 ? (
        this.state.subInputs.map((el, i) => (
          <Fieldset
            key={el.uniqueKey}
            onUpdate={this.update}
            onDelete={this.deleteInput}
            values={this.state.subInputs[i]}
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
            {fieldsets}
            <button onClick={this.addInput}>Add Input</button>
          </fieldset>
        </main>
      </div>
    );
  }
}

export default App;
