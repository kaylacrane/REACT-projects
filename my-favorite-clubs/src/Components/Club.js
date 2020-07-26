import React, { Component } from 'react';

class Club extends Component {
  render() {
    const membersList = this.props.clubInfo.members.map((member, i) => (
      <li key={i}>{member}</li>
    ));
    return (
      <div className="clubCard">
        <i className={`${this.props.clubInfo.fa} clubIcon`}></i>
        <div className="clubDescription">
          <h2 className="clubName">{this.props.clubInfo.name}</h2>
          <p className="members">Members:</p>
          <ul className="memberList">{membersList}</ul>
        </div>
      </div>
    );
  }
}

export default Club;
