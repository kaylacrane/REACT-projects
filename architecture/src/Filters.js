import React, { Component } from 'react';
import FilterByGender from './FilterByGender';
import FilterByCity from './FilterByCity';

class Filters extends Component {
  render() {
    return (
      <div>
        <FilterByGender handleFilters={this.props.handleFilters} />
        <FilterByCity
          cities={this.props.cities}
          handleFilters={this.props.handleFilters}
        />
      </div>
    );
  }
}

export default Filters;
