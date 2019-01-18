import React, { Component } from "react";
import "./styles/app.css";

import Header from "./components/presentation/Header";
import BuilderViewerSwitch from "./components/presentation/BuilderViewerSwitch";
import SideBar from "./components/presentation/SideBar";

import BuilderViewerContainer from "./components/logic/BuilderViewerContainer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      builderView: true
    };
  }

  render() {
    const { builderView } = this.state;
    return (
      <div className="app">
        <BuilderViewerSwitch
          onClick={() => this.setState({ builderView: !builderView })}
          builderView={builderView}
        />
        <Header />
        <SideBar />
        <BuilderViewerContainer builderView={builderView} />
        <footer className="footer" />
      </div>
    );
  }
}
