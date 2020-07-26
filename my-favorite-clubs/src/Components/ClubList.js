import React, { Component } from 'react';
import Club from './Club';

class ClubList extends Component {
  render() {
    const clubsHtml = this.props.clubs.map((club, i) => (
      <Club key={i} clubInfo={club} />
    ));
    return <div className="clubsList">{clubsHtml}</div>;
  }
}

export default ClubList;
