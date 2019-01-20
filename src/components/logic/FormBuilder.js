import React, { Component } from "react";

import InfiniteForm from "../presentation/InfiniteForm";
import InputGroupContainer from "./InputGroupContainer";

import lastItemOf from "../../helpers/lastItemOf";
import deleteItemById from "../../helpers/deleteItemById";
import updateItemById from "../../helpers/updateItemById";
import hasObjectValuesChanged from "../../helpers/hasObjectValuesChanged";

export default class FormBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subInputs: []
    };
  }

  addInputId = () => {
    const { subInputs } = this.state;
    this.setState({
      subInputs: [
        ...subInputs,
        { id: subInputs.length ? lastItemOf(subInputs).id + 1 : 1 }
      ]
    });
  };

  deleteSubInput = id =>
    this.setState({
      subInputs: deleteItemById(this.state.subInputs, id)
    });

  updateSubInput = subInput =>
    this.setState({
      subInputs: [...updateItemById(this.state.subInputs, subInput)]
    });

  componentDidUpdate(prevProps, prevState) {
    if (hasObjectValuesChanged(prevState, this.state)) {
      this.props.onUpdate(this.state);
    }
  }

  render() {
    return (
      <InfiniteForm
        onAddInput={this.addInputId}
        inputs={this.state.subInputs.map((subInput, i) => (
          <InputGroupContainer
            key={subInput.id}
            id={subInput.id}
            position={`${i + 1}`}
            onUpdate={this.updateSubInput}
            deleteFromParent={this.deleteSubInput}
          />
        ))}
      />
    );
  }
}
