import React from 'react';
import '../../stylesheets/App.css';
//import club list component
import ClubListFunctional from './ClubListFunctional';
// import json that contains our club data => make sure this is in json format not normal array (add "" around everything!)
import clubsFromApi from './clubs.json';

function AppFunctional(props) {
  return (
    <div className="clubsList">
      {/* linke to club list component */}
      <ClubListFunctional clubsFromApi={clubsFromApi} />
    </div>
  );
}

export default AppFunctional;
