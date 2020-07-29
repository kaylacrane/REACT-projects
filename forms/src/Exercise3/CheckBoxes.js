import React, { Component } from 'react';

class CheckBoxes extends Component {
  constructor(props) {
    super(props);
    this.handleFormChild = this.handleFormChild.bind(this);
  }

  handleFormChild(ev) {
    this.props.handleForm(ev);
    console.log(this.props.formInfo.genre);
    this.forceUpdate();
  }

  render() {
    return (
      <fieldset>
        <legend>Genre</legend>
        <input
          type="checkbox"
          name="genre"
          value="drama"
          id="genre"
          onChange={this.handleFormChild}
          checked={this.props.formInfo.genre.includes('drama') ? true : false}
        />
        drama
        <input
          type="checkbox"
          name="genre"
          value="comedia"
          id="genre"
          onChange={this.handleFormChild}
          checked={this.props.formInfo.genre.includes('comedia') ? true : false}
        />
        comedia
        <input
          type="checkbox"
          name="genre"
          value="fantasía"
          id="genre"
          onChange={this.handleFormChild}
          checked={
            this.props.formInfo.genre.includes('fantasía') ? true : false
          }
        />
        fantasía
        <input
          type="checkbox"
          name="genre"
          value="acción"
          id="genre"
          onChange={this.handleFormChild}
          checked={this.props.formInfo.genre.includes('acción') ? true : false}
        />
        acción
        <input
          type="checkbox"
          name="genre"
          value="familia"
          id="genre"
          onChange={this.handleFormChild}
          checked={this.props.formInfo.genre.includes('familia') ? true : false}
        />
        familia
        <input
          type="checkbox"
          name="genre"
          value="terror"
          id="genre"
          onChange={this.handleFormChild}
          checked={this.props.formInfo.genre.includes('terror') ? true : false}
        />
        terror
      </fieldset>
    );
  }
}

export default CheckBoxes;
