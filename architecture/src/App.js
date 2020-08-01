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
    this.state = {
      profiles: [],
      selectedLocations: [],
      selectedGenders: [],
    };
  }
  componentDidMount() {
    fetchProfiles().then((data) => {
      this.setState({
        profiles: data.results,
        selectedLocations: data.results.map((person) => person.location.city),
        selectedGenders: [],
      });
    });
  }
  handleCities(ev) {
    const selectedCity = ev.currentTarget.value;
    const stateLocations = this.state.selectedLocations;
    /* if checked city is not in selectedLocations(saved filters), then we add it*/
    if (!this.state.selectedLocations) {
      const allCities = this.state.profiles.map(
        (profile) => profile.location.city
      );
      this.setState({ selectedLocations: allCities });
    } else if (this.state.selectedLocations.length === 10) {
      const newLocationsArray = stateLocations.filter(
        (city) => city === selectedCity
      );
      this.setState({ selectedLocations: newLocationsArray });
    } else if (!this.state.selectedLocations.includes(selectedCity)) {
      /* if selected city isn't in state, add it*/
      stateLocations.push(selectedCity);
      this.setState({
        selectedLocations: stateLocations,
      });
    } else if (this.state.selectedLocations.includes(selectedCity)) {
      /*if checked city is already in selectedLocations, we filter out all other cities into a new array and reassign state to that new array value*/
      const newLocationsArray = stateLocations.filter(
        (city) => city !== selectedCity
      );
      this.setState({ selectedLocations: newLocationsArray });
    }
    console.log('this.state=', this.state);
  }
  handleGender(ev) {
    const clickedGender = ev.currentTarget.value;
    console.log('this.state=', this.state);
    const stateGenders = this.state.selectedGenders;
    if (
      (this.state.selectedGenders.length === 0) |
      !this.state.selectedGenders.includes(clickedGender)
    ) {
      /* if checked gender is not in selectedGenders (saved filters), then we add it*/
      stateGenders.push(clickedGender);
      this.setState({
        selectedGenders: stateGenders,
      });
      console.log('stateGenders', stateGenders);
    } else if (
      this.state.selectedGenders.includes(clickedGender) &&
      this.state.selectedGenders.length === 2
    ) {
      const newGenders = stateGenders.filter(
        (gender) => gender === clickedGender
      );
      console.log('newGender', newGenders);
      this.setState({ selectedGenders: newGenders });
    } else if (
      this.state.selectedGenders.includes(clickedGender) &&
      this.state.selectedGenders.length !== 2
    ) {
    }
  }
  render() {
    const cityFilters = this.state.selectedLocations;
    const genderFilters = this.state.selectedGenders;
    const stateProfiles = this.state.profiles;

    const filteredProfiles = stateProfiles
      .filter((profile) => cityFilters.includes(profile.location.city))
      .filter((profile) => genderFilters.includes(profile.gender));
    const arrayCities = this.state.profiles.map(
      (profile) => profile.location.city
    );
    const arrayGenders = Array.from(
      new Set(this.state.profiles.map((profile) => profile.gender))
    );

    return (
      <div>
        <Filters filters={arrayGenders} onCheckHandler={this.handleGender} />

        <Filters filters={arrayCities} onCheckHandler={this.handleCities} />
        <ProfileCard
          profileInfo={
            cityFilters.length === 10 && genderFilters.length === 0
              ? stateProfiles
              : filteredProfiles
          }
        />
      </div>
    );
  }
}

export default App;
