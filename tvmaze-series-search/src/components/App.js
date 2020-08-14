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
    this.copyHandler = this.copyHandler.bind(this);
    this.updateClipboard = this.updateClipboard.bind(this);
    this.state = {
      searchText: 'girls',
      shows: [],
      isRunningOnly: false,
    };
  }
  componentDidMount() {
    fetchShows(this.state.searchText).then((data) => {
      this.setState({ shows: data });
    });
  }
  updateClipboard(newClip) {
    navigator.clipboard.writeText(newClip).then(
      function () {
        alert('Text copied to clipboard');
        // window.confirm("Text copied to clipboard");
      },
      function () {
        /* clipboard write failed */
      }
    );
  }
  copyHandler(ev) {
    const text = ev.currentTarget.innerHTML;
    this.updateClipboard(text);
  }
  searchHandler(ev) {
    const searchInput = ev.currentTarget.value.toLowerCase();
    this.setState({ searchText: searchInput });
    if (searchInput === '') {
      this.setState({ shows: [] });
    } else {
      fetchShows(searchInput).then((data) => {
        this.setState({ shows: data });
      });
    }
  }
  isRunningHandler(ev) {
    this.setState({ isRunningOnly: ev.currentTarget.checked });
  }
  // renderNoSearch)({
  //   if
  // })
  render() {
    const searchText = this.state.searchText;
    const showsList = this.state.shows;

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
        <div>
          <p onClick={this.copyHandler}>Click to copy this text</p>
        </div>
      </div>
    );
  }
}

export default App;
