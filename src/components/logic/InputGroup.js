import React, { Component } from "react";

import InputQuestion from "../presentation/InputQuestion";
import SelectType from "../presentation/SelectType";
import SelectCondition from "../presentation/SelectCondition";

import lastItemOf from "../../helpers/lastItemOf";
import deleteItemById from "../../helpers/deleteItemById";
import updateItemById from "../../helpers/updateItemById";
import hasObjectValuesChanged from "../../helpers/hasObjectValuesChanged";

export default class InputGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      conditionType: "equals",
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

  changeValues = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (hasObjectValuesChanged(prevState, this.state)) {
      this.props.onUpdate({ ...this.state, position: this.props.position });
    }
  }

  componentDidMount() {
    this.props.onUpdate(this.state);
  }

  render() {
    const isNotTopLevel = this.props.position.indexOf(".") !== -1;
    const { subInputs, inputType } = this.state;
    return (
      <fieldset>
        <legend>
          Question no:
          {this.props.position}
        </legend>
        {isNotTopLevel && (
          <SelectCondition parentInput={this.props.inputType} />
        )}

        <InputQuestion
          onChange={e => this.changeValues(e)}
          value={this.state.question}
        />
        <SelectType onChange={this.changeValues} value={inputType} />

        {subInputs.map((subInput, i) => (
          <InputGroup
            key={subInput.id}
            id={subInput.id}
            inputType={inputType}
            position={`${this.props.position}.${i + 1}`}
            onUpdate={this.updateSubInput}
            onDelete={this.deleteSubInput}
          />
        ))}
        <button onClick={this.addSubInputId}>Add Sub-Input</button>
        <button onClick={() => this.props.onDelete(this.state.id)}>
          Delete This
        </button>
      </fieldset>
    );
  }
}
