import React from 'react';
import ClubFunctional from './ClubFunctional';

function ClubListFunctional(props) {
  // we take the clubs json data in array form that we receive through props and we create map that runs through entire json data. For each club the map builds the HTML (in this case, it uses another component which represents only one club card or item). This constant clubsHTML is a collection of the HTML and values of all the clubs:
  console.log(props.clubsFromApi);
  const clubsHTML = props.clubsFromApi.map((club, index) => {
    return (
      // the key is necessary for react. We don't use it for anything but it has to be added to repeated elements and it must be a unique number (we can use index or name or another property that is unique)
      <li key={index}>
        <ClubFunctional club={club} />
        {/* club={club} is how we pass the club json data from this component to its child, ClubFunctional. In this case, we are using a map to pass one club at a time instead of the entire json*/}
      </li>
    );
  });
  return <ul>{clubsHTML}</ul>;
  // above we are adding the results from our map which includes the data and html for each club
}

export default ClubListFunctional;
