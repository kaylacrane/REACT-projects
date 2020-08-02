import React from 'react';
import '../stylesheets/App.css';
import fetchShows from '../services/FetchShows';
import ShowList from './ShowList';
// import jsonShows from '../services/shows.json';
import Search from './Search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.searchHandler = this.searchHandler.bind(this);
    this.isRunningHandler = this.isRunningHandler.bind(this);
    this.state = {
      searchText: '',
      shows: [],
      isRunningOnly: false,
    };
  }
  componentDidMount() {
    fetchShows().then((data) => {
      console.log(data);
      this.setState({ shows: data });
    });
  }
  searchHandler(ev) {
    const searchInput = ev.currentTarget.value.toLowerCase();
    this.setState({ searchText: searchInput });
  }
  isRunningHandler(ev) {
    this.setState({ isRunningOnly: ev.currentTarget.checked });
  }
  render() {
    console.log(this.state.shows);
    const searchText = this.state.searchText;
    console.log('searchText', searchText);
    const showsList = this.state.shows;
    console.log(showsList);
    const filteredShows = showsList
      .filter((show) =>
        this.state.searchText
          ? show.show.name.toLowerCase().includes(searchText)
          : true
      )
      .filter((show) =>
        this.state.isRunningOnly === true
          ? show.show.status === 'Running'
          : true
      );
    console.log('filteredShows', filteredShows);
    return (
      <div>
        <div className="results">{`${
          filteredShows ? filteredShows.length : showsList.length
        } shows found`}</div>
        <Search
          searchHandler={this.searchHandler}
          searchValue={this.state.searchText}
          isRunningOnly={this.state.isRunningOnly}
          isRunningHandler={this.isRunningHandler}
        />
        <ShowList shows={!filteredShows ? showsList : filteredShows} />
      </div>
    );
  }
}

export default App;
