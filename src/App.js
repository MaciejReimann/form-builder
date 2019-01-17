import React, { Component } from "react";
import "./styles/app.css";

import FormBuilder from "./components/builder/FormBuilder";
import FormViewer from "./components/viewer/FormViewer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      builderView: true,
      formData: ""
    };
  }

  render() {
    const { builderView, formData } = this.state;
    return (
      <div className="app">
        <div className="switch">Switch</div>
        <header className="header" />
        <aside className="side">Side</aside>
        <main className="main">
          {builderView ? (
            <FormBuilder
              onUpdate={formData =>
                this.setState({ formData: JSON.stringify(formData) })
              }
            />
          ) : (
            <FormViewer data={formData} />
          )}
          <button onClick={() => this.setState({ builderView: !builderView })}>
            {builderView === true ? "View Form" : "Edit Form"}
          </button>
        </main>
        <footer className="footer" />
      </div>
    );
  }
}
