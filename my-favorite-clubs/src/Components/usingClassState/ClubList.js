import React, { Component } from 'react';
import Club from './Club';

class ClubList extends Component {
  render() {
    // below we create a constant that collects the HTML structure for all the clubs. The HTML is built by a map method that passes individual club data to the club component (child) one by one. The key is necessary because the club component is repeated and  React wants unique data for repeated elements. We can use index for this.
    const clubsHtml = this.props.clubs.map((club, index) => (
      <Club key={index} clubInfo={club} />
    ));
    // we return the constant with HTML structure and values for all the clubs. We insert it inside a div so we don't get an error about objects not allowed in the return of a render:
    return <div className="clubsList">{clubsHtml}</div>;
  }
}

export default ClubList;
