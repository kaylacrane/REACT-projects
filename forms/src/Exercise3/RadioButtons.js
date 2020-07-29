import React, { Component } from 'react';

class RadioButtons extends Component {
  constructor(props) {
    super(props);
    this.handleFormChild = this.handleFormChild.bind(this);
  }

  handleFormChild(ev) {
    this.props.handleForm(ev);
  }

  render() {
    console.log(this.props.formInfo.edad);
    return (
      <fieldset>
        <legend>Age Range</legend>
        <input
          type="radio"
          name="edad"
          id="edad"
          value="A"
          onChange={this.handleFormChild}
          checked={this.props.formInfo.edad === 'A' ? true : false}
        />
        All ages
        <input
          type="radio"
          name="edad"
          id="edad"
          value="7"
          onChange={this.handleFormChild}
          checked={this.props.formInfo.edad === '7' ? true : false}
        />
        7
        <input
          type="radio"
          name="edad"
          id="edad"
          value="12"
          onChange={this.handleFormChild}
          checked={this.props.formInfo.edad === '12' ? true : false}
        />
        12
        <input
          type="radio"
          name="edad"
          id="edad"
          value="16"
          onChange={this.handleFormChild}
          checked={this.props.formInfo.edad === '16' ? true : false}
        />
        16
        <input
          type="radio"
          name="edad"
          id="edad"
          value="18"
          onChange={this.handleFormChild}
          checked={this.props.formInfo.edad === '18' ? true : false}
        />
        18
      </fieldset>
    );
  }
}

export default RadioButtons;
