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
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              onChange={this.handleFormChild}
              value={this.props.formInfo.name}
            />
          </label>
          <label htmlFor="description">
            Description
            <textarea
              id="description"
              onChange={this.handleFormChild}
              value={this.props.formInfo.description}
            />
          </label>
          <label htmlFor="language">
            Choose a language
            <select
              name="language"
              id="language"
              onChange={this.handleFormChild}
              value={this.props.formInfo.language}
            >
              <option value="" defaultValue disabled>
                Select one
              </option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="portuguese">Portuguese</option>
            </select>
          </label>
        </form>

        <div className="card">
          <span>Name:</span>
          <div className="name">{this.props.formInfo.name}</div>
          <span>Description:</span>
          <div className="description">{this.props.formInfo.description}</div>
          <span>Language:</span>
          <div className="language">{this.props.formInfo.language}</div>
        </div>
        <form className="form">
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              value={this.props.formInfo.name}
              readOnly
            />
          </label>
          <label htmlFor="description">
            Description
            <textarea
              readOnly
              id="description"
              value={this.props.formInfo.description}
            />
          </label>
          <label htmlFor="language">
            Choose a language
            <select
              name="language"
              id="language"
              value={this.props.formInfo.language}
              readOnly
            >
              <option value="select one" disabled>
                Select one
              </option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="portuguese">Portuguese</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
