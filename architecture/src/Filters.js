import React, { Component } from 'react';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.onCheckHandlerChild = this.onCheckHandlerChild.bind(this);
  }
  onCheckHandlerChild(ev) {
    this.props.onCheckHandler(ev);
  }
  /* add isClicked!!!*/
  render() {
    const filters = this.props.allFilters;
    const filtersHtml = filters.map((filter, i) => {
      return (
        <li key={i}>
          <input
            type="checkbox"
            value={filter}
            onChange={this.onCheckHandlerChild}
            checked={this.props.selectedFilters.includes(filter)}
          />
          {filter}
        </li>
      );
    });
    return <ul className="filters-list">{filtersHtml}</ul>;
  }
}

export default Filters;
