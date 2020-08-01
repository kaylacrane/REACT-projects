import React, { Component } from 'react';

class ProfileCard extends Component {
  render() {
    const profiles = this.props.profileInfo;
    const oneProfile = profiles.map((profile, i) => {
      const { picture, name, location, email, dob } = profile;
      return (
        <div className="profile-card" key={i}>
          <img src={picture.large} alt="profile" />
          <h2 className="name">{`${name.first} ${name.last}`}</h2>
          <p>{`${location.city}, ${location.state} - ${location.country}`}</p>
          <p>{email}</p>
          <p>{`${dob.age} years old`}</p>
        </div>
      );
    });
    return <>{oneProfile} </>;
  }
}

export default ProfileCard;
