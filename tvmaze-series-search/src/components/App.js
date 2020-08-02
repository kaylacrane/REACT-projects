import React from 'react';
import '../stylesheets/App.css';
import fetchShows from '../services/FetchShows';
import ShowList from './ShowList';
import jsonShows from '../services/shows.json';
import Search from './Search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.searchHandler = this.searchHandler.bind(this);
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

  render() {
    console.log(this.state.shows);
    const searchText = this.state.searchText;
    console.log('searchText', searchText);
    const showsList = this.state.shows;
    console.log(showsList);
    const filteredShows = showsList.filter((show) =>
      show.show.name.toLowerCase().includes(searchText)
    );
    console.log('filteredShows', filteredShows);
    return (
      <div>
        <Search
          searchHandler={this.searchHandler}
          searchValue={this.state.searchText}
          isRunningOnly={this.state.isRunningOnly}
        />
        <ShowList shows={searchText === '' ? showsList : filteredShows} />
      </div>
    );
  }
}

export default App;
