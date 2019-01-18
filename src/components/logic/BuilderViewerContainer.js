import React, { Component } from "react";

import FormBuilder from "./FormBuilder";
import FormViewer from "./FormViewer";

export default class BuilderViewerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { formData: "" };
  }

  render() {
    const { formData } = this.state;
    return (
      <main className="main">
        {this.props.builderView ? (
          <FormBuilder
            onUpdate={data => this.setState({ formData: JSON.stringify(data) })}
          />
        ) : (
          <FormViewer data={formData} />
        )}
      </main>
    );
  }
}
