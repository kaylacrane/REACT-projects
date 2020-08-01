import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.searchHandlerChild = this.searchHandlerChild.bind(this);
  }
  searchHandlerChild(ev) {
    this.props.searchHandler(ev);
  }
  render() {
    console.log(this.props);
    return (
      <form>
        <label htmlFor="search">Search for a show</label>
        <input
          type="text"
          id="search"
          placeholder="Family Guy"
          onChange={this.searchHandlerChild}
        />
        <label htmlFor="running-filter">
          <input
            type="checkbox"
            id="running-filter"
            checked={this.props.isRunningOnly === true ? true : false}
            onChange={this.isRunningHandlerChild}
          />
        </label>
      </form>
    );
  }
}

export default Search;
