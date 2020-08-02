import React, { Component } from 'react';

class FilterByCity extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.handleFilters({
      value: event.target.value,
      key: 'location',
      checked: event.target.checked,
    });
  }

  render() {
    const citiesHtml = this.props.cities.map((city, index) => {
      return (
        <label key={index} className="display-block">
          <input
            type="checkbox"
            name="location"
            value={city}
            onChange={this.handleChange}
          />
          {city}
        </label>
      );
    });
    return (
      <div>
        <p>Cities:</p>
        {citiesHtml}
      </div>
    );
  }
}

export default FilterByCity;
