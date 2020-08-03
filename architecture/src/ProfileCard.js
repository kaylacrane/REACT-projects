import React, { Component } from 'react';

class ProfileCard extends Component {
  render() {
    const profiles = this.props.profiles;
    const oneProfile = profiles.map((profile, i) => {
      const { picture, name, location, email, dob } = profile;
      return (
        <div className="profile-card" key={i}>
          <img src={picture.large} alt="profile" className="photo" />
          <h2 className="name">{`${name.first} ${name.last}`}</h2>
          <div className="details">
            <p className="city">{`${location.city}, ${location.state} - ${location.country}`}</p>
            <a href={`mailto: ${email}`} className="email">
              email
            </a>
            <p className="age">{`${dob.age} years old`}</p>
          </div>
        </div>
      );
    });
    return <div className="profiles-list">{oneProfile} </div>;
  }
}

export default ProfileCard;
