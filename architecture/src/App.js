import React, { Component } from 'react';
import './App.css';
import Filters from './Filters';
import { fetchProfiles } from './services/ProfilesService';
import ProfileCard from './ProfileCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleCities = this.handleCities.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.setGenders = this.setGenders.bind(this);
    this.state = {
      profiles: [],
      selectedLocations: [],
      selectedGenders: ['male', 'female'],
    };
  }
  componentDidMount() {
    fetchProfiles().then((data) => {
      this.setState({
        profiles: data.results,
        selectedLocations: [],
        selectedGenders: [],
      });
    });
  }
  handleCities(ev) {
    const selectedCity = ev.currentTarget.value;
    const stateLocations = this.state.selectedLocations;
    /* if checked city is not in selectedLocations(saved filters), then we add it*/
    if (!this.state.selectedLocations.includes(selectedCity)) {
      /* if selected city isn't in state, add it*/
      stateLocations.push(selectedCity);
      this.setState({
        selectedLocations: stateLocations,
      });
      console.log(this.state.selectedLocations);
    } else if (this.state.selectedLocations.includes(selectedCity)) {
      /*if checked city is already in selectedLocations, we filter out all other cities into a new array and reassign state to that new array value*/
      const newLocationsArray = stateLocations.filter(
        (city) => city !== selectedCity
      );
      this.setState({ selectedLocations: newLocationsArray });
    }
  }
  handleGender(ev) {
    const stateGenders = this.state.selectedGenders;
    const clickedGender = ev.currentTarget.value;
    if (!stateGenders.includes(clickedGender)) {
      stateGenders.push(clickedGender);
      this.setState({ selectedGenders: stateGenders });
    } else if (stateGenders.includes(clickedGender)) {
      const newGenders = stateGenders.filter(
        (gender) => gender !== clickedGender
      );
      this.setState({ selectedGenders: newGenders });
    }
  }
  setGenders() {
    if (this.state.selectedGenders.length === 0) {
      return ['male', 'female'];
    } else {
      return this.state.selectedGenders;
    }
  }
  setCities() {
    if (this.state.selectedLocations.length === 0) {
      return this.state.profiles.map((profile) => profile.location.city);
    } else {
      return this.state.selectedLocations;
    }
  }

  render() {
    const cityFilters = this.state.selectedLocations;
    const genderFilters = this.state.selectedGenders;
    const stateProfiles = this.state.profiles;
    const arrayGenders = Array.from(
      new Set(this.state.profiles.map((profile) => profile.gender))
    );
    const filteredProfiles = stateProfiles
      .filter((profile) => cityFilters.includes(profile.location.city))
      .filter((profile) => genderFilters.includes(profile.gender));
    const arrayCities = this.state.profiles.map(
      (profile) => profile.location.city
    );

    return (
      <div>
        <Filters
          allFilters={arrayGenders}
          selectedFilters={genderFilters}
          onCheckHandler={this.handleGender}
        />

        <Filters
          allFilters={arrayCities}
          selectedFilters={cityFilters}
          onCheckHandler={this.handleCities}
        />
        <ProfileCard
          profileInfo={
            cityFilters.length === 0 && genderFilters.length === 0
              ? stateProfiles
              : filteredProfiles
          }
        />
      </div>
    );
  }
}

export default App;
