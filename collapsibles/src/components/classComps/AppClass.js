import React from 'react';
import '../../stylesheets/App.css';
import clubsFromApi from '../../data/clubs.json';
import List from './ListClass';

class App extends React.Component {
  constructor(props) {
    super(props);
    /*create state for our json data*/
    this.state = { clubs: clubsFromApi, activeCollapsible: '' };
    this.collapsibleHandler = this.collapsibleHandler.bind(this);
  }
  collapsibleHandler(ev) {
    if (ev.currentTarget.id !== this.state.activeCollapsible) {
      this.setState({ activeCollapsible: ev.currentTarget.id });
    } else {
      this.setState({ activeCollapsible: '' });
    }
  }

  render() {
    console.log('active Collapsible', this.state.activeCollapsible);
    return (
      <div>
        <List
          clubs={this.state}
          collapsibleHandler={this.collapsibleHandler}
          activeCollapsible={this.state.activeCollapsible}
        />
      </div>
    );
  }
}

export default App;
