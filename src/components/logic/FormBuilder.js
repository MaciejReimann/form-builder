import React, { Component } from "react";

import InfiniteForm from "../presentation/InfiniteForm";

import InputGroup from "./InputGroup";
import Welcome from "./Welcome";

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
    const { subInputs } = this.state;
    const inputGroups = subInputs.length ? (
      subInputs.map((subInput, i) => (
        <InputGroup
          key={subInput.id}
          id={subInput.id}
          position={`${i + 1}`}
          onUpdate={this.updateSubInput}
          onDelete={this.deleteSubInput}
        />
      ))
    ) : (
      <Welcome />
    );
    return <InfiniteForm onAddInput={this.addInputId} inputs={inputGroups} />;
  }
}
