import React from 'react';
import '../stylesheets/App.css';
import ClubList from './ClubList';
// we place our club data in the abuela component App and pass it down through props
const clubs = [
  {
    name: 'Book club',
    fa: 'fas fa-glasses',
    members: [
      'Rosalie Bradley',
      'Lula Day',
      'Hallie Bryant',
      'Antonio Martin',
      'Polly Nelson',
    ],
  },
  {
    name: 'Chess club',
    fa: 'fas fa-chess',
    members: [
      'Francisco Alexander',
      'Alice Garner',
      'Michael Elliott',
      'Tyler Sparks',
      'Rose Munoz',
      'Lena Rios',
      'Abbie Perkins',
    ],
  },
  {
    name: 'Escape room club',
    fa: 'fas fa-dungeon',
    members: [
      'Della Frank',
      'Nathan Briggs',
      'Alexander Caldwell',
      'John McCarthy',
      'Theodore Lawson',
    ],
  },
  {
    name: 'Thief club',
    fa: 'fas fa-mask',
    members: [
      'Ina Becker',
      'Jared Bryan',
      'Eugenia Crawford',
      'Mina Goodwin',
      'Hester Rodriquez',
      'Cameron Watts',
      'Charles Daniel',
      'Christine Barnes',
    ],
  },
  {
    name: 'Fight club',
    fa: 'fas fa-fist-raised',
    members: [
      'Bernice Marshall',
      'Alvin McCormick',
      'Aiden Edwards',
      'Daniel Mendoza',
      'Olive Poole',
    ],
  },
  {
    name: 'Magic club',
    fa: 'fas fa-magic',
    members: [
      'Harry Ruiz',
      'Tom Dunn',
      'Emily Gonzales',
      'Evelyn Snyder',
      'Evan Doyle',
      'Stanley Mann',
      'Tom Nash',
      'Glenn Luna',
      'Hattie McCoy',
      'Erik Cobb',
      'Ada Warren',
      'Lucy Webb',
    ],
  },
  {
    name: 'Live long and prosper club',
    fa: 'fas fa-hand-spock',
    members: [
      'Shane Lambert',
      'Willie Young',
      'Jane Hunt',
      'Martha Houston',
      'Clyde Johnston',
      'Jonathan Brooks',
      'Emily Howard',
      'Steven Peters',
      'Helen Stewart',
      'John Cox',
      'Lillie Moore',
      'Chris Walters',
      'Sally Cunningham',
      'Ada Klein',
      'Fanny Kelly',
      'Jane Norton',
      'Bertha Francis',
      'Jane Scott',
      'Etta Klein',
      'Bobby Rodriguez',
      'Tyler Goodman',
      'Peter Ferguson',
      'Theresa Hudson',
      'Lloyd Soto',
      'Stanley Hardy',
      'Bobby Stewart',
    ],
  },
];

class App extends React.Component {
  render() {
    // below is how we pass the clubs array down to a child component
    return <ClubList clubs={clubs} />;
  }
}

export default App;
