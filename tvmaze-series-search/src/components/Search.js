import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.searchHandlerChild = this.searchHandlerChild.bind(this);
    this.isRunningHandlerChild = this.isRunningHandlerChild.bind(this);
    this.enterHandler = this.enterHandler.bind(this);
  }
  searchHandlerChild(ev) {
    this.props.searchHandler(ev);
  }
  isRunningHandlerChild(ev) {
    this.props.isRunningHandler(ev);
  }
  enterHandler(ev) {
    if (ev.keyCode === 13) {
      ev.preventDefault();
    }
  }
  render() {
    return (
      <form>
        <label htmlFor="search">Search for a show</label>
        <input
          type="text"
          id="search"
          placeholder="Family Guy"
          onChange={this.searchHandlerChild}
          value={this.props.searchValue}
          onKeyDown={this.enterHandler}
        />
        <label htmlFor="running-filter">
          <input
            type="checkbox"
            id="running-filter"
            checked={this.props.isRunningOnly === true ? true : false}
            onChange={this.isRunningHandlerChild}
          />
          Show only currently running shows
        </label>
      </form>
    );
  }
}

export default Search;
