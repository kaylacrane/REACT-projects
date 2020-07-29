import React, { Component } from 'react';

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
        </form>

        <div className="card">
          <span>Name:</span>
          <div className="name">{this.props.formInfo.email}</div>
          <span>Job:</span>
          <div className="description">{this.props.formInfo.job}</div>
        </div>
      </div>
    );
  }
}

export default Form;
