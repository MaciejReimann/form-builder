import React, { Component } from "react";
import "./app.css";

import FormBuilder from "./components/FormBuilder";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <header className="header" />
        <main>
          <FormBuilder />
        </main>
      </div>
    );
  }
}

export default App;
