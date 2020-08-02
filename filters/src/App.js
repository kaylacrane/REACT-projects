import React, { Component } from 'react';
import fetchShows from './services/FetchShows';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      shows: [],
      isRunningOnly: false,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.sortShows = this.sortShows.bind(this);
  }
  componentDidMount() {
    fetchShows().then((data) => {
      // console.log(data);
      this.setState({ shows: data });
    });
  }
  onChangeHandler(event, fieldName, isCheckbox, checkValue) {
    this.setState({
      [fieldName]: isCheckbox ? checkValue : event.currentTarget.value,
    });

    this.sortShows(event, checkValue);
  }
  sortShows(event, checkValue) {
    console.log('checkValue', checkValue);
    let searchInput;
    if (event.currentTarget.value !== 'on') {
      searchInput = event.currentTarget.value;
    } else if (
      event.currentTarget.value === 'on' &&
      this.state.searchText === ''
    ) {
      searchInput = '';
    } else if (
      event.currentTarget.value === 'on' &&
      this.state.searchText !== ''
    ) {
      searchInput = this.state.searchText;
    }

    /*must take search and checkbox value from event because it is the most current value*/
    const isCheckboxValue = checkValue;

    // console.log('state checkbox value', this.state.isRunningOnly);
    const shows = this.state.shows;
    let filteredShows;
    if (isCheckboxValue === true && searchInput === '') {
      filteredShows = shows.filter((show) => show.show.status === 'Running');
    } else if (searchInput !== '' && isCheckboxValue === false) {
      filteredShows = shows.filter((show) =>
        show.show.name.includes(searchInput)
      );
    } else if (isCheckboxValue === true && searchInput !== '') {
      let firstfilter = shows.filter((show) => show.show.status === 'Running');
      filteredShows = firstfilter.filter((show) =>
        show.show.name.includes(searchInput)
      );
    } else if (!isCheckboxValue && searchInput !== '') {
      filteredShows = shows.filter((show) => {
        console.log('show.name', show.show.name);
        show.show.name.toLowerCase().includes(searchInput.toLowerCase());
      });
      console.log(filteredShows);
      console.log('searchInput value', searchInput);
    }
    // if (searchInput !== '' && isCheckboxValue == true) {
    //   console.log('VALUES', searchInput, isCheckboxValue);
    //   filteredShows = shows.filter(
    //     (show) =>
    //       show.show.name.includes(searchInput) && show.show.status === 'Running'
    //   );
    // } else if (!searchInput && isCheckboxValue) {
    //   console.log('VALUES', searchInput, isCheckboxValue);
    //   filteredShows = shows.filter(
    //     (show) => show.show.status === isCheckboxValue
    //   );
    // }

    this.setState({ filteredShows: filteredShows });
    console.log(this.state.filteredShows);
  }
  render() {
    // console.log('this.state', this.state);
    const filteredShows = this.state.filteredShows;
    // console.log('filteredShows', filteredShows);
    const showListHtml = this.state.shows.map((show, i) => {
      return (
        <div key={i}>
          <h2>{show.show.name}</h2>
          <p>{show.show.status}</p>
        </div>
      );
    });
    return (
      <div>
        <form>
          <input
            type="checkbox"
            id="running-filter"
            checked={this.state.isRunningOnly === true ? true : false}
            onChange={(event) =>
              this.onChangeHandler(
                event,
                'isRunningOnly',
                true,
                !this.state.isRunningOnly
              )
            }
          />
        </form>
        {filteredShows
          ? filteredShows.map((show, i) => {
              return (
                <div key={i}>
                  <h2>{show.show.name}</h2>
                  <p>{show.show.status}</p>
                </div>
              );
            })
          : showListHtml}
      </div>
    );
  }
}

export default App;
