import React, { Component } from 'react';

class FilterByGender extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.handleFilters({
      value: event.target.value,
      key: 'gender',
    });
  }

  render() {
    return (
      <div className="gender-filter">
        <label className="form__label display-block" htmlFor="gender">
          Gender:
        </label>

        <select
          className="input-text"
          name="gender"
          id="gender"
          onChange={this.handleChange}
        >
          <option value="All">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>
    );
  }
}

export default FilterByGender;
