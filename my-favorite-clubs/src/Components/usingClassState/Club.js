import React, { Component } from 'react';

class Club extends Component {
  render() {
    // below is a constant that uses a map method to create the HTML for each member in the members list
    const membersList = this.props.clubInfo.members.map((member, i) => (
      <li key={i}>{member}</li>
    ));
    // below is how we build the HTML for each individual club. We use the club data passed down through props
    return (
      <div className="clubCard">
        <i className={`${this.props.clubInfo.fa} clubIcon`}></i>
        <div className="clubDescription">
          <h2 className="clubName">{this.props.clubInfo.name}</h2>
          <p className="members">Members:</p>
          {/* {membersList} does not come from props. It is generated through the map method above in render() */}
          <ul className="memberList">{membersList}</ul>
        </div>
      </div>
    );
  }
}

export default Club;
