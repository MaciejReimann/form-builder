import React, { Component } from "react";
import "./app.css";

import FormBuilder from "./components/FormBuilder";

class App extends Component {
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
