import React, { Component } from "react";

import InputGroup from "../presentation/InputGroup";

import lastItemOf from "../../helpers/lastItemOf";
import deleteItemById from "../../helpers/deleteItemById";
import updateItemById from "../../helpers/updateItemById";
import hasObjectValuesChanged from "../../helpers/hasObjectValuesChanged";

export default class InputGroupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      conditionType: "Equals",
      conditionValue: "",
      question: "",
      inputType: "Text",
      subInputs: []
    };
  }

  addSubInputId = () => {
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

  updateSubInput = subInput => {
    this.setState({
      subInputs: [...updateItemById(this.state.subInputs, subInput)]
    });
    this.props.onUpdate(this.state);
  };

  changeValues = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  componentDidUpdate(prevProps, prevState) {
    if (hasObjectValuesChanged(prevState, this.state)) {
      this.props.onUpdate({ ...this.state, position: this.props.position });
    }
  }

  componentDidMount() {
    this.props.onUpdate(this.state);
  }

  render() {
    return (
      <InputGroup
        isNotTopLevel={this.props.position.indexOf(".") !== -1}
        parentinputType={this.props.inputType}
        parentPosition={this.props.position}
        {...this.state}
        onChange={e => this.changeValues(e)}
        onUpdate={this.updateSubInput}
        onAdd={this.addSubInputId}
        onDeleteFromContainer={this.deleteSubInput}
        onDelete={() => this.props.deleteFromParent(this.state.id)}
      />
    );
  }
}
