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
          <input
            type="radio"
            name="edad"
            id="edad"
            value="A"
            onChange={this.handleFormChild}
            checked={this.props.edad === this.props.id ? true : false}
          />
          All ages
          <input
            type="radio"
            name="edad"
            id="edad"
            value="7"
            onChange={this.handleFormChild}
            checked={this.props.edad === this.props.id ? true : false}
          />
          7
          <input
            type="radio"
            name="edad"
            id="edad"
            value="12"
            onChange={this.handleFormChild}
            checked={this.props.edad === this.props.id ? true : false}
          />
          12
          <input
            type="radio"
            name="edad"
            id="edad"
            value="16"
            onChange={this.handleFormChild}
            checked={this.props.edad === this.props.id ? true : false}
          />
          16
          <input
            type="radio"
            name="edad"
            id="edad"
            value="18"
            onChange={this.handleFormChild}
            checked={this.props.edad === this.props.id ? true : false}
          />
          18
          <input
            type="checkbox"
            name="genre"
            value="drama"
            onChange={this.handleFormChild}
          />
          drama
          <input
            type="checkbox"
            name="genre"
            value="comedia"
            onChange={this.handleFormChild}
          />
          comedia
          <input
            type="checkbox"
            name="genre"
            value="fantasía"
            onChange={this.handleFormChild}
          />
          fantasía
          <input
            type="checkbox"
            name="genre"
            value="acción"
            onChange={this.handleFormChild}
          />
          acción
          <input
            type="checkbox"
            name="genre"
            value="familia"
            onChange={this.handleFormChild}
          />
          familia
          <input
            type="checkbox"
            name="genre"
            value="terror"
            onChange={this.handleFormChild}
          />
          terror
        </form>

        <div className="card">
          <span>Name:</span>
          <div className="name">{this.props.formInfo.email}</div>
          <span>Job:</span>
          <div className="description">{this.props.formInfo.job}</div>

          <span>Age:</span>
          <div className="age">{this.props.formInfo.edad}</div>
        </div>
      </div>
    );
  }
}

export default Form;
