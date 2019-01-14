import React, { Component } from "react";
import "./app.css";

import FormBuilder from "./components/FormBuilder";
import FormViewer from "./components/FormViewer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      builderView: true,
      formData: ""
    };
  }

  render() {
    const { builderView } = this.state;
    return (
      <div className="app">
        <header className="header" />
        <main>
          {builderView ? (
            <FormBuilder onUpdate={formData => this.setState({ formData })} />
          ) : (
            <FormViewer />
          )}

          <button onClick={() => this.setState({ builderView: !builderView })}>
            {builderView === true ? "View Form" : "Edit Form"}
          </button>
        </main>
      </div>
    );
  }
}
