import React, { Component } from "react";

import AppLayout from "../presentation/AppLayout";
import FormBuilder from "./FormBuilder";
import FormViewer from "./FormViewer";

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnPreview: true,
      data: ""
    };
  }

  render() {
    const { isOnPreview, data } = this.state;
    return (
      <AppLayout
        isOnPreview={isOnPreview}
        onSwitchClick={() => this.setState({ isOnPreview: !isOnPreview })}
      >
        {isOnPreview ? (
          <FormBuilder
            onUpdate={data => this.setState({ data: JSON.stringify(data) })}
          />
        ) : (
          <FormViewer data={data} />
        )}
      </AppLayout>
    );
  }
}
