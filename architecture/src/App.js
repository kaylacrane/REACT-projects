import React, { Component } from 'react';
import './App.css';
import Filters from './Filters';
import { fetchProfiles } from './services/ProfilesService';
import ProfileCard from './ProfileCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleFilters = this.handleFilters.bind(this);
    this.state = {
      profiles: [],
      cityFilter: [],
      genderFilter: 'All',
    };
  }
  componentDidMount() {
    fetchProfiles().then((data) => {
      this.setState({
        profiles: data.results,
      });
    });
  }
  handleFilters(data) {
    if (data.key === 'location') {
      if (data.checked === true) {
        const newCityFilters = [...this.state.cityFilter, data.value];
        this.setState({ cityFilter: newCityFilters });
      } else {
        const newCityFilters = this.state.cityFilter.filter(
          (city) => city !== data.value
        );
        this.setState({ cityFilter: newCityFilters });
      }
    } else if (data.key === 'gender') {
      this.setState({ genderFilter: data.value });
    }
  }
  render() {
    console.log(this.state);
    const cities = this.state.profiles.map((profile) => profile.location.city);
    const filteredUsers = this.state.profiles
      .filter((user) => {
        return this.state.genderFilter !== 'All'
          ? user.gender === this.state.genderFilter
          : true;
      })
      .filter((user) => {
        console.log(this.state.cityFilter.length);
        if (this.state.cityFilter.length !== 0) {
          return this.state.cityFilter.includes(user.location.city);
        } else {
          return true;
        }
      });
    return (
      <div>
        <Filters handleFilters={this.handleFilters} cities={cities} />
        <ProfileCard profiles={filteredUsers} />
      </div>
    );
  }
}

export default App;
