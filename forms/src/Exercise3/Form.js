import React, { Component } from 'react';
import RadioButtons from './RadioButtons';
import CheckBoxes from './CheckBoxes';

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleFormChild = this.handleFormChild.bind(this);
  }

  handleFormChild(ev) {
    this.props.handleForm(ev);
    console.log(this.props.formInfo);
  }
  render() {
    console.log(this.props.formInfo);
    return (
      <div>
        <form className="form">
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              onChange={this.handleFormChild}
              value={this.props.formInfo.email}
            />
          </label>
          <label htmlFor="job">
            Job
            <input
              type="text"
              id="job"
              onChange={this.handleFormChild}
              value={this.props.formInfo.job}
            />
          </label>
          <RadioButtons
            handleForm={this.props.handleForm}
            formInfo={this.props.formInfo}
          />
          <CheckBoxes
            handleForm={this.props.handleForm}
            formInfo={this.props.formInfo}
          />

          <div className="card">
            <span>Name:</span>
            <div className="name">{this.props.formInfo.email}</div>
            <span>Job:</span>
            <div className="description">{this.props.formInfo.job}</div>

            <span>Age:</span>
            <div className="age">{this.props.formInfo.edad}</div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
